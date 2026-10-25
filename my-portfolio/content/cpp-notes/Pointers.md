When I first learned pointers as a first-year in Waterloo ECE, I was freaking out. Nothing the prof wrote on the board or said in the videos made sense to me, and I didn’t do very well in that class. Next term I have a DSA course, so I’m giving pointers and linked lists another shot, and writing down what finally clicked.

#### The one-line version

**A pointer is a variable that stores an address.** That’s it.

Every variable lives somewhere in memory, and that spot has an address (like `0x1000`). A normal variable stores a _value_. A pointer stores _where a value lives_.

#### The syntax, in plain English

cpp

```cpp
int x = 4;
int *px = &x;
int y = *px;
```

- `int x = 4;` creates an integer named `x` and sets it to 4.
- `int *px = &x;` creates an integer pointer named `px` and sets it to **the address of** `x`. `&` means “address of.”
- `int y = *px;` creates an integer named `y` and sets it to **the thing `px` points to**, which is 4. `*` here means “go to that address and get what’s there.”

The part that confused me: `*` means two different things.

- In a declaration (`int *px`), it means “this is a pointer.”
- Everywhere else (`*px`), it means “follow the pointer.”

#### Why do we even need them?

- **Dynamic memory.** Sometimes you don’t know how much memory you need until the program is running. `new` asks the OS for memory and hands you back an address, so you need a pointer to hold it.
- **Sharing data without copying it.** Passing a pointer to a function lets it work on the original data, not a copy.
- **Data structures.** Linked lists, trees, and graphs are just nodes pointing at other nodes. This is why pointers matter so much for DSA.

(The call stack, and static vs dynamic memory, really deserve their own write-up, so I’ll do that separately.)

#### The 3 ways pointers go wrong

**1. Wild pointer:** a pointer you never initialized.

cpp

```cpp
int *p;      // points to some random address
*p = 5;      // writing to random memory, likely a crash
```

**Fix:** always initialize. If you have nothing to point to yet, use `int *p = nullptr;`.

**2. Dangling pointer:** a pointer to memory that’s already been freed.

cpp

```cpp
int *p = new int(42);
delete p;    // memory is given back to the OS
*p = 10;     // p still holds the old address, but that memory isn't yours anymore
```

`delete` doesn’t erase the pointer. It just tells the OS that memory is free to reuse.  
**Fix:** set it to `nullptr` right after deleting it.

**3. Memory leak:** losing the address of memory you allocated.

cpp

```cpp
void f() {
    double *data = new double[10];
    // ... use data ...
    return;   // forgot delete[]: data is gone, the memory is not
}
```

Think of it like a friend giving you their phone number. If you lose the number, your friend still exists, but you can’t contact them anymore. The memory is still allocated, but you have no way to reach it or free it.

Short programs get away with this because the OS cleans up when they exit. Long-running programs, like a server or an embedded system that runs for months, slowly eat memory until they crash.  

**Fix:** every `new` needs a matching `delete` (and every `new[]` a matching `delete[]`), including on early `return`s. You also leak if you overwrite a pointer before deleting what it pointed to.

#### Cheat sheet

|Symbol|Meaning|
|---|---|
|`int *p`|p is a pointer to an int|
|`&x`|address of x|
|`*p`|the value p points to|
|`new` / `delete`|get memory / give it back|
|`nullptr`|“points to nothing” (safe default)|

Next up: linked lists, which are where pointers actually start to make sense.
