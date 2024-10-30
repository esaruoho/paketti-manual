<link rel="stylesheet" href="dark-mode.css">

| [Patreon Paketti](http://patreon.com/esaruoho) |
[GitHub Paketti](https://github.com/esaruoho/org.lackluster.Paketti.xrnx/) |
[Discord Paketti](https://discord.gg/Qex7k5j4wG) |
[Gumroad Paketti](http://lackluster.gumroad.com/l/paketti) |

 1. [What is Paketti](#what-is-paketti)
 3. [What people say about Paketti](#what-people-say-about-paketti)
 4. [Where to say things about Paketti](#where-to-say-things-about-paketti)
 5. [How to Support](#how-to-support)
 6. [Brickwall](#brickwall)
 7. [Roadmap](#roadmap)
 8. [Old About](#old-about)
 9. [Credits](#credits)
 10. [Old Index](#index)

## What is Paketti

Paketti has been called a firmware update or a framework for Renoise. It introduces thousands of shortcuts, hundreds of midimappings, over 30 dialogs and multiple multiple tweaks to Renoise. 

## What people say about Paketti

"It's like it's Renoise+"

"Your extension has so much to it. I was playing around with it the other day and I feel like I need to spend just a day to learn everything I can do with it. It's like Renoise+"

"Your tool is really well thought out - most well thought out Renoise tool I've come across actually. Functions I even didn't think about and it's already inside your tool. Speaking of dedication."

"I was mostly in awe and started immediately imagining new ways to use renoise"

"This is by far the most thought out tool ever. Why is this not natively implemented?"

"every renoise user should know and use paketti, without it renoise is not so fun"

"got to be one of the most (if not the most) organized set of tools ive ever seen for Renoise."

"I found Paketti to be the most versatile and flexible in its development direction. It has made Renoise very useful and enjoyable to use. Thank you."

"You are essentially writing... a completely new framework over the engine.

## Where to say things about Paketti

- Join the [Paketti Discord](https://discord.gg/Qex7k5j4wG)
- Leave issues here on [GitHub](https://github.com/esaruoho/org.lackluster.Paketti.xrnx/issues)
- Hit the mostly dead [Renoise Forum Paketti thread](https://forum.renoise.com/t/new-tool-3-1-paketti-now-compatible-with-renoise-v3-v3-4-4/)

# How to Support

You can 
- Join my [Patreon](http://patreon.com/esaruoho) as a monthly supporter. This adds up and would help me. There are different level tiers from 3€ to 300€.
- Sponsor me on GitHub at [GitHub Sponsors](https://github.com/sponsors/esaruoho)
- Send me a donation via [PayPal](http://paypal.me/esaruoho). 
- Buy Paketti via [Gumroad](https://lackluster.gumroad.com/l/paketti) for a one time purchase.

# Roadmap
I'm slowly processing through a bunch of Renoise Forums, such as "Ideas and Suggestions", "Beginners Questions" and filtering through them one thread at a time to see new ideas, deciding "This can be scripted" -> and add it to the todo-list.

The Ideas and Suggestions forum dump I created, has all the thread posts from 2002 onwards to 2024 April, all 7361 of them and as of October 30th I had only 4400 of them left to go through. This is only the beginning, because once I have made it through that list, it's time to check out the 5000+ Beginners questions, and the other couple of thousand threads from "Renoise Tools Discussion" & "Renoise Tools" for abandoned tools. 

After I've filtered up a list of things I can do, it's time to turn them into tickets. As of today, I have 543 items picked from "Ideas and Suggestions" - some of which I have already scripted.

I'm also running through contacting people and asking for more details, trying to get more ideas of their issues with Renoise or trackers.. And one thing leads to another.

If there's anything in the manual here, that feels obscure or requires more explaining, please send me a message or leave an issue, and I'll try to flesh it out and write it more clearly.

So to repeat, I'm adding features people have requested over the past 22 years, I'm adding features from other trackers, and also tweaking abandoned tools and making them work again, but the Paketti way, and introducing them.

Hence why it's useful if I can get as much support as I can to keep going at this, it feels like this'll take 3-5 years to cover everything. 

# Brickwall

Paketti tries to circumvent some of the most painful points of Renoise, and replace them with better, easier, faster, more user-friendly solutions.

#### Loading and Saving Samples

One of them is the complete dismissal of the Disk Browser. You don't need to use it to load samples. In fact, I would encourage you to never use it for loading or saving samples - just use the Paketti solutions.

For that, you just use the "Paketti PitchBend Multiple Sample Loader" & "Paketti PitchBend Drumkit Loader" shortcuts. they will load a sample, and immediately initialize it with:
PitchBend 2. Cutoff 3. Resonance 4. Cutoff LFO Frequency 5. Cutoff LFO Amp (4+5 are used for autofilter like features) 6. OverDrive 7. Parallel Compression 8. PitchBend Glide/Inertia (set it to max, and your regular midicontroller pitchbend input will be very slow, set it to minimum, pitchbending will be immediate). Everytime you load something using Paketti Loaders, the Paketti Preferences are used to introduce your preferred loopmode, autofade, autoseek, oneshot, interpolation setting, New note Action, selected FilterType.  for these, there's a Default XRNI instrument being used, which comes with Paketti. you can of course replace it with a completely different XRNI - which will then get it's sample overwritten on every load.

The `*Instr. Macros` device that is added to the track you are on, when you load the sample, allows you to directly start automating the macro parameters. Meaning, you would load a sample using Paketti, input a few notes to the pattern editor, and immediately be able to start drawing automation for any of the 8 macro controls. so you could for instance put in a drumloop, and start drawing a cutoff automation curve directly to modulate the cutoff parameter.

The DrumKit loader loads a max of 120 samples into the instrument. load more, it will only load 120 samples. same with the 8 macros, same with the instr macros. the drums are mapped automatically from C0 to B9. the Windows Explorer or macOS Finder is used for selecting files, meaning no Disk Browser use at all.

There's shortcuts and midimappings for saving the current sample as .WAV or .FLAC. There's also shortcuts+midimappings for saving the current selection in the Sample Editor to .WAV or .FLAC.

#### Loading Devices and Plugins

another is the introduction of shortcuts and midimappings for loading your preferred native devices (both regular, and hidden/legacy effects), your favorite VST,VST3,AudioUnit/LADSPA/DSSI devices. this means that you go to the Tools -> Paketti -> Plugins/Devices -> Device Loader dialog, and check your favorites, click on "add as shortcut/midimapping" and from here onwards, you can map the newly created shortcuts for loading your devices onto the track you are on. if you're in sample fx chain mode, those devices will be loaded instead of to track dsp. it means you can for instance (in my usecase) press shift-q e r t z a v  and out come 7 devices to the selected track.  same with midibuttons, after selecting your favorites, you can use the midi mappings to set up midibuttons for loading your desired device onto your selected track.

#### Wipe & Slice

there's a mathematical slicer, which takes your drumloop and, depending on which shortcut you pick, slices it in half (two slices), or 4 to max 128 slices. meaning if your loop already loops well, you can just split it into 16-32-64 slices and start drumming away at the loop.

for slices, there's also a method for adjusting the slices left & right by nudging the start / endpoint, much like MPC does it. it really is to be seen to be believed. it means you no longer need to keep zooming in and zooming out to adjust the slices, you can just view the slice itself, and adjust where it starts and stops.

there's also, to go with this logic, "Isolate Slices to New Instruments", which creates brand new instruments into your song, and if you say, were on slice 6 (let's say a snare), when you run the isolate slices, you'll still be on the snare, but snare as a newly created instrument.

#### Freeze & Flatten a.k.a. Clean Render Selected Track or Group.

there's a Clean Render Selected Track / Group. this will solo the selected track, render it as a wavefile, create a new track (named with a matching title such as "Bass (Rendered)" (if your original track was called Bass, input C-4 to the newly created track, ingest the 8 macros to it, mute the original track, collapse the original track, and if you select it, also bypass the effects in the original track. and it's ready to be automated, by default, too. if you have a line input device on the track, instead of "Highest" diskwriting speed it will switch to "Realtime" - meaning, if you have incoming audio being processed through renoise effects, that incoming audio will be recorded to the new instrument, with the effects. perfect for external synthesizers being controlled by midi, for instance.

#### Improved Automation drawing, including multi-pattern automation.

since the renoise automation drawing is quite limited, i've added midi shortcuts and menu entries for drawing curves up/down (exponential, linear), and also added logic that if you're trying to do an "exponential to max" curve on a pitchbend/panning automation lane, it will be drawn from the center to the top, instead of from the bottom to the top.
there's also multipattern automation drawing, meaning, you make a selection from pattern matrix and it will draw an exponential curve or linear curve from patternStart to patternEnd.

there's also midimappings for automation start and automation end, and a third midimapping knob for deciding which automation curve is drawn and from where to where. so you can pick an automation area, and use a knob to decide what the curve would look like.

i've also introduced a "Draw Automation to Selected Automation Parameter". this means, you're in ANY automation lane whatsoever, have playback on, set record on, set follow pattern on, and turn the knob == result == you are drawing automation to that lane. you don't need to map the midi anywhere in the track device or anywhere, just map it once to the "automate selected parameter" and just select any parameter and just draw in. it also works with selections, meaning, you select a section and draw with the knob, and it writes to the section (this with follow pattern off, of course).

<div style="position: relative; padding-bottom: 64.90384615384616%; height: 0;"><iframe src="https://www.loom.com/embed/5b46a1dd7d5e4d82b87ff145fc38c3cb?sid=7383c8f2-6daf-44ea-a9f2-305d602f5a21" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

#### Paketti Theme Selector
This dialog comes in pre-populated with 518 themes, and you can pick your favorite themes out of the mix, and have Renoise randomize through the favorites (or all themes). So every time you boot up Renoise or load a new song, a different theme will load. Great for discovering new themes.

https://public-files.gumroad.com/i8xgettth9an6ibvc6l8oto44b05![image](https://github.com/user-attachments/assets/f5fcebe7-749d-417d-8fe9-fa95915c651e)

#### Paketti Gater
This allows directly writing in looping volume, retrig, backwardsplayback and panning gates. E
Each of these rows have their own steps, min 1 max 16. so if you have a 512 row pattern and use a 16 row volume gater, then it'll keep looping till the end of the 512 row patterns. or if you have a 3 row panning step, those 3 steps will repeat until the end of the pattern, and so on. these are also designed to type directly to the pattern editor, either for volume control of sample, or volume control of the mixer channel.

https://public-files.gumroad.com/w9a7t5n7ya2or8bpe8s795x7yn47![image](https://github.com/user-attachments/assets/5f7f8612-2cd5-44d8-8cfd-c36508022632)

Example:
![gater improvement updates](https://github.com/user-attachments/assets/97b3dc3e-6e06-4991-99d6-e9bb42fd00d6)

#### Paketti Groovebox 8120

There's a 8 part 16 step stepsequencer which writes directly to the Pattern Editor. You can load 120 samples into each part, pick your preferred sound, and use checkboxes to make them play. Probability checkboxes to modify how likely the step per part is to play, can draw automation directly by clicking on Show Automation (leveraging the 8 macros introduced on every Sample Load) and use buttons to randomize step sequencer content, select a random sample for all parts, or selecting random samples for each part, reverse any of the part or all part samples.. and you can limit the steps from 16 to 1 at will.
a brief demo at **SO HEY TWITCH DELETES STREAMS SO ITS GONE** // TODO I need to make a new one.

There's dozens of impulsetracker/screamtracker3 shortcuts for pattern editing and modification, some of which have been recently supercharged to also allow for selecting automation, gif here meaning when you select something using paketti shortcuts, it will also select the automation, if automation is visible. this can be combined with the midiknobs for drawing automation curves easily.
![alt-d alt-u with automation](https://github.com/user-attachments/assets/d58d4e85-d79a-4593-b738-2712dae5e098)

#### Dynamic Views for cycling through with shortcuts.

The Dynamic Views let you have a max of 8 shortcuts which cycle through the view settings that you have picked. each of the 8 shortcuts can have max 8 different cycles. 
<img width="1468" alt="Screenshot 2024-10-23 at 15 46 33" src="https://github.com/user-attachments/assets/246e911d-9522-4ed0-8e06-e0c57e31370e">
so you have maximum control over "view presets" but they're much more powerful than the 8 that renoise allows you to have, because they remember their state. You could, for instance, cycle, with one shortcut, from Pattern Editor to Sample Editor + show Sample Recorder, then press the same shortcut to hit Mixer, show Disk Browser + Pattern Matrix + Instrument Box, then again to only show Pattern Editor and Automation.

#### MIDI Populator

there's a method of creating 16 new tracks with 16 midi input channels and 16 midi output channels and 16 plugin devices, automatic send generation and line input generation, for those who want to use renoise with an external sequencer with a multi-out soundcard, or those who want to use renoise as a sequencer for external synthesizers and want to map the midioutput channels themselves. all of the generated samples will have midi control devices set up directly, and automation ready to go.
<img width="824" alt="Screenshot 2024-10-28 at 17 47 40" src="https://github.com/user-attachments/assets/40ad3f08-72d9-4f74-b668-c6cf38fd1f8c">

#### Default Phrase Settings
This allows you to set your Phrase Preferences - i.e., when you use the Paketti -specific shortcut for creating or modifying current Phrase, the settings will be added.
<img width="684" alt="Screenshot 2024-10-28 at 17 47 52" src="https://github.com/user-attachments/assets/db5aea29-5634-4dde-a61a-178e46711123">

#### eSpeak Text-to-Speech speechsynthesizer

This uses `espeak-ng` for creating spoken word samples using text-to-speech synthesis.
<img width="385" alt="Screenshot 2024-10-28 at 17 48 14" src="https://github.com/user-attachments/assets/b62eadd9-3afa-402b-a17e-35f9d87db8df">


there's randomizers for parameters of selected device, a mono-device which can be added or toggled on/off from the channel for quickly monoing
<img width="969" alt="Screenshot 2024-10-28 at 17 48 30" src="https://github.com/user-attachments/assets/b45988d9-f566-4b97-bc25-e729c3ab2c92">


the same shortcut + midimapping loader for devices, is also available for plugins, so vst,vst3,audiounit,ladspa,dssi softsynths can be shot to the instrument box with shortcuts + midimappings


there's an inverter device which inverts the audio - using the Gainer device. This can be added to both the Sample FX Chain and the Track DSP Chains.

The send and multiband send shortcuts load the native devices "correctly" aka "Keep Source and volume at zero" as opposed to "mute source and volume at max".. 
<img width="1036" alt="Screenshot 2024-10-28 at 17 49 45" src="https://github.com/user-attachments/assets/7e6f6ac2-c007-47a0-94c8-ef50820f95e7">

### 0G01 Loader

This uses the `G01` (Glide to note) trick to allow for playing really long samples, even if the pattern would be shorter than the length of the sample. The sample will play until the end, and then replay again at the start of the next replay. This means you can have a 4 second drumloop but play 20 minutes of pads on top of it.

there's a midimapping + shortcut that 1) shows sample recorder 2) starts recording 3) press the shortcut again, it stops the recording, throws in the 8 macros
so you can quickly start recording anything by just pressing the shortcut or holding down a midi button, let go of the midibutton, sampling stops

there's a pattern cheatsheet which lets you input pattern commands to either selected row or selection in pattern:
<img width="621" alt="Screenshot 2024-10-28 at 17 50 01" src="https://github.com/user-attachments/assets/57086eb7-b7c9-47f0-a4da-ff4f22e4624d">


there's shortcuts + midimappings for inputting volume, panning, delay, samplefx effect commands and effect parameters to the selection in pattern

there's "flood fill by editstep" shortcuts which let you take what's under your cursor and repeat it every 6th row or 8th row etc, or every row.

there's a replicate at cursor shortcut, which enables this kind of stuff:

<div style="position: relative; padding-bottom: 64.90384615384616%; height: 0;"><iframe src="https://www.loom.com/embed/a437d74618934e9db634ceb41b1c5b9a?sid=10a1da7b-de26-4b44-87b0-dcc735ba62c9" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

https://www.loom.com/share/a437d74618934e9db634ceb41b1c5b9a?sid=ead6a274-1a6a-4ea1-a068-344fed4aef23

there's a "Set Repeater Value" Knob midimapping which will either 1) add repeater and activate it 2)detect repeater exists and modify the parameters, allowing for stuff like this:

https://www.loom.com/share/f4f94d05045a4df49896d52202d3adf7?sid=9c7c6c79-005d-48f4-ba21-ac06475b5bfc

there's shortcuts for changing pattern length to 4, 8, 16, 24, 32, 48, 64, 96, 128, 256, 512 - methods for duplicating content with 1-256 row patterns to double it, then `LPB*2` diskwriting aka rendering a new sample, but making a clone of the pattern and setting it's LPB to current LPB, then the clone of the pattern has LPB times two, and the audio playing there.  there's seamless rendering, aka if you have anything below 257 rows of pattern, it will duplicate it, render it, select the beginning 256 rows (so you can delete them if you like) and add a loop to the other 256 rows so you can have a reliably looping (mostly) long pad with tail mixed in..  mono to stereo converters for sample data (mono to left, right blank, mono to right, left blank, mono to stereo with both).. there's a yt-dlp downloader that downloads the full audio from a youtube video, instagram, facebook, twitter posts, and it already has the macros loaded in.. and there's multiple missing shortcuts for sample pitch finetune panning loop etc controls, same for midi.. i could go on. i've done max 4 hour demos of going through all the features, normally around 45minutes to 1,5hours depending on what i remember to show

there's "Duplicate Instrument and Reverse" - which both makes a copy of the currently selected instrument, and then reverses the sample, and selects the sample.
Duplicate Track and Instrument - will take the notes that are there in the current track. + track dsps, and make a new track, select the track, and duplicate the instrument. and if you have a plugin open in the original instrument, and duplicate the instrument with this script, then it closes the plugin external editor, and duplicates the instrument, jumps to the newly created track, and opens the plugin's external editor for it.
there's a dialog that lets you randomize a selected device, or all devices in a selected track, or selected plugin, or all selected plugins,  -- there's 5 different flavors of all four of those, with percentages you can set for them.
there's a "duplicate track with selected instrument", meaning you can keep copying the note content, but it'll be branded with your current instrument, instead of it being a duplicated instrument.

the randomize with percentage was from ModPlugTracker. there's also a bunch of features from PlayerPro, such as this note inputting dialog, which lets you input notes, with editstep, to selection, or current row, meaning you can do stuff like this. there's also a method of hovering the mouse to write effect columns to the selection in pattern..
i've also replicated the OctaMED Pick/Put Note technique, which lets you pick any note column + effect column content, and put it down. think of it like macros for note column + effect column content.  you can do them with shortcuts (both picking up and putting down) but also with midi. so you could for instance have chords grabbed and keep slamming them down - there's also controls for printing the information with a specific instrument.

one thing i keep forgetting is the Launch App Selection. you can define 6 apps, and when you run the shortcut, or menu entry, or click on "Send selected sample" in the dialog, it saves a temporary file and loads it in the app. such as audacity, apple music, ableton live (straight to session view). there's also a backup folder (3 places) where it saves to one of the three places depending on the shortcut

I've also built two dialogs for showing keybindings - with fuzzy search. one shows Paketti shortcuts only, the other shows all Renoise KeyBindings but can be filtered with tools or without tools, etc.

then there's tiny audio tools such as "strip silence", "move beginning silence to the end".. shortcuts for invert left channel, invert right channel (or invert both channels). audio rotators, so moving the beginning to the left until it crosses over to the end, i.e. "nudge audio left / right", then there's rotation for moving the audio waveform up and down for extreme dcoffset and clippy distortion. then there's a DC Offset kick generator,  "Selection in pattern to group" (turn selected tracks into one group), 
midimappings for toggling effects on and off. midimappings + shortcuts for displaying the external editor on Master or selected track, of a specific track. i.e. if you use renoise for mastering and always have certain types of effects on master, you can show/hide that specifically named effect, no matter where it is in the effect chain. and if it's not in the track dsp chain, then it will be loaded and added in.
uncollapse/collapse all tracks for clearing up visual clutter
Convolver IR export and IR import - when you export the selected IR, it opens up in the sample editor, so you can modify it, then import it back in.
Switch Plugin Auto-Suspend On/Off
"Save All Samples to Backup Folder 1...3" - all samples in the song will be saved to your preferred folder
Unison Generator, takes a chipsound and makes 8 identical copies of it, shifts each of them left by 1/8 to 7/8 - modifies the volume, randomizes finetune, randomizes panning, and drops the overall volume (and includes the instrument macros in the copy) - for a nicer chipsound
there's hundreds of Section/Sequence/Selection shortcuts for queueing what plays next, or skipping to the next section or previous section or "what's next in the queue" and wiping the queue
there's a global shortcut for Clone Current Sequence, 
Resize all non-empty patterns to 96 rows..  and Resize all non-empty patterns to <current pattern> rows
Create Identical Track - takes the Note Columns / Effect Columns & Visible Columns&copies

For a selection in sample editor, you can press a shortcut to "create new instrument & loop". there's "mute or solo selection in pattern",  expand/shrink selection content shortcuts, set selection to selected instrument.. bypass all effects in track, or enable.. show all parameters of all devices in track

Oblique Strategies Dialog / Loader - it will randomly pick one Oblique Strategy from a list on the status whenever you save or load a song or restart Renoise
Paketti Midi Mappings - it shows some of the Paketti MidiMappings and if you have Midi Mapping "Learn" mode on, you can actually pick them yourself and assign them easily. for better discoverability
Output Routings dialog that shows all the tracks and lets you set the Output Routings in case you have a multi-out soundcard
Shortcuts for setting each track, or the Master, to a specific output routing channel (01-64) for those with multi-out soundcards
Track Renamer - select a bunch of tracks with selection-in-pattern and rename them all in one go, one track at a time
Phrase Doubler / Halver (takes the content of the Phrase and increases the size or decreases the size
Set Phrase Length to 001-004-006-008-012-016-024-032-048-064-096-128-192-256-384-512
Set Phrase LPB 1-256
same for pattern LPB
Print current BPM & LPB to Master track of Pattern - so can modify the tempo in another pattern -good for `LPB*2` i.e. increasing resolution
Keep Sequence Sorted True/False/Toggle
15 frame fade in fade out for reducing clicks
Duplicate sample, maximize audio, turn to 16bit, save as wav or flac (in case you want to deliver them or post them somewhere)
Flip Sample - this allows for 1/2 1/4 1/8 1/16 flipping/rotating of a sample, good for beats if you wanna flip it or any other type of sample
select first half of sample buffer shortcut - and second half too. midimappings for select sample buffer start and end, so you can just use two knobs to select the length and modify
set loop mode off, forward, pingpong, backwards
copy note-on sample to note-off at transpose 0, +12, +24, -12, -24 meaning when you hit a note off on a bassnote, the same basenote can play an octave higher or lower - good for octave basses
jump to first track in next group / jump to first track in previous group

midimappings for select instrument, select track, keyboard octave, editstep 0-64 and 1-64, double editstep halve editstep, beatsync line control / double beatsync / halve beatsync
8 midimappings for controlling the macros of the current instrument. meaning, you use the 8 midimappings on any track and you can control macro knobs without having to assign them to a specific instrument. i.e. they're "free" / "dynamic" for lack of a better word
Interval generator. shortcuts for adding +1 to +12 to the current note - adds a new note column, moves to it and adds a note that is +x or -x higher/lower than the original basenote. also midimappings for selecting multiple chord intervals 
good for experimenting with basenotes and writing intervals in and seeing what happens. couple that with the Paketti Gater and you can go wherever you please really.
Wipe Effects from selection in pattern
shortcuts for showing a specific number of note columns, or effect columns
expose / hide note columns or effect columns - this replaces the Renoise "add new note column" by actually exposing it AND selecting it. much more intuitive
direct shortcuts for writing Axx to Zxx effects and their content (+1 -1 +10 -10) to selection or row
match delay column to current row  (or panning, or volume).. means you have a row you've selected, run the shortcut, every row in the pattern gets the same delay, or panning, or volume setting
Note Interpolation (entering notes from beginning to end of selection so c-1 at 00 and c-5 at 64? every step has an interpolated value based on math
randomize delay, panning and volume value for selected tracks and their columns
flood fill with selection - takes your selection and fills the pattern with it in a loop
shortcuts for setting visible columns (vol,pan,delay,samplefx) for all tracks globally
clear/delete track dsp effects from current track
bpm increase +0.1 -0.1 +0.5 -0.5 +1 -1 +5 -5 
bypass all devices on all tracks
bypass all devices on selected track

set master output volume in dB to -INF or 0 or -0.1 +0.1 -1 +1 for better control
midi mappings for setting global groove control 1,2,3,4
multi-combos like "shortcut for toggling play, record, follow pattern, metronome on/off" or "toggle play,record,followpattern on/off, or record+followpattern on/off
hide open track dsp device + sample fx device external editors
shortcuts + menu entries for adding sample modulation devices (all available for volume, pan, cutoff, resonance, overdrive, pitch) 
shortcut for adding and opening formula device
direct shortcut for exposing the pitchstep device external editor, which is included in all Paketti-loaded samples so you can immediately start pitching it up and around for extra randomness
visual editmode for highlighting which track is selected, for those with aged eyes and who have grown tired of trying to figure out which track they've selected
volume, panning, delay dialog with 16 sliders - basically another step control for setting specific settings, again 16 steps but can be reduced to 1-16 steps for each, so they can be offset
shortcuts for starting playback at a specific row (000-512)..
shortcuts for starting playback at a random line of the pattern, or random 2nd or 4th or 8th row (in order to be able to step across it in a stair/stepped way
play current line and step forwards, play current line and step backwards, for those who want to use renoise as a.. musical box? @tkna how would you describe this with words?
shortcuts for selecting a specific track i.e. 1-32, you set the shortcut and it jumps you there
sample fx group + mod group shortcuts for modifying them, same with mute groups
show/hide selected track's device 1 to 64, another external editor shower/hider
a mode to enter where if you're in effect column, it'll jump you to the next row in that track that has a note. so you can enter effects to where the notes are

okay.. just realized i completely neglected to talk about the "Paketti Automation" setup.

This brings Master track automation of Global Groove, LPB (1-32), BPM (20-300), EditStep, Octave, EditMode, Recorder, Pattern Length, Instrument Pitch, Instrument LoopStart, Instrument LoopEnd, and 3 other things that remain to be figured out and configured.

this means you can actually automate when the recording is on or off, when sample is being recorded (!), what the selected instrument pitch ir or selected instrument loopstart+loopend, and there's 3 more additional things that could be automated, if i could just figure out what they are. any ideas?

the reason why there's LPB + BPM control is that the BPM in Renoise Master track automation is 20-999 (!) and LPB is 1-256, so  just a bit too much, i asked around a lot and 20-300 and 1-32 seemed to be the agreed upon, anything more, just let me know (64?). but to maintain automation resolution and "keeping it making sense", for most uses, these artifiical limitations are alright

i think the reason why i forgot to mention this was that i have had a tough time finding anyone to tell me what else could be done. i did experiments of using automation to change lower frame, middle frame, upper frame views, for instance. basically any script can be run like this. but i couldn't get anyone to talk to me about what they wanted and gave up and forgot about it

# Old About

Paketti is a multipurpose Renoise tool. Working like an expansion pack, it delivers hundreds of new functionalities to the app, ranging from Quality-of-Life (QoL) improvements to new advanced features inspired by Impulse Tracker, Schism Tracker, ModPlugTracker, Player Pro, John Player/Quantum SoundTracker/PollyTracker, OctaMED and many others. It also addresses multiple community requests from the Renoise Forum that were not yet considered by the developers. 

It is far too complex to sum up in just a few words. However, some notable changes include:

* Over three thousand new keybinds covering multiple areas of Renoise;
* Default XRNI functionality - each loaded instrument or drumkit has Pitchbend, Glide Amount, Cutoff, Resonance, Cutoff LFO Amount, Cutoff LFO Frequency, Overdrive, Parallel Compression.
* Automatically load multiple samples into sequential instrument slots;
* Device parameter randomizer;
* Plugin parameter randomizer;
* Change default computer keyboard Velocity with Midi Mapping;
* Change Global Grooves with Midi Mapping;
* Freeze & Flatten Track -> Creates a new Track with content playing. Also Records incoming audio if `#Line-in Device` is in the Selected Track;
* Quick switch autosuspend for Selected Plugin;
* Bypass all devices in Selected Track;
* Floating window to insert plugins or Devices and add them as keybinds and MidiMappings;
* Floating interactable FX column cheat sheet, including sliders to quickly write changes to row or selection in pattern in your pattern;
* Pattern doubler/halver (duplicates the Pattern content, and the automation);
* Color/highlight the selected track in Pattern Editor (with EditMode (Record On/Off);
* Dozens of shortcuts for Pattern AND Phrase editing;
* Impulse Tracker (.it) key commands (`ALT-D *2`, `ALT-L *2`, `ALT-U`, `ALT-F`, `ALT-G`, `ALT-Y`, `Home *2`, `End *2`, `F2 F3 F4 F5 F6 F8 F12`);
* Quickly add Automation curves to pattern automation (fade ins/fade outs (linear or exponential), pitchbend/panning);
* Show/Hide Device parameters as sliders in the Mixer;
* Control Selected Sample loop start/endpoints with MIDI;
* Control Automation start / endSelection via MidiMappings
* Control Sample Buffer start / endSelection via MidiMappings
* And much much more!

# Credits

The original Paketti Manual projects was started by @un, thanks a lot for that. He donated it to me, @esaruoho - and I started tweaking it a bit.

Paketti is a project by Esa Ruoho, a.k.a Lackluster (@esaruoho). More information [here](https://github.com/esaruoho/org.lackluster.Paketti.xrnx/blob/master/README.md#thanks).
This documentation was originally started by @un


# Index

For better comprehension, this manual is divided into sections. Each chapter corresponds to a different Renoise screen/tab and can be accessed from the list below:

## Global

## 1 - 'Tools' Menu

Settings for Paketti can be found under `Main Menu -> Tools -> Paketti..`. This menu also includes some shortcuts for useful features:

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/115269c2-fc78-4947-bf17-3711535666de)

| Item | Description | Index |
| --- | --- | --- |
| `Preferences` | Shows Paketti Preferences window. | [1.1](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#11---preferences) |
| `Instruments` | Contains sample and drumkit loaders, plus shortcuts for beatsync and pitchbend. | [1.2](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#12---instruments) |
| `Pattern Editor` | Random BPM, FX Cheat Sheet, Collapse/Uncollapse All, Double/Halve Pattern | [1.3](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#13---pattern-editor) |
| `Plugin/Devices` | Multiple Plugin/Device functionalities. | [1.4](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#14---pluginsdevices) |
| `Show New Song Dialog` | Allows you to start a new song with the option to keep the same Patterns/Instruments/etc | - |
| `∿ Squigly Sinewave to Clipboard` | Copy this symbol to easily find Paketti in the Keys window (under Renoise Preferences). | - |
| `Paketti MIDI Populator` | Automatically fills current Project with Tracks, Instruments, Sends and Macros for External MIDI Controllers. | [1.5](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#15---midi-populator) |
| `Clean Render Selected Track or Group` | Automatically bypasses FX in Track/Group before resampling. | - |
| `Catch Octave` | (NEEDS EXPLAINING) | - |
| `Clone Current Sequence` | Self-explanatory. | - |
| `Track Routings Dialog` | Displays a pop-up window containing all track audio device routings. | - |

### 1.1 - Preferences

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/d7a9cd74-6921-44c2-960a-a87f4fda788c)

| Item | Description | Notes |
| --- | --- | --- |
| `Upper Frame` | Enables/Disables upper frame control when using Impulse Tracker key commands. | See [insert IT topic - to be written]. |
| `0G01 Loader` | Automatically enables the 0G01 hack for samples inserted using the Paketti loaders. | See [2 - Instrument Box](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/2%20-%20Instrument%20Box.md) to better understand the 0G01 hack. |
| `Random BPM` | (NEEDS EDITING) | - |
| `Pale Green Theme` | Loads Paketti color theme for Renoise. | - |
| `Gifts: Plaid Zap Load` | Insert a special XRNI instrument made from Plaid samples. | See [forum post](https://forum.renoise.com/t/plaidzap-xrni-gift/32521). |
| `Create New Instrument & Loop from Selection` | Quite Self-Explanatory. Works on the Sample Editor (right-click). | - |
| `Paketti Loader Settings` | Changes default settings for Paketti Drumkit/Multisample loaders. | See [1.2](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#12---instruments) for more details. |
| `Wipe & Slices Settings` | Determines default settings for slices generated via Paketti (under the Sampler window and Instrument Box): Slice Loop Mode, Beatsync, Autoseek, etc. | See [2 - Instrument Box](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/2%20-%20Instrument%20Box.md).
| `Render Settings` | Determines sample rate and bit depth for Paketti resampling procedures. | - |
| `Edit Mode Colouring` | Highlights the track you're currently editing, all tracks or none. | - |

### 1.2 - Instruments

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/f3fa1092-6f7a-43ad-a6a8-7880e55278ba)

| Item | Description | Notes |
| --- | --- | --- |
| `PitchBend Drumkit Sample Loader` | Automatically generates a drumkit from selected samples. Includes some macros. Samples are adjusted according the your Paketti Loader Settings (see 1.1 above). | |
| `PitchBend Multiple Sample Loader` | Automatically generates one instrument for each selected sample. Sample are also adjusted according to Loader Settings. | |
| `Start Sampling (Record)` | Pops up the Renoise Sampler Recorder and starts playback. Objective for usage is to set "Pattern" mode, and record multi-pattern length content. | |
| `Beat Sync Lines Halve/Double` | Adjusts the Beatsync time for all slices in the Selected Instrument. Does not affect the first/main sample. | |
| `Xst PitchBend Instrument Init` | Inserts an empty instrument containing several useful macros: PitchBend, Cutoff, Resonance, Cutoff LFOAmp, Cutoff LFOFreq, Overdrive, Parallel Compression and PitchBend Glide Inertia. | |

### 1.3 - Pattern Editor

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/ed27b39e-28c0-40ae-b9be-d86d66adb9c8)

| Item | Description | Notes |
| --- | --- | --- |
| `Random BPM` | Picks a random BPM value for the project. | |
| `Write Current BPM&LPB to Master column` | This writes both the current BPM and the LPB to the Master Track. Useful when you change LPB / BPM across the song patterns. | |
| `Effect Column CheatSheet Dialog` | A pop-up window containg all pattern commands available in Renoise. | See [1.3.1](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#131---effect-column-cheatsheet-dialog). |
| `Collapse/Uncollapse All Tracks` | Collapses (minimizes) or Uncollapses (maximizes) all the Tracks, Groups, Master and Sends. | |
| `Pattern Doubler` | Doubles the current pattern size while also duplicating its contents accordingly (notes, volume, panning, delay, samplefx columns and effect columns, and automation. | |
| `Pattern Halver` | Sets the pattern to 1/2 current size. Works *differently* from the native keybind `CTRL+F8`, as it *does not adapt pattern content* to fit the new length. Simply put: pattern length is changed to half, but notes/commands remain in place. | |
| `Global Visible Column (All)` | Expands all columns in all tracks: Volume, Pan, Delay and SampleFX.| |

#### 1.3.1 - Effect Column CheatSheet Dialog

Please note: the Effect Column CheatSheet also features sliders for the Volume, Pan, Delay, SampleFX and Effect Columns. Moving a slider places the correspondent value in the highlighted row or selection in pattern. It is very effective for manually programming intricate modulations: pick an effect, move the slider, move to next line, and so on. It's also the perfect companion for Renoise newcomers who still haven't learned the most important commands.
<img width="587" alt="Screenshot 2024-09-05 at 21 07 59" src="https://github.com/user-attachments/assets/30f3622b-39ce-47b4-a3c9-3e77007577f2">

### 1.4 - Plugins/Devices

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/565e275e-c4dd-4c99-a1ee-529ce2a12181)

| Item | Description | Notes |
| --- | --- | --- |
| `Debug` | Different plugin related utilities for debugging. Can be ignored by the average user. | |
| `Switch Plugin AutoSuspend OFF` | Quickly Enables/Disables the AutoSuspend function in Renoise. From the [user manual](https://tutorials.renoise.com/wiki/Plugin): "Auto Suspend: When enabled, Renoise will completely shut off the plugin when it is no longer producing sound. This is mainly done to reduce CPU usage." | |
| `Expose/Hide Selected Device Parameters in Mixer` | Display plugin parameters in the mixer as sliders. It's the default behavior for some native devices, such as the Compressor and Mixer EQ. | See [1.4.1](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#141---exposehide-selected-device-parameters-in-mixer). |
| `Expose/Hide Selected Track ALL Device Parameters` | Same as above, but applies to all devices in the selected track. | See [1.4.1](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#141---exposehide-selected-device-parameters-in-mixer). |
| `Hide Track DSP Devices for All Tracks` | If External Editors for any devices on Track DSP are visible, this will hide their External Editors. | | 
| `Bypass/Enable All Devices on Track` | Self-explanatory. Useful to check pre/post processing. In other words, how the FX chain is affecting signals in a particular track. | |
| `Load AU/VST/VST3 Plugins Dialog` | A pop-up window to quickly load instrument plugins or add them as keyboard shortcuts. These plugin shortcuts can be found under the Keys tab in Renoise Preferences. | See [1.4.2](https://github.com/untilde/paketti-unofficial-manual/blob/main/Documentation/1%20-%20Tools%20menu.md#142---load-auvstvst3-plugins-dialog). | 
| `Open Visible Pages to Fit Plugin Parameter Count` | Fully expands a plugin/device window so all the parameter sliders are visible. | |

#### 1.4.1 - Expose/Hide Selected Device Parameters in Mixer

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/9f779834-0454-41c3-a39f-b6f81d425e61)

#### 1.4.2 - Load AU/VST/VST3 Plugins Dialog

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/37facf15-9d5b-46c1-b6dd-d679520b4919)

### 1.5 - MIDI Populator

The Paketti MIDI Populator is a powerful tool to automate project configuration for external MIDI controllers and/or sequencers. It allows the user to pick MIDI inputs/outputs and quickly insert plugin instruments (up to 16), including an option to randomize the VSTi selection. A new track is generated for every selected instrument - and outputs set accordingly. These tracks can be configured for automatic Send devices and number of Volume/Pan/Delay/FX columns. 

For users who do not have external hardware sequencers, a good use case for the MIDI Populator is to receive MIDI information from applications such as VCV Rack and Pure Data. However, a third party virtual MIDI server such as LoopBe1 may be necessary to connect these applications to Renoise. This way, you can build sequences in VCV Rack, for instance, and have audio output from VST plugins inside Renoise. Speaking of audio... a virtual audio cable (VAC) could also be used to simultaneously stream audio from VCV Rack (and other applications) to Renoise.

#### 1.5.1 - MIDI Populator Quickstart

1. Select MIDI inputs and outputs.
2. Manually pick a plugin for each MIDI channel or use the `Randomize VST3 Plugin Selection` to randomly pick instruments.
3. Configure the remaining options, which range from number of note columns to automatic Send devices.

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/b840bc3b-7f6a-4a83-8e45-89e08cba3b76)

Paketti will then generate a new track for each plugin, with automatic MIDI In/Out configuration and Send population (if enabled), and also `#Line-In Device` placement for all tracks, in case the objective is to use audio inputs..

## Instrument Box

By right-clicking the Instrument Box (by default, located on the right corner of the screen) another set of Paketti features is available:

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/d99f524c-1924-455f-ab63-bdf59bde3d07)

| Item | Description | Subtopic |
| --- | --- | --- |
| `Initialize...` | Creates a new empty instrument which includes pre-configured macros for common modulations: PitchBend, Filter Cutoff, Amp Envelope, Drive, etc. If the 0G01 hack is enabled, a new track is created and the command placed in the first line of current pattern alongside the C-4 note. This will be further explained later in the current chapter, so bear with me. | 2.1 |
| `Launch App...` | Sends the selected samples to desired applications. Can be used to bounce stems into another DAW or to export files into a sample manager, such as Sononym. | 2.2 |
| `Smart Folders...` | | |
| `Wipe & Slice...` | Clears all slice markers in the selected instrument. It can also replace the current slices with a new set of equally distributed slices (2/4/8/16/32/64/128). In vanilla Renoise the slices have to be manually removed in the Sampler window - so this option automates this process. | |
| `Duplicate and Select New Instrument` | Self-explanatory. | |
| `Switch Plugin AutoSuspend Off` | Quickly Enables/Disables the AutoSuspend function in Renoise. From the user manual: "Auto Suspend: When enabled, Renoise will completely shut off the plugin when it is no longer producing sound. This is mainly done to reduce CPU usage". This option is also available in the Tools menu. | |
| `Create Phrase` | Self-explanatory. | |
| `PitchBend Drumkit Sample Loader` | Automatically generates a drumkit from selected samples. Includes some macros. Samples are adjusted according the your Paketti Loader Settings (see 1.1 above). This option is also available in the Tools menu. | |
| `PitchBend Multiple Sample Loader` | Automatically generates one instrument for each selected sample. Sample are also adjusted according to Loader Settings. This option is also available in the Tools menu. | |
| `Save Selected Sample .WAV/.FLAC` | Self-explanatory. | |
| `Wipe Song Retain Sample` | Self-explanatory. | |
| `Clean Render Selected Track or Group` | Works like the "Freeze and Flatten" option in some other DAWs. It renders the current (source) track into a new instrument and automatically places a C-4 on the first line of a new track. After that, the source track is automatically muted and collapsed. Useful to share your .xrns without fearing plugin dependencies, to free up CPU or maybe just to support your resampling needs. | |
| `Record to Current Track` | | |
| `Start Sampling (Record)` | | |

### 2.1 - The 0G01 Hack

UNDER CONSTRUCTION

### 2.2 - Launch App

![image](https://github.com/untilde/paketti-unofficial-manual/assets/20494933/5090fc14-a94a-43c9-9178-47ed4f08ae48)

## Sampler

| Item | Description | Subtopic |
| --- | --- | --- |


## Pattern Editor

## Automation

## Pattern Matrix

## Mixer

## Phrase Editor
