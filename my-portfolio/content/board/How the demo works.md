# The Star Demo: How a Breadboard Knows When Claude Is Done 🔌

The real star board isn't ordered yet. But I didn't want to wait weeks to see the idea actually work, so I grabbed an ESP32 dev board, a breadboard, and one LED.

Now when I send Claude Code a prompt, the LED pulses while it's thinking. When Claude's done, it stays lit.

<video src="files/star-demo.mp4" autoplay muted loop playsinline controls style="width:100%;border-radius:12px;"></video>

_2x speed. The LED is pulsing while Claude works, then goes solid when it finishes._

Quick honesty note: I had Claude write the firmware and the Mac script. I flashed it, wired it, tested it, and made it go through a few rounds of changes. This post is me walking through how it works, because I wanted to actually understand every piece.

## The stack

Here's everything that happens when I hit enter:

```
I send a prompt
   → Claude Code runs a hook (UserPromptSubmit)
   → the hook runs a Python script on my Mac
   → the script finds the ESP32 over Bluetooth and writes "work"
   → the ESP32 pulses the LED

Claude finishes
   → Stop hook → "done" → LED stays on
```

Five pieces, each doing one small job:

|Piece|Runs on|Job|
|---|---|---|
|Claude Code hooks|Mac|Run a command when Claude starts, stops, or needs me|
|notify.py|Mac|Find the board, send one word, disconnect|
|Bluetooth LE|the air|Carry that word across the desk|
|Arduino sketch|ESP32|Listen for the word, pick an LED pattern|
|One LED|breadboard|Look cool|

## Why Bluetooth?

Honestly, it started as a constraint. My ESP32 is plugged into my ThinkPad (that's where Arduino IDE lives), but Claude Code runs on my MacBook. So the two had to talk without a cable.

Bluetooth Low Energy (BLE) is built for exactly this: tiny messages, low power. The ESP32 acts like a fitness tracker or a heart rate monitor. It **advertises** ("hey, I'm Star-Notifier"), and the Mac connects to it like a phone would.

## Piece 1: Claude Code hooks

Hooks are shell commands that Claude Code runs on certain events. I use three:

- **UserPromptSubmit:** I sent a message, so start pulsing
- **Stop:** Claude finished, so stay lit
- **Notification:** Claude is waiting on me (like a permission prompt), so breathe slowly

They live in `~/.claude/settings.json`. One of them looks like this:

```json
"Stop": [
  { "hooks": [{ "type": "command",
      "command": "nohup ~/.star-notifier/bin/python .../notify.py done >/dev/null 2>&1 &" }] }
]
```

The `&` at the end matters. It runs the script in the background, so Claude never sits there waiting on Bluetooth.

## Piece 2: the Mac script

The script uses a Python library called **bleak** to talk Bluetooth. The important part is about ten lines:

```python
device = await BleakScanner.find_device_by_filter(
    lambda d, adv: d.name == NAME or SERVICE_UUID in adv.service_uuids,
    timeout=8.0,
)
if device is None:
    return False

async with BleakClient(device) as client:
    await client.write_gatt_char(COMMAND_UUID, command.encode(), response=True)
```

Scan for the board, connect, write one word like `work` or `done`, disconnect. If the board isn't around, it gives up after 8 seconds and never bothers Claude.

One sneaky bug I hit: because the hooks run in the background, a fast reply can fire `work` and `done` almost at the same time. Two scripts fighting over one Bluetooth connection is a bad time. So the script grabs a lock file first, and they take turns.

## Piece 3: the ESP32 firmware

### Setting up Bluetooth

BLE organizes data into **services** and **characteristics**. Think of a service as a folder and a characteristic as a file inside it that you can read or write. My board has one service with one characteristic, and the Mac writes a word into it.

```cpp
BLEDevice::init(DEVICE_NAME);
BLEServer *server = BLEDevice::createServer();

BLEService *service = server->createService(SERVICE_UUID);
BLECharacteristic *command = service->createCharacteristic(
    COMMAND_UUID, BLECharacteristic::PROPERTY_WRITE | BLECharacteristic::PROPERTY_WRITE_NR);
command->setCallbacks(new CommandCallbacks());
service->start();
```

The UUIDs are just random IDs, so the Mac knows it found *my* board and not someone's headphones.

### Reacting to a message

When the Mac writes, this runs:

```cpp
void onWrite(BLECharacteristic *c) override {
  String cmd = String(c->getValue().c_str());
  cmd.trim();
  cmd.toLowerCase();

  if (cmd == "work") request(WORKING);
  else if (cmd == "done") request(ON);
  else if (cmd == "wait") request(BREATHE);
  else if (cmd == "off") request(OFF);
}
```

Notice it doesn't touch the LED. Bluetooth runs on its own task inside the ESP32, so this function just leaves a note (`request(...)`) and gets out of the way. The main `loop()` picks up the note and does the animating. Keeping the callback short means Bluetooth never gets stuck behind an animation.

### The spinner pulse

This is my favourite bit. The Claude Code spinner cycles through glyphs that grow and shrink: `· ✢ ✳ ✶ ✻ ✽`. So the LED steps through brightness levels the same way, one step every 120 ms:

```cpp
static const uint8_t levels[] = {10, 40, 90, 150, 210, 255, 210, 150, 90, 40};
const uint32_t frame = 120;
setLed(levels[(t / frame) % (sizeof(levels) / sizeof(levels[0]))]);
```

`t` is how long it's been in this mode, so `t / frame` counts frames and `%` loops back to the start. It's stepped on purpose, not a smooth fade, because the spinner jumps between glyphs too. (120 ms is me eyeballing the spinner, not a measured number.)

`setLed()` uses `analogWrite`, which is PWM: flicking the pin on and off really fast so the LED looks dimmer or brighter.

## Things that surprised me

- **It's not instant.** Every update takes a second or two, because the script scans and reconnects every time. For a desk light that's fine. Keeping the connection open would fix it later.
- **macOS asks for Bluetooth permission** for your terminal app the first time. Easy to miss.
- **Library versions bite.** `getValue()` returns a different string type depending on which version of the ESP32 Arduino core you have. The `.c_str()` trick makes it work on both.
- **Short replies barely pulse.** If Claude answers in two seconds, the `done` lands right after `work`. Ask it something meaty for a good demo.

## What's next

- Move from one LED on a breadboard to the actual star, with 5 RGB LEDs, one per point
- Keep the Bluetooth connection open so it reacts instantly
- Lay out the real board myself in Altium, then compare it to Claude's version

All the code is in the repo: [github.com/aayanrahman/Star-Notifier](https://github.com/aayanrahman/Star-Notifier)
