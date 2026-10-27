Where do I even start with impedance? 

About a year ago my roommate interviewed at a really promising hardware startup. Somewhere during the interview however they hit him with a question that sounds harmless until you have to answer it out loud: 

**"Explain impedance"**

We both didn’t really know what it was, but it began to be covered in my 1B linear circuits course. Unfortunately, I didn’t pay too much attention, since I spent most of the summer term watching the World Cup and the NBA playoffs.

o I thought I’d give the concept some justice. For anyone whose understanding also starts and ends somewhere around “it’s resistance, but with a (j),” let’s try to unpack it. 

To put it simply **impedance describes the relationship between voltage and current, including their timings**. 

This notion of timing is what makes it particularly interesting 

With a resistor things are simple. Apply voltage get more current. Apply sinusoidal voltage and the current will follow the same kind of shape they will rise together, peak together, cross zero together. 

Resistance tells you their ratio:

$$
R=\frac{V}{I}  
$$

But when we start introducing capacitors and inductors things get a bit complicated. These devices want to store energy which means their behaviour depends on how things change. 

Here the current and voltage isn't going to always peak at the same time so we need a way to describe both **how much current flows** and **how far its timing shifts relative to the voltage**. This is what impedance is. 

Lets consider a capacitor.

Capacitors store energy in an electric field. As charge builds up on it, its voltage changes. Current is the rate at which that charge arrives.

Think of filling a bucket: the water level is like voltage, and the flow into the bucket is like current. A high water level doesn’t necessarily mean water is flowing in quickly. What matters is how quickly the level is changing.

For a capacitor, this relationship is:

$$
i=C\frac{dv}{dt}  
$$

You don’t have to love calculus to read that sentence: **a capacitor needs current for its voltage to change.**

With a sinusoidal voltage, the voltage changes fastest as it crosses zero. That’s when the capacitor’s current is largest. At the voltage peak, the voltage momentarily stops changing, so the current is zero.

The current reaches its peak a quarter cycle before the voltage does.

That’s what people mean when they say **current leads voltage by 90° in an ideal capacitor.**

An inductor has a different personality.

It stores energy in a magnetic field and resists changes in current. An intuitive comparison is inertia: keeping something moving is one thing, changing how fast it moves takes effort.

For an inductor, voltage provides that effort:

$$
v=L\frac{di}{dt}  
$$

The faster you want its current to change, the more voltage you need.

With a sinusoidal current, the voltage peaks a quarter-cycle before the current. **Voltage leads current by 90° in an ideal inductor.**

So we now have three different behaviours:

- A resistor’s voltage and current move together.
- A capacitor’s current leads its voltage.
- An inductor’s current lags its voltage.

Writing out sine waves every time we combine these components would get tedious very quickly. This is where phasors earn their place.

A phasor represents a sinusoid using a magnitude and a phase angle. You can picture it as a rotating arrow: its length represents amplitude, and its angle tracks where it is in the cycle.

When voltage and current have the same frequency, their arrows rotate together. Their relative angle stays fixed, so we can leave out the shared rotation and work with their lengths and angles.

Using those phasors, impedance is:

$$
Z=\frac{\tilde V}{\tilde I}=R+jX  
$$

The tildes just indicate that we’re dividing phasors, so the result includes phase information.

(R) is resistance. (X) is reactance, the part associated with energy storage and the resulting phase shift. The (j) lets us keep that information in the same number.

“Imaginary” is an unfortunate name here as the timing difference is very much real.

The magnitude of impedance tells you the voltage to current amplitude ratio. Its angle tells you how far voltage leads or lags current.

And impedance depends on frequency.

For the same voltage amplitude, a capacitor draws more current at higher frequencies its voltage is changing faster. Its impedance magnitude decreases.

An inductor requires more voltage to produce the same current amplitude at higher frequencies its current must change faster. Its impedance magnitude increases.

This is why asking for a circuit’s impedance without specifying frequency can leave half the question unanswered.

So if someone asked me to explain impedance in an interview I’d start here:

**“Impedance is the voltage to current ratio for sinusoidal signals at a given frequency. It tells us both the relative amplitudes and the phase difference. Resistance accounts for energy dissipated, while reactance accounts for energy stored and returned by components like capacitors and inductors.”**

Then I’d use the capacitor example to explain why timing enters the picture.

Because remembering (Z=R+jX) is useful.

Being able to explain why a capacitor’s current peaks when its voltage crosses zero is probably where the interview gets a little less stressful