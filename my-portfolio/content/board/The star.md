# I'm Building a Star That Blinks When Claude Code Is Done ⭐

You know when you give Claude Code a big task and then just sit there watching the terminal? Yeah, I got tired of that.

So I'm making a little star-shaped board that plugs into my laptop over USB-C and **lights up when Claude finishes a prompt**. I start a task, go grab food, and the star on my desk tells me when it's done.

## Why though?

Two reasons:

- **I wanted a real board to practice on.** I'm going through Bogatin's signal integrity book right now, and reading only gets you so far. This board is tiny, but it has USB, a regulator, decoupling caps, and an antenna, so there's a lot to learn from.
- **I wanted to see how good AI board design actually is.** I got inspired by Sage Cadence's board on Instagram, so I had Claude Code generate the whole thing: schematic _and_ layout. Then I went through it like a design review.

## How it works

```
Claude finishes a prompt
   → a Claude Code hook runs a command
   → it sends "done" over USB to the board
   → the star blinks ✨
```

The ESP32-C3 has USB built in, so my laptop just sees it as a serial port. No extra chips, no programmer.

## What Claude came up with

[Claude's layout around the LEDs](https://claude.ai/chat/images/claude-layout-leds.png)
![[Pasted image 20261026200649.png]]
[Claude's layout around USB-C](https://claude.ai/chat/images/claude-layout-usb.png)
![[Pasted image 20261026200708.png]]
Honestly? It laid this out in a way I _never_ would have. Parts on both sides, traces weaving over and under each other, everything stacked on top of everything else.

It's a mess. But it's also kind of art.

And on paper it works! Every connection is routed and it passes KiCad's design rule check. But nothing's been built yet, and I'd never want to hand-solder it or debug it. Getting something that connects is easy now. Knowing whether it's _good_ still takes understanding the fundamentals.

## What Claude got right

More than I expected, actually:

- **The resistors on the USB-C port** that tell a charger "hey, send me 5 V." Lots of people forget these and their board just... doesn't turn on.
- **Static protection** on the USB lines.
- **A level shifter for the LEDs.** The LEDs want a stronger signal than the ESP can give them. Plenty of hobby boards skip this and get glitchy LEDs.

## What I changed

||Claude|Me|Why|
|---|---|---|---|
|Chip|ESP32-C3-WROOM-02|ESP32-C3-MINI-1-N4X|Smaller, and the newer version|
|LEDs|10 tiny ones (2 mm)|5 bigger ones (5 mm)|I can actually solder these 😅|
|Parts|Both sides|One side|My hot plate only heats from below|

**The sneaky one: power.** 5 LEDs at full brightness plus the ESP's Wi-Fi can pull more than a USB port gives you. The fix is just turning the brightness down in code. It's a desk light, it doesn't need to be a flashlight.

## Specs (the version I'm building)

- **Size:** ~45 × 43 mm star
- **Power:** USB-C, 5 V
- **Brain:** ESP32-C3 (Wi-Fi + Bluetooth too, for a future wireless version)
- **Lights:** 5 RGB LEDs, one per point
- **Cost:** about $50–90 for 5 boards, all in

## The plan

1. Redo it properly in Altium with my changes
2. Order boards + parts from JLCPCB
3. Solder it in stages: power first, then the chip, then the LEDs. If something breaks, I'll know what it was
4. Write the code + set up the Claude hook
5. Post it, _especially_ if it catches fire

## Play with it

Everything's open source.

**Repo:** [github.com/aayanrahman/Star-Notifier](https://github.com/aayanrahman/Star-Notifier)

**3D model:** [download the .step](files/star-notifier.step)

<script type="module" src="https://cdn.jsdelivr.net/npm/@google/model-viewer@3.5.0/dist/model-viewer.min.js"></script>

<model-viewer src="files/star-notifier.glb" orientation="180deg 0deg 0deg" alt="3D model of the Star Notifier board" auto-rotate camera-controls shadow-intensity="1" style="width:100%;height:420px;background:#f7f6f2;border-radius:12px;"></model-viewer>

_Drag it around!_

## Coming up

- Laying it out myself: Claude's version vs mine, side by side
- First power-on (fingers crossed)
- Maybe a wireless v2, no cable needed