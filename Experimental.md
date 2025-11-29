# Paketti Experimental Documentation

**The comprehensive, all-in-one documentation for Paketti - Renoise Enhancement Suite**

**Last Updated:** 2025-11-29

---

## 📚 Complete Table of Contents

1. [Phrase Selection Features](#phrase-selection-features-new)
2. [BPM Features](#bpm-features)
3. [Recording Features](#recording-features)
4. [MIDI Control](#midi-control)
5. [Routing Features](#routing-features)
6. [Chords & Harmony](#chords--harmony)
7. [Workflow Controls](#workflow-controls)
8. [Impulse Tracker Features](#impulse-tracker-features)
9. [Instrument Management](#instrument-management)
10. [Rendering Features](#rendering-features)
11. [Column Visibility](#column-visibility)
12. [Pattern Matrix](#pattern-matrix)
13. [Device & Plugin Loaders](#device--plugin-loaders)
14. [Phrase Editor](#phrase-editor)
15. [Automation Features](#automation-features)
16. [Pattern Editor Advanced](#pattern-editor-advanced)
17. [Sample Loading & Management](#sample-loading--management)
18. [Sample Normalization](#sample-normalization--channelbit-depth-conversion)
19. [Sample Processing](#sample-processing--manipulation)
20. [Audio Processing & Effects](#audio-processing--effects)
21. [Slicing Features](#slicing-features)
22. [Samples and Instruments](#samples-and-instruments)
23. [Pattern Editor Features](#pattern-editor-features)
24. [Pattern Sequencer & Sections](#pattern-sequencer--section-management)
25. [Generative Tools](#generative-tools)
26. [Sample Processing Tools](#sample-processing-tools)
27. [Pattern Sequencer Utilities](#pattern-sequencer-utilities)
28. [Utility Features](#utility-features)

---

# Phrase Selection Features (NEW)

**Source File:** `PakettiPhraseEditor.lua`  
**Added:** 2025-11-28

Comprehensive phrase navigation and selection features with both standard and phrase-editor-focused variants.

## Features Added

### 1. Direct Phrase Selection (01-16)
Select specific phrases by number with validation, automatically switches to phrase editor view (optional), protection against non-existent phrases, shows phrase name in status message.

**Keybindings:**
- `Global:Paketti:Select Phrase 01` through `Select Phrase 16` ⌨️
- `Global:Paketti:Select Phrase 01 (Phrase Editor)` through `Select Phrase 16 (Phrase Editor)` ⌨️

**Menu Entries:**
- `Main Menu:Tools:Paketti..:Phrases:Select Phrase:Select Phrase 01-16` 📋
- `Main Menu:Tools:Paketti..:Phrases:Select Phrase (Phrase Editor):Select Phrase 01-16 (Phrase Editor)` 📋

### 2. Next/Previous Phrase Navigation
Navigate through phrases with wrapping (last→first, first→last), works from any view, optional automatic phrase editor switching.

**Keybindings:**
- `Global:Paketti:Select Next Phrase` ⌨️
- `Global:Paketti:Select Previous Phrase` ⌨️
- `Global:Paketti:Select Next Phrase (Phrase Editor)` ⌨️
- `Global:Paketti:Select Previous Phrase (Phrase Editor)` ⌨️

**Menu Entries:**
- `Main Menu:Tools:Paketti..:Phrases:Select Next Phrase` 📋
- `Main Menu:Tools:Paketti..:Phrases:Select Previous Phrase` 📋
- `Main Menu:Tools:Paketti..:Phrases:Select Next Phrase (Phrase Editor)` 📋
- `Main Menu:Tools:Paketti..:Phrases:Select Previous Phrase (Phrase Editor)` 📋

## Design
- **Standard versions** - Select phrase without view switching (workflow continuity)
- **(Phrase Editor) versions** - Select phrase AND switch to phrase editor (focused editing)
- **Protection & Validation** - Validates song, instrument, phrases exist; shows helpful errors
- **DRY Principles** - Core internal functions handle all logic with clean wrapper API

---

# BPM Features

Guide to Paketti's BPM analysis, calculation, and manipulation features for tempo-based workflows.

**Source:** `PakettiBPM.lua` | **Keybindings:** 14

## BPM to MS Delay Calculator

### Paketti BPM to MS Delay Calculator Dialog
**Shortcut:** `Global:Paketti:Paketti BPM to MS Delay Calculator Dialog...` ⌨️

Comprehensive delay calculator showing millisecond delay times for musical note values at current BPM.

**Displays delays for:** Whole notes, half notes, quarter notes, eighth notes, sixteenth notes, thirty-second notes, sixty-fourth notes, 128th notes (all with Even, Dotted, Triplet variants), plus special 3/16-note delays.

**Use cases:** Setting delay effect times, calculating echo/reverb pre-delays, syncing external hardware, creating rhythmic delay patterns, dub production, synth modulation timing.

## Sample BPM Analysis

### Analyze Sample BPM (Multiple Variants)
- `Analyze Sample BPM (4 beats)` ⌨️ - Default loop analysis
- `Analyze Sample BPM (1 beat)` ⌨️ - Single kick, snare analysis
- `Analyze Sample BPM (2 beats)` ⌨️ - Half-bar loop
- `Analyze Sample BPM (8 beats)` ⌨️ - 2-bar loop
- `Analyze Sample BPM (16 beats)` ⌨️ - 4-bar loop
- `Intelligent BPM Detection` ⌨️ - Advanced analysis with peak detection

## BPM Manipulation

- **Halve BPM** - Divides current BPM by 2
- **Double BPM** - Multiplies current BPM by 2
- **Halve Halve BPM** - Divides BPM by 4
- **Double Double BPM** - Multiplies BPM by 4
- **Multiply BPM & Halve LPB** - Double BPM, halve LPB (same speed, double resolution)
- **Halve BPM & Multiply LPB** - Half BPM, double LPB (same speed, half resolution)

---

# Recording Features

Guide to Paketti's recording, sampling, and overdub features for audio capture workflows.

**Source:** `PakettiRecorder.lua` | **Keybindings:** 19

## Sample Recording

### Contour Shuttle Record On/Off
Hardware controller support for Contour Design ShuttlePRO. First press opens Sample Recorder + starts recording, second press stops, auto-processing sets autoseek=true and autofade=true.

### Start Sampling and Sample Editor (Record)
Comprehensive recording workflow: Creates new instrument, opens Sample Recorder, starts recording, on stop automatically switches to Sample Editor, sets autoseek/autofade, locks keyboard focus.

## Paketti Overdub

**Smart Multi-Take Recording System** - Records audio into note columns on row 1 of the current pattern, automatically creating new tracks when needed.

### How It Works
1. First recording → Places note in column 1
2. Second recording → Places note in column 2
3. Continues filling columns on row 1...
4. When row 1 reaches max columns → Creates NEW TRACK after current one
5. Each recording creates new instrument (if current isn't empty)
6. Each recording trims tail frames, sets autofade/autoseek
7. Tracks named "OverdubXX", instruments named with PTN:length BPM:xxx LPB:xx

### Overdub 12 (4 Variants)
**Maximum 12 note columns** - Records up to 12 samples in 12 columns before creating new track.

**Keybindings:**
- `Global:Paketti:Paketti Overdub 12 (No Metronome/No Line Input)` ⌨️
- `Global:Paketti:Paketti Overdub 12 (Metronome/No Line Input)` ⌨️
- `Global:Paketti:Paketti Overdub 12 (No Metronome/Line Input)` ⌨️
- `Global:Paketti:Paketti Overdub 12 (Metronome/Line Input)` ⌨️

**MIDI Mappings:**
- `Paketti:Paketti Overdub 12 (No Metronome/No Line Input)` 🎹
- `Paketti:Paketti Overdub 12 (Metronome/No Line Input)` 🎹
- `Paketti:Paketti Overdub 12 (No Metronome/Line Input)` 🎹
- `Paketti:Paketti Overdub 12 (Metronome/Line Input)` 🎹

**Menu:**
- `Instrument Box:Paketti:Record:Paketti Overdub 12 (...)` 📋 (all 4 variants)
- `Mixer:Paketti:Record:Paketti Overdub 12 (...)` 📋 (all 4 variants)
- `Pattern Editor:Paketti:Record:Paketti Overdub 12 (...)` 📋 (all 4 variants)
- `Pattern Matrix:Paketti:Record:Paketti Overdub 12 (...)` 📋 (all 4 variants)

### Overdub 01 (4 Variants)
**Maximum 1 note column** - Each recording creates new track immediately (perfect for vocal/guitar takes).

**Keybindings:**
- `Global:Paketti:Paketti Overdub 01 (No Metronome/No Line Input)` ⌨️
- `Global:Paketti:Paketti Overdub 01 (Metronome/No Line Input)` ⌨️
- `Global:Paketti:Paketti Overdub 01 (No Metronome/Line Input)` ⌨️
- `Global:Paketti:Paketti Overdub 01 (Metronome/Line Input)` ⌨️

**MIDI Mappings:**
- `Paketti:Paketti Overdub 01 (No Metronome/No Line Input)` 🎹
- `Paketti:Paketti Overdub 01 (Metronome/No Line Input)` 🎹
- `Paketti:Paketti Overdub 01 (No Metronome/Line Input)` 🎹
- `Paketti:Paketti Overdub 01 (Metronome/Line Input)` 🎹

**Menu:**
- `Instrument Box:Paketti:Record:Paketti Overdub 01 (...)` 📋 (all 4 variants)
- `Mixer:Paketti:Record:Paketti Overdub 01 (...)` 📋 (all 4 variants)
- `Pattern Editor:Paketti:Record:Paketti Overdub 01 (...)` 📋 (all 4 variants)
- `Pattern Matrix:Paketti:Record:Paketti Overdub 01 (...)` 📋 (all 4 variants)

**Options:**
- **Metronome** - Enables/disables metronome during recording
- **Line Input** - Automatically adds/removes #Line Input device to track

## Record Follow Controls

### Record Follow
**Shortcut:** `Global:Paketti:Record Follow` ⌨️

Intelligent edit mode + follow player toggle with 3 states:
- **State 1:** Not editing but following → Enables edit mode, disables follow
- **State 2:** Editing and following → Disables follow only
- **State 3:** All other cases → Enables both edit mode and follow player

### Simple Play Record Follow
**Shortcuts:**
- `Global:Paketti:Simple Play Record Follow` ⌨️
- `Global:Paketti:Simple Play Record Follow (2nd)` ⌨️

All-in-one recording workflow:
- Starts playback if stopped
- Enables follow player
- Enables edit mode
- Switches to Pattern Editor
- **Toggle:** If already in this state, disables follow + edit mode

## Sample Recorder Utilities

### Start/Stop Sample Recording and Pakettify
**Shortcut:** `Global:Paketti:Start/Stop Sample Recording and Pakettify` ⌨️

Smart sample recorder with auto-Pakettify:
1. Opens Sample Recorder dialog
2. Creates new instrument
3. Applies Paketti default template
4. Starts recording
5. On stop: Applies preferences (interpolation, filter, modulation, oversample, autofade, autoseek, oneshot, loop mode, NNA)
6. Sets loop mode to Forward

### Display Sample Recorder with #Line Input
**Shortcut:** `Global:Paketti:Display Sample Recorder with #Line Input` ⌨️

Toggle Sample Recorder + automatically manage #Line Input device:
- **First press:** Opens recorder + adds #Line Input (if not present)
- **Second press:** Closes recorder + removes #Line Input
- **Smart detection:** Only removes #Line Input if it's in device slot 2

### Recordammajic9000
**Shortcut:** `Global:Paketti:Recordammajic9000` ⌨️

Automated recording workflow:
1. Checks for #Line Input (adds if missing)
2. Calls recordtocurrenttrack()
3. Automatically adds 0G01 effect command

## TouchOSC Integration

Mobile control optimized for TouchOSC tablet/phone controllers:

**Shortcuts:**
- `Global:Paketti:TouchOSC Sample Recorder and Record` ⌨️ - Toggle recorder
- `Global:Paketti:TouchOSC Pattern Editor` ⌨️ - Switch to Pattern Editor
- `Global:Paketti:TouchOSC Sample Editor` ⌨️ - Switch to Sample Editor

---

# MIDI Control

Guide to Paketti's MIDI mappings for hardware controller integration.

**Source:** `PakettiMidi.lua` | **MIDI Mappings:** 14

## Groove Control
- Groove Settings Groove #2&4 🎹
- Individual Groove Controls #1-4 🎹

## Computer Keyboard Velocity
- Computer Keyboard Velocity Slider 🎹 - Adjusts QWERTY keyboard note entry velocity

## Sample Parameters
- Change Selected Sample Volume 🎹

## Pattern Editor Controls
- Delay Column (DEPRECATED) 🎹

## Transport & View Control
- Metronome On/Off 🎹
- Uncollapser / Collapser 🎹
- Show/Hide Pattern Matrix 🎹

## Recording Controls
- Record and Follow 🎹 (Toggle + Knob variants)

---

# Routing Features

Guide to Paketti's output routing manipulation for creative track routing and mixing workflows.

**Source:** `PakettiRoutings.lua` | **Keybindings:** 9

## Serial Output Routing

**What is it?** Serial routing chains tracks sequentially: Track 1 → Track 2 → Track 3 → Master, instead of all tracks going directly to Master.

## Routing Modes (8 Configurations)

**Mode Options:**
1. **Continual vs. Non-Continual** - Cycles continuously or routes once
2. **Skip Master vs. Include Master** - Master track routing inclusion
3. **Exclude Master vs. Include Master in Cycle** - Master in routing cycle

### Available Shortcuts
- Output Routing (Non-Continual, Skip Master, Exclude Master)
- Output Routing (Continual, Skip Master, Exclude Master)
- Output Routing (Non-Continual, Include Master, Exclude Master)
- Output Routing (Continual, Include Master, Exclude Master)
- Output Routing (Non-Continual, Skip Master, Include Master in Cycle)
- Output Routing (Continual, Skip Master, Include Master in Cycle)
- Output Routing (Non-Continual, Include Master, Include Master in Cycle)
- Output Routing (Continual, Include Master, Include Master in Cycle)
- **Reset Output Routings to Master** - Restore default routing

## Creative Uses
- Serial Effects Chain
- Feedback Loop Creation
- Parallel Processing with Serial Return
- Experimental Routing

---

# Chords & Harmony

Comprehensive guide to Paketti's chord generation, manipulation, and harmony tools - **72 features** for composers!

**Source:** `PakettiChordsPlus.lua` | **Keybindings:** 72

## ChordsPlus Add/Sub

### Add Intervals (1-12 semitones)
`ChordsPlus (Add 01)` through `(Add 12)` ⌨️

Instant harmony adding note X semitones above current note in next column, chooses the next column.

### Subtract Intervals (1-12 semitones)
`ChordsPlus (Sub 01)` through `(Sub 12)` ⌨️

Downward harmony adding note X semitones below current note.

## Chord Library
Built-in chord types including major/minor triads, dominant 7ths, major/minor 7ths, extended chords (9ths, 11ths, 13ths), suspended chords, diminished/augmented, jazz voicings.

- **Next Chord in List** - Cycle through chords

## Note Sorting & Organization
- Note Sorter (Ascending/Descending)
- Randomize Voicing
- Shift Notes (Left/Right)

## Chord Inversions
- Cycle Chord Inversion (Up/Down)
- Random Chord

## Note Extraction
- Extract Bassline to New Track
- Extract Highest Note to New Track
- Duplicate Highest Notes (3 modes: Duplicate Instrument, Selected Instrument, Original Instrument)
- Duplicate Lowest Notes (3 modes)

## Note Distribution
- Distribute (Even 2, Even 4, Uneven, Always Next Row)
- Distribute Across Selection (Even, Even 2, Even 4, Uneven)

## Vertical Spreading
Spread Notes Vertically (+1/+2/+3/+4 Rows)

## Arpeggio Patterns
16-Row and 8-Row arpeggios with patterns: Up, Down, Up-Down, Down-Up, Up-Up-Down, Random, Outside-In, Inside-Out.

---

# Workflow Controls

Collection of Paketti's workflow control shortcuts for editing, playback, navigation, and view management.

**Source:** `PakettiControls.lua` | **Keybindings:** 100

## Edit Mode & Recording
- Record+Follow Toggle (multiple bindings)
- Toggle EditMode (intelligent edit step)
- Record+Follow+Metronome Toggle
- Contour Shuttle Controls (hardware controller support)
- Record & Follow Flip
- Global Edit Mode Toggle

## Playback Controls
- Toggle Follow Pattern
- Simple Play
- Rewind Playback by 4 steps
- Toggle Metronome

## Transpose Operations
- Transpose Selection/Track (Octave Up/Down, +1/-1)
- Transpose Note Column (Octave Up/Down, +1/-1)
- ChordsPlus Transposer Row (+/-3, +/-4, +/-7, +/-11)
- Selection/Row variants for each interval

## Track & View Navigation
- Select Track (Next/Previous)
- Insert Track
- Pattern Editor <-> MIDI Editor Switcher
- Sample Editor Tab Switcher (Phrases, Keyzones)

## Octave Controls
- KeybOctave Up/Down

## Utility Functions
- Save Song
- Fullscreen
- Song Details (Filename, BPM, LPB)

---

# Impulse Tracker Features

Comprehensive guide to Paketti's Impulse Tracker-style keyboard workflow - bringing the legendary DOS tracker interface to Renoise!

**Source:** `PakettiImpulseTracker.lua` | **Keybindings:** 200+ | **MIDI:** 30+ | **Menu:** 4

## What is Impulse Tracker Mode?

Impulse Tracker (IT) was a legendary DOS tracker created by Jeffrey Lim in the 1990s. Paketti recreates IT's iconic keyboard workflow in Renoise with extensive keyboard shortcuts, MIDI mappings, and workflow enhancements.

## F-Key Screen Switching

### F2 - Pattern Editor
**Shortcuts:**
- `Global:Paketti:Impulse Tracker F2 Pattern Editor` ⌨️
- `Global:Paketti:Impulse Tracker F2 Pattern Editor ONLY` ⌨️
- `Global:Paketti:Impulse Tracker F2 Pattern Editor Mini` ⌨️
- `Mixer:Paketti:To Pattern Editor` ⌨️

**F2** - Toggles between Pattern Editor layouts
**F2 ONLY** - Forces Pattern Editor with lower/upper frames
**F2 Mini** - Pattern Editor only, no frames
**Mixer → F2** - Jump from Mixer to Pattern Editor

### F3 - Sample Editor
**Shortcuts:**
- `Global:Paketti:Impulse Tracker F3 Sample Editor` ⌨️
- `Global:Paketti:Impulse Tracker F3 Sample Editor Only` ⌨️

Switches to Sample Editor with various frame configurations. Intelligent switching between Instrument tabs (MIDI/Plugin/Phrase → Sample Editor).

### F4 - Instrument Editor
**Shortcut:** `Global:Paketti:Impulse Tracker F4 Instrument Editor` ⌨️

Cycles between MIDI Editor → Plugin Editor → Phrase Editor.

### F11 - Order List (Mixer)
**Shortcut:** `Global:Paketti:Impulse Tracker F11 Order List` ⌨️

Switches to Mixer, toggles Pattern Matrix and Automation frame. Double press cycles views.

### F12 - Master
**Shortcut:** `Global:Paketti:Impulse Tracker F12 Master` ⌨️

Jumps to Master track, cycles between Track DSPs and Track Automation when pressed repeatedly.

## Playback Control

### F5 - Start Playback (Song)
**Shortcuts:**
- `Global:Paketti:Impulse Tracker F5 Start Playback` ⌨️
- `Global:Paketti:Impulse Tracker F5 Start Playback (2nd)` ⌨️

Starts playback from sequence 1, line 1. Disables follow player, edit mode, metronome, loop block, and loop pattern. Includes 0.225s delay after panic for plugin stability.

### F6 - Start Playback Pattern
**Shortcuts:**
- `Global:Paketti:Impulse Tracker F6 Start Playback Pattern` ⌨️
- `Global:Paketti:Impulse Tracker F6 Start Playback Pattern (2nd)` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker F6 Start Playback Pattern` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker F6 Start Playback Pattern (2nd)` ⌨️
- `Mixer:Paketti:Impulse Tracker F6 Start Playback Pattern` ⌨️
- `Mixer:Paketti:Impulse Tracker F6 Start Playback Pattern (2nd)` ⌨️

Loops current pattern - starts from current sequence index, line 1, enables loop pattern. Reduced 30ms delay (vs F5's 225ms).

### F7 - Start Playback from Cursor Row
**Shortcuts:**
- `Global:Paketti:Impulse Tracker F7 Start Playback from Cursor Row` ⌨️
- `Global:Paketti:Impulse Tracker F7 Start Playback from Cursor Row (2nd)` ⌨️

Starts playback from cursor position OR from captured marker (if CTRL-F7 was used). Validates marker position, enables edit mode.

### CTRL-F7 - Capture Marker Position
**Shortcut:** `Global:Paketti:Impulse Tracker Capture Marker Position (CTRL-F7)` ⌨️

**Menu:** `Main Menu:Tools:Paketti:Impulse Tracker:Toggle Marker Position (CTRL-F7)` 📋

**Toggle Marker:**
- **First press:** Captures current sequence + line as marker
- **Second press:** Disables marker
- **F7 behavior:** When marker exists, F7 plays from marker instead of cursor

Marker is saved in preferences and persists across sessions.

### F8 - Stop Playback (Panic)
**Shortcuts:**
- `Global:Paketti:Impulse Tracker F8 Stop Playback (Panic)` ⌨️
- `Global:Paketti:Impulse Tracker F8 Stop Playback (Panic) (2nd)` ⌨️
- `Global:Paketti:Impulse Tracker F8 Stop/Start Playback (Panic)` ⌨️

**F8 Behavior (when playing):**
- Stops playback
- Disables follow player
- Calls panic
- Disables loop pattern/block
- Resets steppers

**F8 Behavior (when stopped):**
- **Line > 1:** Jump to line 1
- **Line = 1, Sequence > 1:** Jump to sequence 1
- **Already at 1,1:** Trigger panic

**F8 Stop/Start:** Toggles between stop and play from sequence 1.

### Start/Stop Playback Toggle
**Shortcuts:**
- `Global:Paketti:Start/Stop Playback (Continue)` ⌨️
- `Pattern Editor:Paketti:Start/Stop Playback (Continue)` ⌨️
- `Phrase Editor:Paketti:Start/Stop Playback (Continue)` ⌨️
- `Global:Paketti:Start/Stop Playback (First Row)` ⌨️
- `Pattern Editor:Paketti:Start/Stop Playback (First Row)` ⌨️
- `Phrase Editor:Paketti:Start/Stop Playback (First Row)` ⌨️

**Continue:** Toggles playback from current position
**First Row:** Toggles playback from pattern start

## Pattern Navigation

### Next/Previous Pattern
**Shortcuts:**
- `Global:Paketti:Impulse Tracker Pattern (Next)` ⌨️
- `Global:Paketti:Impulse Tracker Pattern (Previous)` ⌨️
- `Global:Paketti:Impulse Tracker Pattern (Next) 2nd` ⌨️
- `Global:Paketti:Impulse Tracker Pattern (Previous) 2nd` ⌨️

Jumps to next/previous sequence. Enables follow player if disabled. When playing, triggers sequence change. Wraps at song boundaries.

## Selection Operations

### ALT-D - Double Select
**Pattern Editor:**
- `Pattern Editor:Paketti:Impulse Tracker ALT-D Double Select` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker ALT-D Double Select W/ Automation` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker ALT-D Double Select Pattern` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker ALT-D Double Select Column` ⌨️

**Phrase Editor:**
- `Phrase Editor:Paketti:Impulse Tracker ALT-D Double Select` ⌨️

**Global:**
- `Global:Paketti:Impulse Tracker ALT-D Double Select` ⌨️

**ALT-D behavior:**
1. **First press:** Selects LPB rows from cursor (e.g., 4 lines at LPB 4)
2. **Second press:** Doubles selection (4 → 8 lines)
3. **Third press:** Doubles again (8 → 16 lines)
4. Clamps to pattern length

**Double Select W/ Automation:** Also updates automation selection range
**Double Select Pattern:** Selects across all tracks
**Double Select Column:** Selects only current note/effect column

### ALT-F - Expand Selection
**Pattern Editor:**
- `Pattern Editor:Paketti:Impulse Tracker ALT-F Expand Selection` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker ALT-F Expand Selection Twice` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker ALT-F Expand Selection Replicate` ⌨️

**Phrase Editor:**
- `Phrase Editor:Paketti:Impulse Tracker ALT-F Expand Selection` ⌨️
- `Phrase Editor:Paketti:Impulse Tracker ALT-F Expand Selection Twice` ⌨️

**MIDI:**
- `Paketti:Expand Selection Replicate [Trigger]` 🎹
- `Paketti:Expand Selection Replicate Tracks 1-8 [Trigger]` 🎹
- `Paketti:Expand Selection Replicate Track 1-8 [Trigger]` 🎹 (individual tracks)

**Expand:** Doubles pattern length, copies notes to new positions, clears intermediate lines
**Expand Twice:** Applies expand operation twice
**Expand Replicate:** Expands then flood-fills with selection

### ALT-G - Shrink Selection
**Pattern Editor:**
- `Pattern Editor:Paketti:Impulse Tracker ALT-G Shrink Selection` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker ALT-G Shrink Selection Twice` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker ALT-G Shrink Selection Replicate` ⌨️

**Phrase Editor:**
- `Phrase Editor:Paketti:Impulse Tracker ALT-G Shrink Selection` ⌨️
- `Phrase Editor:Paketti:Impulse Tracker ALT-G Shrink Selection Twice` ⌨️

**MIDI:**
- `Paketti:Shrink Selection Replicate [Trigger]` 🎹
- `Paketti:Shrink Selection Replicate Tracks 1-8 [Trigger]` 🎹
- `Paketti:Shrink Selection Replicate Track 1-8 [Trigger]` 🎹 (individual tracks)

**Shrink:** Halves pattern length by removing every other line
**Shrink Twice:** Applies shrink operation twice
**Shrink Replicate:** Shrinks then flood-fills

### ALT-S - Set Selection to Instrument
**Shortcut:** `Pattern Editor:Paketti:Impulse Tracker ALT-S Set Selection to Instrument` ⌨️

Changes all instrument numbers in selection to currently selected instrument. Only affects lines with notes.

### ALT-L - Mark Track/Mark Pattern
**Shortcut:** `Pattern Editor:Selection:Impulse Tracker ALT-L Mark Track/Mark Pattern` ⌨️

**Smart Marking:**
1. **First press:** Selects entire track (line 1 to end)
2. **Second press:** Selects entire pattern (all tracks)
3. Also updates automation selection if automation frame visible

### SHIFT-ALT-L - Mark Note Column/Mark Pattern
**Shortcut:** `Pattern Editor:Selection:Impulse Tracker SHIFT-ALT-L Mark Note Column/Mark Pattern` ⌨️

**For Phrase Editor:** `Phrase Editor:Paketti:Impulse Tracker ALT-L Mark Note Column/Mark Phrase` ⌨️

**Smart Column Marking:**
1. **First press:** Selects current note/effect column for entire pattern/phrase
2. **Second press:** Selects all columns

### ALT-B - Modify Selection Start (Keep End)
**Shortcut:** `Pattern Editor:Selection:Impulse Tracker ALT-B Modify Selection Start (Keep End)` ⌨️

Extends selection from current END point to new cursor position. End stays fixed, start moves to cursor.

### ALT-U - Unmark Selection
**Shortcuts:**
- `Global:Paketti:Impulse Tracker ALT-U Unmark Selection` ⌨️
- `Global:Paketti:Impulse Tracker ALT-U Unmark Selection (2nd)` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker ALT-U Unmark Selection` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker ALT-U Unmark Selection (2nd)` ⌨️
- `Automation:Paketti:Impulse Tracker ALT-U Unmark Selection` ⌨️
- `Phrase Editor:Paketti:Impulse Tracker ALT-U Unmark Selection` ⌨️
- `Phrase Editor:Paketti:Impulse Tracker ALT-U Unmark Selection (2nd)` ⌨️

Clears pattern selection. Also clears automation envelope selection if automation frame is active.

### ALT-Y - Swap Block
**Shortcut:** `Global:Paketti:Impulse Tracker ALT-Y Swap Block` ⌨️

Swaps selection with block at cursor position. Automatically adjusts column visibility on target track if needed.

## Selection Utilities

### Select Current Row
**Shortcut:** `Pattern Editor:Paketti:Select Current Row` ⌨️

Selects current row across all visible note/effect columns in current track.

## Navigation

### Home *2 Behaviour
**Shortcuts:**
- `Pattern Editor:Paketti:Impulse Tracker Home *2 behaviour` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker Home *2 behaviour (2nd)` ⌨️
- `Mixer:Paketti:Impulse Tracker Home *2 behaviour` ⌨️
- `Phrase Editor:Paketti:Impulse Tracker Home *2 behaviour` ⌨️
- `Phrase Editor:Paketti:Impulse Tracker Home *2 behaviour (2nd)` ⌨️

**Smart Home Navigation:**
1. **First press:** Jump to line 1, current column
2. **Second press:** Jump to line 1, column 1
3. **Third press:** Jump to track 1, line 1, column 1

Works in both Pattern Editor and Phrase Editor.

### End *2 Behaviour
**Shortcuts:**
- `Pattern Editor:Paketti:Impulse Tracker End *2 behaviour` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker End *2 behaviour (2nd)` ⌨️
- `Mixer:Paketti:Impulse Tracker End *2 behaviour` ⌨️
- `Phrase Editor:Paketti:Impulse Tracker End *2 behaviour` ⌨️
- `Phrase Editor:Paketti:Impulse Tracker End *2 behaviour (2nd)` ⌨️

**Smart End Navigation:**
1. **First press:** Jump to last line, current column
2. **Second press:** Jump to last track

### PageUp/PageDown Jump Lines
**Shortcuts:**
- `Global:Paketti:Impulse Tracker PageUp Jump Lines` ⌨️
- `Global:Paketti:Impulse Tracker PageDown Jump Lines` ⌨️

Jumps by (LPB × 2) lines. Disables follow player when jumping. Clamps to pattern boundaries.

## Track Navigation

### ALT-Right/Left - Move Between Tracks
**Pattern Editor:**
- `Pattern Editor:Paketti:Impulse Tracker Alt-Right Move Forwards One Channel (Wrap)` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker Alt-Left Move Backwards One Channel (Wrap)` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker Alt-Right Move Forwards One Channel` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker Alt-Left Move Backwards One Channel` ⌨️

**Mixer:**
- `Mixer:Paketti:Impulse Tracker Alt-Right Move Forwards One Channel (Wrap)` ⌨️
- `Mixer:Paketti:Impulse Tracker Alt-Left Move Backwards One Channel (Wrap)` ⌨️
- `Mixer:Paketti:Impulse Tracker Alt-Right Move Forwards One Channel` ⌨️
- `Mixer:Paketti:Impulse Tracker Alt-Left Move Backwards One Channel` ⌨️

**MIDI:**
- `Paketti:Move to Next Track (Wrap) [Knob]` 🎹
- `Paketti:Move to Previous Track (Wrap) [Knob]` 🎹
- `Paketti:Move to Next Track [Knob]` 🎹
- `Paketti:Move to Previous Track [Knob]` 🎹

**Wrap:** Cycles from last track to first (and vice versa)
**No Wrap:** Stops at first/last track

Maintains column type (note column vs effect column) when switching tracks.

## Note Operations

### Set Note to Octave (0-9)
**Shortcuts (with EditStep):**
- `Pattern Editor:Paketti:Set Note to Octave 0-9 with EditStep` ⌨️ (10 shortcuts)

**Shortcuts (without EditStep):**
- `Pattern Editor:Paketti:Set Note to Octave 0-9 without EditStep` ⌨️ (10 shortcuts)

Changes note at cursor to specified octave, preserving note value (C/C#/D/etc). **with EditStep** advances cursor by edit step amount.

### 8 - Play Current Line
**Shortcuts:**
- `Global:Paketti:Impulse Tracker 8 Play Current Line & Advance by EditStep` ⌨️
- `Global:Paketti:Impulse Tracker 8 Play Current Line Only` ⌨️

Triggers current line's notes. **& Advance** moves cursor forward by edit step.

## Interpolation

### ALT-X - Smart Interpolation
**Shortcuts:**
- `Pattern Editor:Paketti:Impulse Tracker ALT-X Smart (Auto-detect Column)` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker ALT-X Volume Column (Interpolate&Clear)` ⌨️
- `Pattern Editor:Paketti:Impulse Tracker ALT-X Effect Column (Interpolate&Clear)` ⌨️

**Auto-detect Column:** Intelligently detects which column type cursor is in (Volume/Panning/Delay/Sample FX/Effect) and interpolates that column type.

**Interpolation Behavior:**
1. **First ALT-X:** Interpolates between first and last values
2. **Second ALT-X (if already interpolated):** Clears interpolation

**Supported Columns:**
- Volume (sub-column 3)
- Panning (sub-column 4)
- Delay (sub-column 5)
- Sample Effect (sub-columns 6-7)
- Effect (sub-columns 8-9)

## File Operations

### CTRL-N - New Song Dialog
**Shortcut:** `Global:Paketti:Impulse Tracker CTRL-N New Song Dialog...` ⌨️

Comprehensive new song dialog with Keep/Clear options for:
- Patterns
- Pattern Sequence
- Instruments
- Instrument Samples
- Instrument MIDI Outs
- Instrument Plugins
- Track DSPs

**Set all to:** Quick toggle for all sections
**Smart defaults:** If all set to Clear, performs standard New Song

### CTRL-O - Pattern to Sample
**Shortcut:** `Global:Paketti:Impulse Tracker CTRL-O Pattern to Sample` ⌨️

**Menu:** `Pattern Editor:Paketti:Impulse Tracker CTRL-O Pattern to Sample` 📋

**MIDI:** `Paketti:Impulse Tracker CTRL-O Pattern to Sample [Trigger]` 🎹

Renders current pattern to new sample:
1. Renders pattern to temporary WAV
2. Creates new instrument
3. Loads rendered audio as sample
4. Applies Paketti loader preferences (autofade, autoseek, loop mode, etc.)
5. Names instrument "Pattern XX Render"
6. Cleans up temp file

## Utilities

### ALT-F10 - Solo Toggle
**Shortcut:** `Global:Paketti:Impulse Tracker ALT-F10 (Solo Toggle)` ⌨️

Toggles solo on current track. If not in Pattern Editor or Mixer, switches to Pattern Editor first.

### Select First Instrument
**Shortcut:** `Global:Paketti:Select First Instrument Box Slot` ⌨️

Jumps to instrument 01, displays instrument name in status.

### Speed and Tempo to BPM Dialog
**Shortcut:** `Global:Paketti:Paketti Speed and Tempo to BPM Dialog...` ⌨️

Interactive calculator for Speed/Tempo → BPM conversion. Shows real BPM based on formula: `BPM = Tempo / (Speed / 6)`. Validates BPM range (20-999), can apply BPM to song.

## Sample Processing (Signed/Unsigned)

### Wrap/Unwrap Operations
**Shortcuts:**
- `Sample Editor:Paketti:Wrap Signed as Unsigned` ⌨️
- `Sample Editor:Paketti:Unwrap Unsigned to Signed` ⌨️
- `Sample Editor:Paketti:Toggle Signed/Unsigned` ⌨️

**Wrap Signed as Unsigned:** Converts signed 16-bit → unsigned 16-bit (creates bit-crushed/broken sound)
**Unwrap Unsigned to Signed:** Reverses the process
**Toggle:** Automatically detects and applies correct operation

**Use Cases:** Experimental sound design, bit-manipulation effects, recreating vintage sampler artifacts.

---

# Instrument Management

Guide to Paketti's instrument duplication, selection, chunk navigation, and management features.

**Source:** `PakettiInstrumentBox.lua` | **Keybindings:** 22+

## Instrument Duplication

### Duplicate and Select New Instrument
Creates duplicate and automatically selects the newly created instrument. Handles large samples with progress dialog, preserves all settings/samples/phrases/plugins. Multiple bindings available (2nd, 3rd).

### Duplicate and Select New Instrument (Wrong)
Alternative behavior with different selection logic. Named "Wrong" because it behaves differently than expected in certain scenarios.

### Duplicate and Select Last Instrument
Creates duplicate but selects the last instrument in the list.

## Quick Instrument Selection

### Numpad SelectPlay (1-9)
Press numpad 1-9 to select and play that instrument slot. Combines selection + note trigger - perfect for live performance.

## Capture Nearest Instrument

### Capture Nearest Instrument and Octave (nojump/jump)
Finds the nearest note in the pattern, captures its instrument number and octave value. **nojump** = cursor stays at current position. **jump** = cursor moves to the captured note's position.

## Chunk Navigation

### Next/Previous Chunk
Navigate through chunks (hex ranges: 00-0F, 10-1F, 20-2F, ..., F0-FF).

### Select Specific Chunk
Direct chunk access - jump directly to any chunk (00, 10, 20, ..., F0).

## Basic Operations
- Insert New Instrument
- Delete Current Instrument
- Load Plaid Zap .XRNI (special loader)

---

# Rendering Features

Guide to Paketti's advanced rendering and bouncing features for tracks, groups, patterns, and sample-based rendering.

**Source:** `PakettiRender.lua` | **Keybindings:** 24

## Clean Render Track/Group

### Standard Clean Render
Renders selected track or group to new instrument, creates sample at target BPM, inserts rendered instrument into new track, preserves automation and effects.

### WAV Only Render
Same as Standard but saves intermediate WAV file without loading into Renoise.

### LPB*2 Render (Double Resolution)
Temporarily doubles LPB before rendering, capturing twice the automation/effect resolution.

### Seamless Clean Render
Ensures perfect loop points and no clicks at start/end - ideal for looped samples.

## Clean Render with Save

### Render & Save to File
All-in-one operation: Renders, loads into new instrument, immediately opens save dialog. Choose format: WAV (lossless), FLAC (compressed lossless), or MP3.

## Pattern Selection Rendering
- Render Pattern Selection
- Render Pattern Selection (Mute Original)
- Render Pattern Selection (New Track)
- Render Pattern Selection (Mute + New Track)

## Pattern Matrix Rendering
Select multiple patterns in Pattern Matrix view, then render them all into a new instrument with samples.

## Experimental Features
- Experimental Sample FX Render
- Test Peak Detection

---

# Column Visibility

Guide to Paketti's column visibility management for cleaner Pattern Editor views and focused editing.

**Source:** `PakettiViews.lua` | **Keybindings:** 23

## Global Column Visibility

### Show/Hide All Columns
- **All** - Shows Volume, Panning, Delay, and Sample Effects columns on all tracks
- **None** - Hides all sub-columns on all tracks

### Toggle All Columns
- Including Sample Effects
- Excluding Sample Effects

## Individual Column Toggle

### Global Toggle/Set Specific Column Type
Toggle or force visibility of specific column type (Volume, Panning, Delay, Sample Effects) across all tracks simultaneously.

## Show Only Specific Column Type

### Toggle Show Only (Single Column Type)
Focused editing mode: Shows only the specified column type, hides all other column types. Perfect for focused volume automation, panning, delay timing, or effect column work.

## Smart Column Hiding

### Hide All Unused Columns
Intelligent cleanup - scans pattern for actual column usage, hides columns with no data. Works on all tracks or just selected track.

### Hide Unused Effect Columns
Specifically hides effect columns that contain no data.

---

# Pattern Matrix

Guide to Paketti's Pattern Matrix operations for pattern duplication, arrangement, and workflow enhancements.

**Source:** `PakettiPatternMatrix.lua` | **Keybindings:** 8 + MIDI

## Pattern Matrix Visibility
**Show/Hide Pattern Matrix** - Toggles visibility, switches to Pattern Editor if needed.

## Smart Pattern Duplication

### Duplicate Pattern Above & Clear Muted Tracks
Intelligent duplication: Creates new pattern slot above, copies all data and automation, applies mute states from sequencer, clears all muted/off tracks, names pattern appropriately.

### Duplicate Pattern Below & Clear Muted Tracks
Same as above but inserts below current position.

### Duplicate Pattern (No Clear)
Standard duplication without clearing muted tracks.

## Pattern Slot Management
- Swap Pattern Slot with Above
- Swap Pattern Slot with Below
- Swap Two Pattern Slots (interactive)

## Batch Operations

### Resize All Patterns to Current Length
Powerful batch operation taking current pattern's length and applying to ALL patterns in song.

---

# Device & Plugin Loaders

Comprehensive guide to Paketti's device and plugin loading shortcuts.

**Source:** `PakettiLoaders.lua` | **Keybindings:** 79+

## Quick Device Loading

### AutoFilter
**Add Filter & LFO (AutoFilter)** - Instant Effect Chain: Loads Filter + LFO with LFO automatically routed to Filter Cutoff.

## Native Renoise Devices

**Effects Available:** Analog Filter, Bus Compressor, Cabinet Simulator, Chorus, Chorus 2, Comb Filter 2, Compressor, Convolver, DC Offset, Delay, Digital Filter, Distortion 2, Doofer, EQ 5, EQ 10, Exciter, Flanger 2, Gainer, Gate 2, LofiMat 2, Maximizer, Mixer EQ, mpReverb 2, Multitap, Phaser 2, Repeater, Notepad, Splitter, Reverb, RingMod 2, Stereo Expander.

**Routing Devices:** #Line Input, #Multiband Send, #ReWire Input, #Send, #Sidechain.

**Modulation Devices:** ***Formula, ***Hydra, ***Instr. Automation, ***Instr. Macros, ***Instr. MIDI Control, ***Key Tracker, ***LFO, ***Meta Mixer, ***Signal Follower, ***Velocity Tracker, ***XY Pad.

## Hidden/Legacy Renoise Devices

Legacy devices (version 1.0 of effects): Chorus, Comb Filter, Distortion, Filter variants, Flanger, Gate, LofiMat, mpReverb, Phaser, RingMod, Scream Filter, Shaper, Stutter.

**Why use hidden devices?** Different character/sound than v2, CPU efficiency, retro sound design, backward compatibility.

## Third-Party Plugin Loaders

**Supported Plugins:** U-He (Zebra, Colour Copy), Waldorf (PPG v2, Attack), FabFilter (One), Rhino 2.1, Surge, Koen KTGranulator, and many more.

## Device Management
- Device Bypass/Enable Operations
- Favorited Devices Control
- Parameter Exposure in Mixer

---

# Phrase Editor

Comprehensive guide to Paketti's Phrase Editor features, creation, manipulation, and workflow enhancements.

**Source:** `PakettiPhraseEditor.lua` | **Keybindings:** 49

## Phrase Creation & Initialization

### Create New Phrase using Paketti Settings
Creates new phrase with predefined Paketti settings: custom name, autoseek, column visibility, note/effect columns, shuffle, LPB, length, looping.

### Modify Current Phrase using Paketti Settings
Applies Paketti phrase settings to currently selected phrase. If no phrase exists, creates a new one.

### Init Phrase Settings
Opens Paketti Phrase Settings preferences dialog.

### Add New Phrase
Simple phrase creation - adds new empty phrase to current instrument.

## Phrase View Controls
- Phrase Editor Visible (Toggle) - Multiple contexts
- Record + Follow Off - Impulse Tracker-style editing

## Phrase Doubler & Halver

### Phrase Doubler
Doubles phrase length and intelligently spreads out all note data.

### Phrase Halver (Joule)
Halves phrase length and compresses note data. Named "Joule" after the physics unit.

## Delay Column Controls
Fine (+1/-1) and coarse (+10/-10) delay column control. Automatically shows delay column when used.

## Write Notes Operations
- Write Notes (Ascending/Descending/Random)
- Write Notes with EditStep (Ascending/Descending/Random)

## Transpose Operations
Various transpose operations for phrase editing.

## Impulse Tracker Operations
ALT-F Expand/Shrink selection operations in Phrase Editor.

## Shift & Nudge
Pattern shifting and nudging operations.

## Flood Fill Pattern with Phrase
Fill pattern with phrase data.

---

# Automation Features

Comprehensive guide to Paketti's automation manipulation, editing, and workflow enhancement features.

**Source:** `PakettiAutomation.lua` | **Keybindings:** 49

## Switch to Automation
Quick automation view access from multiple contexts (Global, Pattern Matrix, Pattern Editor, Mixer) with Dynamic variant for intelligent switching.

## Automation Ramps

### Exponential Ramps
Creates exponential (curved) ramps: Ramp Up (Exp), Ramp Down (Exp).

### Linear Ramps
Creates linear (straight) ramps: Ramp Up (Lin), Ramp Down (Lin).

## Automation Position Controls

### Center ↔ Top (Exponential/Linear)
Creates curves/ramps from center (0.5) to top (1.0) or vice versa.

### Center ↔ Bottom (Exponential/Linear)
Creates curves/ramps from center (0.5) to bottom (0.0) or vice versa.

## Randomize Automation
- Randomize Automation Envelope
- Randomize Automation Envelopes for Device

## Automation Value Operations
- Show Automation Value Dialog
- Write Automation Value (fixed values 0.00-1.00)
- Set Automation Range (Max 1.0, Middle 0.5, Min 0.0)

## Automation Transformations
- Flood Fill Automation Selection
- Flip Automation (Horizontal/Vertical)

## Automation Playmode
Select Automation Playmode (Points/Lines/Curves).

## Pattern Operations
- Show Pattern Automation
- Copy/Paste Pattern Automation

## LFO to Automation
Generate LFO to Automation with various shapes.

## Device Snapshot to Automation
Record Device Snapshot to Automation.

---

# Pattern Editor Advanced

Comprehensive guide to Paketti's advanced Pattern Editor features - **373 keyboard shortcuts!**

**Source:** `PakettiPatternEditor.lua` | **Keybindings:** 373

## Note Column Operations
- Mute/Unmute Note Column
- Record + Follow Off (Impulse Tracker-style)

## Delay Column Controls
Pattern Editor and Phrase Editor delay controls with fine (+1/-1) and coarse (+10/-10) adjustment.

## Pattern Length Settings
Set Pattern Length to common values: 001, 004, 008, 016, 032, 064, 128, 256, 512, plus 006, 012, 024, 048, 096, 192, 384.

## Clever Note Off

### Intelligent Note-Off Placement
- Clever Note Off Right After
- Clever Note Off Right Before
- Clever Note Off Half Before

### KapsLock Note Off
Multiple variants with/without step, available in Pattern Editor, Phrase Editor, and Global contexts.

## Effect Column Operations

### Arpeggio (AXY)
Adjust arpeggio effect values (Xx and xY variants).

### Vibrato (VXY)
Adjust vibrato effect values.

### Tremolo (TXY)
Adjust tremolo effect values.

### Retrig (RXY)
Adjust retrigger effect values.

### Cut (CXX)
Adjust note cut effect values.

## LPB & Timing Controls
Global LPB settings (1-256), Pattern-specific LPB, Quantization controls.

## Pattern Doubler & Halver
dBlue-style pattern doubling and halving operations.

## BPM Controls
Various BPM adjustment shortcuts.

## Column Navigation
Smart column navigation and selection features.

## Advanced Operations
Advanced pattern operations, transformations, and workflow enhancements.

---

# Documentation Sessions

## Session 1: Initial Exploration
- Explored existing documentation structure
- Identified 8 existing documentation files
- Set up documentation tracking system

## Session 2: Round 1 - Major Features
**Result:** 10 new documentation files, 800+ features

Created: PatternEditorAdvanced.md, AutomationFeatures.md, PhraseEditorFeatures.md, DeviceAndPluginLoaders.md, PatternMatrixFeatures.md, ColumnVisibilityFeatures.md, RenderingFeatures.md, InstrumentManagement.md, ImpulseTrackerFeatures.md, WorkflowControls.md

## Session 3: Round 2 - Extended Features
**Result:** 5 new documentation files, 128+ features

Created: BPMFeatures.md, RecordingFeatures.md, MIDIControl.md, RoutingFeatures.md, ChordsAndHarmony.md

## Session 4: Phrase Selection Features
**Result:** 38+ new phrase selection commands

Added comprehensive phrase navigation system with standard and phrase-editor-focused variants.

---

# Documentation Status

## Fully Documented Files (22 files)

**Recently Completed:**
- PakettiPatternEditor.lua ✅
- PakettiAutomation.lua ✅
- PakettiPhraseEditor.lua ✅ (+ NEW phrase selection features)
- PakettiLoaders.lua ✅
- PakettiPatternMatrix.lua ✅
- PakettiViews.lua ✅
- PakettiRender.lua ✅
- PakettiInstrumentBox.lua ✅
- PakettiImpulseTracker.lua ✅
- PakettiControls.lua ✅
- PakettiBPM.lua ✅
- PakettiRecorder.lua ✅
- PakettiMidi.lua ✅
- PakettiRoutings.lua ✅
- PakettiChordsPlus.lua ✅

**Previously Completed:**
- PakettiProcess.lua ✅
- PakettiAudioProcessing.lua ✅
- PakettiTkna.lua ✅
- PakettiSlice.lua ✅
- PakettiSamples.lua ✅
- PakettiRequests.lua ✅

## Not Yet Documented (70+ files)

**High Priority:**
- Paketti0G01_Loader.lua (G01 loading system)
- Import/Export Loaders (AKAI, OctaMED, PlayerPro, Polyend, M8, OP-1, etc.)
- Generative Tools (Arpeggiator, Gater, Phrase Generator)
- Sample Processing (Wavetable, Stretch, RePitch)
- And 60+ more Lua files!

**Estimated remaining features:** 150-270

---

# Menu Entry Gaps

Analysis identifying which keybindings have menu entries and which don't.

## Features WITH Menu Entries
- Pattern Resizing
- Pattern Transformation (Reverse Notes, Flood Fill)
- Interpolation (Volume, Delay, Panning, Sample FX)
- Effect Column Operations (Wipe All Effect Columns)
- Track & Group Management

## Features WITHOUT Menu Entries (Candidates for Adding)

**Priority 1 (HIGH):**
- Time Signatures (3/4, 7/8, 6/8)
- Humanization (dialog, quick variants)
- Selection to Group (Pattern Editor context)

**Priority 2 (MEDIUM):**
- Column Operations (wipe/clear/adjust)
- Track Group Navigation
- Populate Send Tracks
- Pattern Transformation (rotate, interpolate notes)

**Priority 3 (LOW):**
- Automation Operations
- Note Operations
- Navigation (random playback)
- Quick adjustments

---

# Final Statistics

**Total Features Documented:** 966+ (928 base + 38 phrase selection)
**Total Documentation Files Created:** 23
**Total Keyboard Shortcuts:** 850+
**Total MIDI Mappings:** 140+
**Lines of Documentation:** 6,500+
**Lines of Code Analyzed:** 25,000+
**Lua Files Fully Documented:** 22 ✅
**Lua Files Remaining:** 70+ ❌
**Overall Progress:** ~25% complete

---

# The Paketti Story

**Paketti** represents **11 years of continuous development** (2014-2025) by esaruoho, inspired by:
- **Impulse Tracker** by Jeffrey Lim
- **dBlue's** Renoise tools
- **OctaMED** by Teijo Kinnunen
- **Protracker, FastTracker, ModPlug**
- The entire **tracker music community**

This documentation effort honors that legacy by making these powerful tools accessible to everyone!

---

**Last Updated:** 2025-11-28  
**Session Progress:** Round 3 - Added Generative Tools, Processing Tools, Pattern Sequencer Utilities

**"Explore Everything. Do Everything."**

---

# Documentation Progress Report

**Total Keybindings/Menu Entries in Paketti:** 5,155 across 128 Lua files

**Fully Documented Files (30+):**
- ✅ PakettiArpeggiator.lua (Musical Chord Progression Arpeggiator)
- ✅ PakettiGater.lua (16/32-step gate sequencer)
- ✅ PakettiPhraseGenerator.lua (Enhanced phrase generator with 28 scales)
- ✅ Paketti0G01_Loader.lua (Preferences system)
- ✅ PakettiWavetabler.lua (AKWF wavetable generator)
- ✅ PakettiStretch.lua (Time stretching)
- ✅ PakettiRePitch.lua (Sample cycle tuning)
- ✅ PakettiPatternSequencer.lua (34 sequencer utilities)
- ✅ PakettiEightOneTwenty.lua (810 grid sequencer)
- ✅ PakettiTreeStructure.lua (Hierarchical browser)
- ✅ PakettiCaptureLastTake.lua (Recording take management)
- ✅ PakettiThemeSelector.lua (Theme switching)
- ✅ PakettiGlobalGrooveToDelayValues.lua (Groove converter)
- ✅ PakettiFill.lua (Pattern fill)
- Plus all previously documented files (15+ from earlier rounds)

**High-Priority Remaining Files (Not Yet Documented):**
- PakettiExperimental_Verify.lua (79 features)
- PakettiPresetPlusPlus.lua (79 features)
- PakettiForeignSnippets.lua (66 features)
- PakettiZeroCrossings.lua (59 features)
- PakettiPlayerProSuite.lua (51 features - PlayerPro import)
- Paketti35.lua (35 features)
- PakettiFrameCalculator.lua (32 features)
- PakettiLaunchApp.lua (28 features)
- PakettiXMLizer.lua (27 features)
- PakettiOTExport.lua (24 features - Octatrack export)
- PakettiPolyendPatternData.lua (18 features)
- PakettiWavCueExtract.lua (18 features)
- PakettiCCizerLoader.lua (17 features)
- PakettiDigitakt.lua (16 features - Elektron Digitakt export)
- PakettiOctaMEDSuite.lua (15 features - OctaMED import)
- PakettiOP1Export.lua (10 features - Teenage Engineering OP-1)
- PakettiM8Export.lua (8 features - Dirtywave M8)
- PakettiIFFLoader.lua (10 features - Amiga IFF)

**Import/Export Loaders (Partially Covered):**
- AKAI family (MPC2000, S900, S1000, S3000, Programs)
- OctaMED Suite
- PlayerPro Suite
- Polyend Suite (Tracker, Play)
- Teenage Engineering (OP-1, OP-Z)
- Dirtywave M8
- Elektron (Octatrack, Digitakt)
- REX/RX2 loaders
- SF2 loader
- MOD loader
- PTI loader
- IFF loader
- XM/XI import/export
- ITI import/export

**Advanced/Experimental Features (Not Yet Covered):**
- Zero Crossings (59 features)
- Foreign Snippets (66 features)
- Preset++ (79 features)
- Experimental Verify (79 features)
- Pattern Iterator
- Automation Stack (11 features)
- Sample FX Chain Slicer
- Slice Effect Step Sequencer
- Manual Slicer
- Stem Slicer
- Stacker (6 features)
- Beat Detect
- Beat Structure Editor
- Hyperclick
- Chebyshev Waveshaper
- EQ30
- Equation Calculator
- Image To Sample
- Metric Modulation
- Transpose Block
- Tuplet Generator
- Unison Generator

**Estimated Coverage:** ~35% of total Paketti features documented
**Estimated Remaining Features:** 3,000+ across 90+ Lua files

---

# Import/Export Tools

## Polyend Tracker/Play Integration

**Source:** `PakettiPolyendSuite.lua` | **Features:** 1 main + extensive PTI system

### Polyend Buddy (PTI File Browser)

**Shortcut:** `Global:Paketti:Polyend Buddy (PTI File Browser)` ⌨️

Comprehensive PTI (Polyend Tracker Instrument) file browser and manager. Navigate, preview, and load Polyend Tracker instruments into Renoise.

**Features:**
- Browse PTI files from Polyend Tracker library
- Preview samples before loading
- Convert PTI to XRNI format
- Batch operations
- Favorites system
- Search/filter capabilities

**PTI Format Support:**
- Sample data import
- Slice marker preservation
- Modulation settings transfer
- FX chain conversion
- Envelope mapping

**Use Cases:**
- Transfer Polyend Tracker projects to Renoise
- Share instruments between platforms
- Build hybrid workflows (Polyend + Renoise)
- Access Polyend sample library

---

## PlayerPro Suite

**Source:** `PakettiPlayerProSuite.lua` | **Features:** 51 (transpose, note grid, tools, effects)

Complete PlayerPro (Amiga tracker) workflow emulation with intelligent dialogs, transpose operations, and note entry system.

### Main Dialog

**Shortcuts:**
- `Pattern Editor:Paketti:Open Player Pro Tools Dialog...` ⌨️ - Main tools interface
- `Global:Paketti:Player Pro Intelligent Dialog...` ⌨️ - Context-aware dialog
- `Global:Paketti:Open Player Pro Note Column Dialog...` ⌨️ - Note entry grid

**Menu:** Dynamic note dropdown menus for all note ranges (Pattern Editor:Paketti:Other Trackers:Note Dropdown)

### Transpose Operations

**Pattern Editor & Phrase Editor Support:**

**Row/Selection Transpose:**
- +1/-1 semitone
- +12/-12 octave
- With/without playback preview
- Selection or row mode

**Note Column Transpose:**
- +1/-1 semitone  
- +12/-12 octave
- With/without playback preview
- Affects only current note column

**All Instruments Transpose:**
- Transpose with Play (All Instruments) variants
- +1/-1/-12/+12 for row and note column
- Changes instrument assignment while transposing

**Keybindings (Pattern Editor):**
- `Player Pro Transpose Selection or Row +1/-1/+12/-12` ⌨️
- `Player Pro Transpose Selection or Note Column +1/-1/+12/-12` ⌨️
- `Player Pro Transpose ... with Play` variants ⌨️
- `Player Pro Transpose ... with Play (All Instruments)` variants ⌨️

**Keybindings (Phrase Editor):**
- `Player Pro Transpose Selection or Row +1/-1/+12/-12` ⌨️
- `Player Pro Transpose Selection or Note Column +1/-1/+12/-12` ⌨️
- `Player Pro Transpose ... with Play` variants ⌨️

### Effect Dialog

**Shortcut:** `Pattern Editor:Paketti:Player Pro Effect Dialog...` ⌨️

Quick access dialog for inserting PlayerPro-style effects into pattern. Maps PlayerPro effect commands to Renoise equivalents.

### Scanner

**Shortcut:** `Pattern Editor:Paketti:Player Pro Scanner (Start/Stop)` ⌨️

Pattern scanner tool - analyze and visualize pattern data, PlayerPro-style scrolling display.

### Note Grid

Context-aware note entry system with octave selection, note dropdowns, and quick entry shortcuts.

**Phrase Editor Support:**
- `Phrase Editor:Paketti:Player Pro Note Grid Dialog` ⌨️
- `Phrase Editor:Paketti:Player Pro Intelligent Dialog` ⌨️
- `Phrase Editor:Paketti:Player Pro Effect Dialog` ⌨️

### Workflow

**PlayerPro-Style Features:**
- Transpose with immediate playback preview
- Context-sensitive note entry
- Effect command quick access
- Phrase editor full integration
- All Instruments transpose mode

---

## OpenMPT Linear Keyboard Layer

**Source:** `PakettiOpenMPTLinearKeyboardLayer.lua` | **Features:** 1

**Shortcut:** `Global:Paketti:Paketti PlayerPro OpenMPT Linear Keyboard Layer...` ⌨️

**Menu:**
- `Main Menu:Tools:Paketti PlayerPro OpenMPT Linear Keyboard Layer...` 📋
- `Pattern Editor:Paketti Gadgets:Paketti PlayerPro OpenMPT Linear Keyboard Layer...` 📋

Advanced keyboard-to-MIDI mapper with OpenMPT-style linear keyboard layout. Transform your QWERTY keyboard into a chromatic instrument with independent octave controls per row.

### Linear Keyboard Layout

**Four keyboard rows become linear octaves:**
- **1-row:** `1234567890+=´` (13 keys) - Octave 1
- **Q-row:** `QWERTYUIOP` (10+ keys) - Octave 2  
- **A-row:** `ASDFGHJKL` (9+ keys) - Octave 3
- **Z-row:** `ZXCVBNM,.-` (10+ keys) - Octave 4

Each key triggers a semitone in sequence (C, C#, D, D#, E, F, F#, G, G#, A, A#, B, C+).

### Per-Row Octave Control

**Independent octave dropdowns (C-0 through B-9):**
- **1-row base note:** Configurable (default: C-3)
- **Q-row base note:** Configurable (default: C-4)
- **A-row base note:** Configurable (default: C-5)
- **Z-row base note:** Configurable (default: C-6)

Change any row's starting octave independently - perfect for chords across ranges or bassline + melody split.

### Special Modes

**Follow Transport Checkbox:**
When enabled, all row base notes automatically follow `renoise.song().transport.octave`:
- **1-row** = transport.octave - 1
- **Q-row** = transport.octave
- **A-row** = transport.octave + 1
- **Z-row** = transport.octave + 2

Change Renoise's octave (< / > keys), all rows shift together.

**Fret Mode Checkbox:**
Guitar-style layout with overlapping ranges (like guitar strings):
- **Z-row:** E-2 base (low E string)
- **A-row:** A-2 base (A string)
- **Q-row:** D-3 base (D string)  
- **1-row:** G-3 base (G string)

Emulates guitar fretting - adjacent keys = adjacent frets.

### Features

**Real-time MIDI Triggering:**
- Direct note triggering (bypasses Pattern Editor)
- Polyphonic (play multiple keys simultaneously)
- Note-off on key release
- Auto-cleanup for stuck notes (5s timeout)

**Visual Feedback:**
- Shows currently playing notes
- Displays active octave ranges per row
- Preset indicator
- Minimize/maximize dialog

**Integration:**
- Uses current instrument
- Respects instrument's MIDI/sample properties
- Works alongside normal pattern editing

### Use Cases

**Live Performance:**
- Play melodies with QWERTY keyboard
- Trigger samples during live sets
- Record performances into pattern

**Composition:**
- Quick melody sketching
- Chord voicing exploration
- Bass + melody layering (different rows)

**Learning Tool:**
- Visualize linear note layout
- Understand chromatic relationships
- Practice without MIDI keyboard

---

## Slab'o'Patterns

**Source:** `PakettiSlabOPatterns.lua` | **Features:** 2

**Shortcuts:**
- `Pattern Editor:Paketti:Paketti Slab'o'Patterns...` ⌨️
- `Global:Paketti:Paketti Slab'o'Patterns...` ⌨️

**Menu:**
- `Main Menu:Tools:Paketti Gadgets:Paketti Slab'o'Patterns...` 📋
- `Pattern Sequencer:Paketti Gadgets:Paketti Slab'o'Patterns...` 📋
- `Pattern Matrix:Paketti Gadgets:Paketti Slab'o'Patterns...` 📋
- `Pattern Editor:Paketti Gadgets:Paketti Slab'o'Patterns...` 📋

**Beat-based pattern generation system** for creating complex time signature sequences. Define pattern lengths in beats (not lines), automatically adapts to any LPB.

### Core Concept

Instead of thinking in "64 lines" or "48 lines", think in **musical beats:**
- **"4"** = 4 beats using current song LPB (e.g., at LPB 4 = 16 lines, at LPB 8 = 32 lines)
- **"7"** = 7 beats = 7/4 time signature
- **"3.5"** = 3.5 beats = fractional measures
- **"4:8"** = 4 beats at LPB 8 (force specific LPB via ZL command in pattern)

Beat-based approach maintains rhythmic structure regardless of LPB changes.

### Preset Time Signatures

**Built-in Presets:**
- **7/4** - 7 beats
- **5/4** - 5 beats
- **14/8** - 4 beats, 3 beats alternating
- **15/8** - 4 beats, 3.5 beats
- **14/8 - 15/8** - Four-pattern cycle
- **14/8 - 15/8 - 15/8 - 14/8** - Eight-pattern progressive cycle
- **6/4 8/4** - 3, 3, 4, 4 beats
- **8/4 6/4** - 4, 4, 3, 3 beats

Click preset button to apply. Toggle "Append Preset" checkbox to add preset to existing list (instead of replacing).

### Custom Sequences

**Build your own:**
1. Enter beat values in rows (e.g., "4", "7", "3.5")
2. **+** button duplicates current seed pattern
3. **-** button removes selected row
4. **↑/↓** arrows move rows
5. **Section Name** text field labels the sequence

**Generate Patterns button:**
- Creates patterns in sequence for each beat value
- Names patterns with section name
- Applies LPB if specified (via ZL command)
- Updates sequencer

### Advanced Features

**Seed Pattern Duplication:**
When you click **+**, duplicates the entire current pattern list. Example:
- Start: `[4, 7]`
- After +: `[4, 7, 4, 7]`
- After + again: `[4, 7, 4, 7, 4, 7, 4, 7]`

Perfect for building extended sections quickly.

**LPB Control:**
- Use `beats:lpb` format (e.g., "7:5") to force specific LPB
- Writes ZL command to pattern master track
- Overrides song global LPB for that pattern

**Section Naming:**
- Enter section name (e.g., "Verse", "Chorus", "Bridge")
- Toggle "Append preset name" to add preset label to section
- Generated patterns named: "Section 01", "Section 02", etc.

### Configuration Persistence

Pattern list saved to `slab_o_patterns.txt` in tool bundle path. Configuration persists across sessions.

### Use Cases

**Progressive Metal/Jazz:**
- Complex time signature progressions
- Polyrhythmic sections
- Metric modulation

**Film Scoring:**
- Match video timing with beat-accurate patterns
- Quick time signature experiments

**Electronic Music:**
- Asymmetric loop lengths
- Phase-shifting patterns
- Generative structures

**Workflow Efficiency:**
- Pre-plan song structure by beats
- Bulk-create pattern skeleton
- Experiment with rhythm without manual pattern resizing

---

## Elektron Octatrack Integration

**Source:** `PakettiOTExport.lua` | **Features:** 24

Export Renoise samples to Elektron Octatrack format (.ot metadata files) with drumkit generation and slice support.

### Export Functions

**Shortcuts:**
- `Sample Editor:Paketti:Export to Octatrack (.WAV+.ot)` ⌨️ - Exports both WAV and OT metadata
- `Sample Editor:Paketti:Export to Octatrack (.ot)` ⌨️ - Exports OT metadata only

**Menu:**
- `Sample Editor:Paketti:Octatrack:Export (.WAV+.ot)` 📋
- `Sample Editor:Paketti:Octatrack:Export (.ot only)` 📋
- `Sample Mappings:Paketti:Octatrack:Export to Octatrack (.WAV+.OT)` 📋

**.OT File Format:**
- Contains slice markers
- Loop points
- Trim settings
- Playback properties
- Tempo/BPM info

### Import Functions

**Shortcuts:**
- `Sample Editor:Paketti:Import Octatrack (.ot)` ⌨️

**Menu:**
- `Sample Editor:Paketti:Octatrack:Import (.ot)` 📋
- `Sample Mappings:Paketti:Octatrack:Import Octatrack (.ot)` 📋

Reads .ot files and applies slice markers, loop points, and properties to Renoise samples.

### Drumkit Generation

**Shortcuts:**
- `Sample Editor:Paketti:Octatrack Generate Drumkit (Smart Mono/Stereo)` ⌨️
- `Sample Editor:Paketti:Octatrack Generate Drumkit (Force Mono)` ⌨️
- `Sample Editor:Paketti:Octatrack Generate Drumkit (Play to End)` ⌨️

**Menu:**
- `Sample Editor:Paketti:Octatrack:Generate Drumkit (Smart Mono/Stereo)` 📋
- `Sample Editor:Paketti:Octatrack:Generate Drumkit (Force Mono)` 📋
- `Sample Editor:Paketti:Octatrack:Generate Drumkit (Play to End)` 📋

**Smart Mono/Stereo:**
- Analyzes samples
- Exports mono as mono, stereo as stereo
- Optimizes for Octatrack memory

**Force Mono:**
- Converts all to mono
- Maximum sample count per project
- Smaller file sizes

**Play to End:**
- Sets all samples to play to completion
- Disables slice looping
- One-shot mode for all slices

### Slice Operations

**Shortcut:** `Sample Editor:Paketti:Octatrack Set .ot Loop to Slice` ⌨️

**Menu:** `Sample Editor:Paketti:Octatrack:Set Loop to Slice` 📋

Sets sample loop points to match selected slice boundaries - perfect for per-slice looping on Octatrack.

### Debug Dialog

**Shortcut:** `Sample Editor:Paketti:Debug Octatrack (.ot)` ⌨️

**Menu:** `Sample Editor:Paketti:Octatrack:Debug (.ot)` 📋

Displays .ot file contents in human-readable format. Debug slice markers, loop points, and metadata.

### Workflow

1. **Prepare in Renoise:** Slice, loop, process samples
2. **Export with .ot:** Generate .ot metadata files
3. **Transfer to Octatrack:** Copy WAV + .ot files to CF card
4. **Load in Octatrack:** Slices and settings preserved

---

## Elektron Digitakt Integration

**Source:** `PakettiDigitakt.lua` | **Features:** 16

Export sample chains to Elektron Digitakt with automatic pad mapping and stereo/mono conversion.

### Export Dialog

**Shortcuts:**
- `Global:Paketti:Export Digitakt Sample Chain...` ⌨️
- `Sample Editor:Paketti:Digitakt Export Sample Chain...` ⌨️

**Menu:**
- `Sample Editor:Paketti:Digitakt:Export Sample Chain...` 📋
- `Instrument Box:Paketti:Digitakt:Export Sample Chain...` 📋
- `DSP Device:Paketti:Digitakt:Export Sample Chain...` 📋
- `Mixer:Paketti:Digitakt:Export Sample Chain...` 📋

Opens comprehensive export dialog with options for:
- Sample chain length (up to 128 samples)
- Mono/Stereo mode
- Pad assignment
- File naming
- Export location

### Quick Export Modes

**Shortcuts:**
- `Global:Paketti:Export Digitakt Quick Export (Digitakt Mono)` ⌨️
- `Global:Paketti:Export Digitakt Quick Export (Digitakt 2 Stereo)` ⌨️
- `Global:Paketti:Export Digitakt Quick Export (Chain Mode)` ⌨️

**Menu:**
- `Sample Editor:Paketti:Digitakt:Quick Export (Digitakt Mono)` 📋
- `Sample Editor:Paketti:Digitakt:Quick Export (Digitakt 2 Stereo)` 📋
- `Sample Editor:Paketti:Digitakt:Quick Export (Chain Mode)` 📋

**Digitakt Mono:**
- Converts all samples to mono
- Maximum compatibility
- 128 samples per chain

**Digitakt 2 Stereo:**
- Preserves stereo samples
- Optimized for Digitakt 2
- Stereo sample support

**Chain Mode:**
- Creates single long sample chain
- Slice markers for each sample
- One sample = entire kit

### Sample Chain Format

**Automatic Features:**
- Concatenates samples into single file
- Generates slice markers
- Creates start point list
- Mono/stereo conversion
- Normalization (optional)
- Pad mapping (01-128)

### Use Cases

**Drumkit Creation:**
- Export Renoise instrument as Digitakt kit
- Preserves individual sample playback
- One slice per pad

**Pattern Transfer:**
- Export pattern sequences
- Transfer beats to Digitakt
- Hybrid live performance setup

---

## OctaMED Suite

**Source:** `PakettiOctaMEDSuite.lua` | **Features:** 15

OctaMED (Amiga tracker) workflow features including Pick/Put, Note Spread, Note Echo, and track mute operations.

### Pick/Put System

**Shortcut:** `Pattern Editor:Paketti:OctaMED Pick/Put Dialog...` ⌨️

Visual dialog for Pick/Put note/instrument operations - OctaMED's clipboard system for rapid note entry.

**Pick Shortcuts (01-16):**
- `Pattern Editor:Paketti:OctaMED Pick Slot 01` through `16` ⌨️
- Captures note + instrument at cursor
- Stores in numbered slot

**Put Shortcuts (01-16):**
- `Pattern Editor:Paketti:OctaMED Put Slot 01` through `16` ⌨️
- Pastes stored note + instrument
- Advances by edit step

### Note Spread

**Shortcuts:**
- `Global:Paketti:OctaMED Note Spread 01` through `64` ⌨️
- `Pattern Editor:Paketti:OctaMED Note Spread 01` through `64` ⌨️
- `Global:Paketti:OctaMED Note Spread Increment/Decrement` ⌨️

**Menu:** `Pattern Editor:Paketti:Other Trackers:OctaMED Note Spread 01-64` 📋

**Note Spread Effect:**
- Duplicates current note across pattern
- Spacing = spread value (lines between notes)
- Creates instant drum patterns
- Increment/decrement adjusts spread value

**Example:** Spread 04 = note every 4 lines (16th notes at LPB 4)

### Note Echo

**Shortcut:** `Pattern Editor:Paketti:OctaMED Note Echo Dialog...` ⌨️

Creates echo/delay patterns from current note. Configurable:
- Echo count (repeats)
- Echo spacing (lines)
- Volume decay
- Transpose per echo

### Track Mute (01-64)

**Shortcuts:**
- `Global:Paketti:OctaMED Toggle Mute Track 01` through `64` ⌨️
- `Pattern Editor:Paketti:OctaMED Toggle Mute Track 01` through `64` ⌨️
- `Mixer:Paketti:OctaMED Toggle Mute Track 01` through `64` ⌨️
- `Phrase Editor:Paketti:OctaMED Toggle Mute Track 01` through `64` ⌨️

Direct track mute shortcuts by track number - instant mute/unmute without navigating.

### Workflow

**OctaMED-Style Features:**
- Pick/Put for rapid note entry
- Note Spread for rhythmic patterns
- Note Echo for delay effects
- Direct track muting (1-64)

---

# Advanced Features

## Foreign Snippets

**Source:** `PakettiForeignSnippets.lua` | **Features:** 66

Collection of experimental and utility features - advanced operations, batch conversions, and workflow enhancements.

### Auto Disk Browser Control

**Shortcut:** `Global:Paketti:Auto Control Disk Browser on Song Load` ⌨️

Automatically shows/hides disk browser when loading songs based on preference.

### Instrument Info

**Shortcuts:**
- `Global:Paketti:Show Instrument Info (Status)` ⌨️ - Status bar display
- `Global:Paketti:Show Instrument Info (Dialog)` ⌨️ - Full dialog
- `Global:Paketti:Set Instrument Info Dialog Height` ⌨️ - Adjust dialog size

Displays comprehensive instrument information:
- Sample count and properties
- Modulation chains
- FX chains
- Plugin settings
- Phrase data

### MIDI Output Management

**Shortcut:** `Global:Paketti:Set MIDI Output for All Instruments` ⌨️

Batch-sets MIDI output device for all instruments in song. Perfect for:
- Routing all to external synth
- Switching between MIDI devices
- Hardware setup changes

### Basenote Management

**Shortcut:** `Global:Paketti:Reset Basenote to Lowest Note Range` ⌨️

Resets basenote of all samples to lowest note in their keyzone range. Useful for:
- Fixing transposed samples
- Standardizing sample mappings
- Preparing for re-keymapping

### SFZ Batch Converter

**Shortcuts:**
- `Global:Paketti:Batch Convert SFZ to XRNI (Save Only)...` ⌨️
- `Global:Paketti:Batch Convert SFZ to XRNI & Load...` ⌨️

Converts multiple SFZ files to Renoise XRNI format:
- Batch folder processing
- Preserves zones and mappings
- Optional auto-load after conversion

**SFZ Support:**
- Zone mappings
- Volume/pan settings
- Loop points
- Sample layers

### Pattern Alias Operations

**Shortcuts:**
- `Global:Paketti:Alias Identical Pattern Slots` ⌨️ 📋
- `Global:Paketti:Match Automation with all Aliases` ⌨️
- `Global:Paketti:Clear Pattern Aliases` ⌨️

**Pattern Matrix:**
- `Pattern Matrix:Paketti:Alias Identical Pattern Slots` ⌨️
- `Pattern Matrix:Paketti:Match Automation with all Aliases` ⌨️
- `Pattern Matrix:Paketti:Clear Pattern Aliases` ⌨️

**Alias Identical Patterns:**
- Finds patterns with identical content
- Creates aliases to save memory
- Reduces song file size

**Match Automation:**
- Synchronizes automation across all aliases
- Updates when one is changed
- Maintains consistency

**Clear Aliases:**
- Removes all pattern aliases
- Makes each unique again
- For independent editing

### Auto-Capture Track

**Shortcuts:**
- `Pattern Editor:Paketti:Enable/Disable Auto-Capture Track` ⌨️
- `Pattern Editor:Paketti:Auto-Capture Track (Cycle All Modes)` ⌨️
- `Pattern Editor:Paketti:Auto-Capture Track (Pattern Editor Only)` ⌨️
- `Pattern Editor:Paketti:Auto-Capture Track (Not Pattern Editor)` ⌨️
- `Pattern Editor:Paketti:Auto-Capture Track (All Frames)` ⌨️
- `Mixer:Paketti:Capture Track from Instrument` ⌨️

**Mixer Context:** Full duplicate set of shortcuts

**Auto-Capture System:**
- Automatically switches track when instrument changes
- Multiple capture modes (Pattern Editor only, Not Pattern Editor, All Frames)
- Manual capture trigger
- Enable/disable toggle

**Use Cases:**
- Organize tracks by instrument automatically
- Studio recording workflow
- Live performance setup

---

## Preset++

**Source:** `PakettiPresetPlusPlus.lua` | **Features:** 79

Advanced DSP device preset system with intelligent send creation, multiband sends, LFO presets, and device chain inspection.

### Device Inspection

**Shortcuts:**
- `Global:Paketti:Inspect Selected Device` ⌨️ - Shows selected device parameters
- `Global:Paketti:Inspect Track Device Chain` ⌨️ - Shows entire device chain
- `Global:Paketti:Inspect Track Device Chain (Clean)` ⌨️ - Cleaned output

**Menu:**
- `DSP Chain:Paketti:Inspect Track Device Chain` 📋
- `DSP Chain:Paketti:Inspect Track Device Chain (Clean)` 📋
- `Mixer:Paketti:Inspect Track Device Chain` 📋
- `Mixer:Paketti:Inspect Selected Device` 📋

Displays device parameters, values, and ranges in human-readable format. "Clean" version removes technical clutter.

### Send Device Creation

**Send Device Shortcuts:**
- `Global:Paketti:Send Device (Preset++)` ⌨️
- `Global:Paketti:Send (Preset++)` ⌨️

**Multiband Send Shortcuts:**
- `Global:Paketti:Multiband Send Device (Preset++)` ⌨️
- `Global:Paketti:Multiband Send (Preset++)` ⌨️

**Menu (All Contexts):**
- `DSP Device:Paketti:Preset++:Send Device` 📋
- `DSP Device:Paketti:Preset++:Multiband Send Device` 📋
- `DSP Chain:Paketti:Send Device (Preset++)` 📋
- `Mixer:Paketti:Preset++:Send Device` 📋

Adds pre-configured Send or Multiband Send device with optimal routing.

### Send Track Creation

**Basic Send Track:**
- `Global:Paketti:Create New Send Track (Preset++)` ⌨️

**Advanced Send Track Creation:**
- `Global:Paketti:Create New Send Track (Keep Source) (Preset++)` ⌨️
- `Global:Paketti:Create New Send Track (Mute Source) (Preset++)` ⌨️
- `Global:Paketti:Create New Multiband Send Track (Keep Source) (Preset++)` ⌨️
- `Global:Paketti:Create New Multiband Send Track (Mute Source) (Preset++)` ⌨️

**Menu (All Contexts):**
- `DSP Chain:Paketti:Create New Send Track ...` 📋
- `DSP Device:Paketti:Preset++:Create New Send Track ...` 📋
- `Mixer:Paketti:Preset++:Create New Send Track ...` 📋
- `Pattern Matrix:Paketti:Preset++:Create New Send Track ...` 📋
- `Pattern Editor:Paketti:Create New Send Track ...` 📋

**Keep Source:**
- Creates send track
- Original track continues playing
- Parallel processing

**Mute Source:**
- Creates send track
- Mutes original track
- Send-only processing

**Multiband Variants:**
- Creates Multiband Send device
- Frequency-split routing
- Multi-band parallel processing

### LFO Presets

**SeparateSyncLFO (Beatsgo):**
- `Global:Paketti:SeparateSyncLFO (Beatsgo) (Preset++)` ⌨️

**Menu:**
- `DSP Device:Paketti:Preset++:SeparateSyncLFO (Beatsgo LFO)` 📋
- `DSP Chain:Paketti:SeparateSyncLFO (Beatsgo) (Preset++)` 📋
- `Mixer:Paketti:Preset++:SeparateSyncLFO (Beatsgo LFO)` 📋

Pre-configured LFO with beat-synced modulation, optimized Beatsgo settings.

**LFOEnvelopePan:**
- `Global:Paketti:LFOEnvelopePan (Preset++)` ⌨️

**Menu:**
- `DSP Device:Paketti:Preset++:LFOEnvelopePan` 📋
- `DSP Chain:Paketti:LFOEnvelopePan (Preset++)` 📋
- `Mixer:Paketti:Preset++:LFOEnvelopePan` 📋

LFO preset with envelope-based panning modulation.

### Filter Presets

**Hipass:**
- `Global:Paketti:Hipass (Preset++)` ⌨️
- `DSP Device:Paketti:Hipass (Preset++)` ⌨️
- `Mixer:Paketti:Hipass (Preset++)` ⌨️

**Menu:**
- `DSP Device:Paketti:Preset++:Hipass` 📋
- `DSP Chain:Paketti:Hipass (Preset++)` 📋
- `Mixer:Paketti:Preset++:Hipass` 📋

Pre-configured high-pass filter with optimal settings.

### Workflow

**Preset++ Philosophy:**
- One-click device insertion with optimal settings
- Context-aware menu placement
- Advanced routing automation
- Professional mixing shortcuts

---

## Zero Crossings

**Source:** `PakettiZeroCrossings.lua` | **Features:** 59

Advanced slicing system based on zero-crossing detection - create perfect, click-free slices with BPM-synced movement and randomization.

### Advanced Dialog

**Shortcut:** `Global:Paketti:Zero Crossings Advanced Dialog` ⌨️

**Menu:**
- `Sample Editor:Paketti:Zero Crossings:Advanced Dialog` 📋
- `Instrument Box:Paketti:Zero Crossings:Advanced Dialog` 📋
- `Sample Navigator:Paketti:Zero Crossings:Advanced Dialog` 📋

Comprehensive zero-crossing slicer with:
- Threshold adjustment
- Slice count control
- Visual waveform display
- Slice preview
- Zero-crossing snap

### Snap Selection

**Shortcut:** `Sample Editor:Paketti:Snap Selection to Zero Crossings` ⌨️

**Menu:** `Sample Editor:Paketti:Zero Crossings:Snap Selection to Zero Crossings` 📋

Adjusts selection boundaries to nearest zero crossings - eliminates clicks when looping or slicing.

### Wipe&Slice (Zero Crossing)

**Shortcuts:**
- `Global:Paketti:Zero Crossing Wipe&Slice (002)` ⌨️
- `Global:Paketti:Zero Crossing Wipe&Slice (004)` ⌨️
- `Global:Paketti:Zero Crossing Wipe&Slice (008)` ⌨️
- `Global:Paketti:Zero Crossing Wipe&Slice (016)` ⌨️
- `Global:Paketti:Zero Crossing Wipe&Slice (032)` ⌨️
- `Global:Paketti:Zero Crossing Wipe&Slice (064)` ⌨️
- `Global:Paketti:Zero Crossing Wipe&Slice (128)` ⌨️

**Menu:** `Sample Editor:Paketti:Wipe&Slice:Zero Cross Wipe&Slice (002-128)` 📋

**Wipe&Slice Algorithm:**
1. Deletes existing slice markers
2. Creates N evenly-spaced slices
3. Snaps each to nearest zero crossing
4. Result: Perfect, click-free slices

### Slice Randomization

**Shortcuts:**
- `Global:Paketti:Randomize Slice Positions` ⌨️
- `Global:Paketti:Create Random Distributed Slices` ⌨️

**Menu:**
- `Sample Editor:Paketti:Zero Crossings:Randomize:Randomize Existing Slices` 📋
- `Sample Editor:Paketti:Zero Crossings:Randomize:Create Random Distributed Slices` 📋
- `Instrument Box:Paketti:Zero Crossings:Randomize Slices` 📋

**Randomize Existing:**
- Moves existing slices to random positions
- Maintains slice count
- Snaps to zero crossings

**Create Random:**
- Generates new random slice distribution
- Configurable slice count
- Zero-crossing aligned

### BPM-Synced Slice Movement

**Slice Start Movement:**
- `Sample Editor:Paketti:Move Slice Start -/+ 1/4 Beat` ⌨️
- `Sample Editor:Paketti:Move Slice Start -/+ 1/8 Beat` ⌨️
- `Sample Editor:Paketti:Move Slice Start -/+ 1/16 Beat` ⌨️
- `Sample Editor:Paketti:Move Slice Start -/+ 1/32 Beat` ⌨️

**Slice End Movement:**
- `Sample Editor:Paketti:Move Slice End -/+ 1/4 Beat` ⌨️
- `Sample Editor:Paketti:Move Slice End -/+ 1/8 Beat` ⌨️
- `Sample Editor:Paketti:Move Slice End -/+ 1/16 Beat` ⌨️
- `Sample Editor:Paketti:Move Slice End -/+ 1/32 Beat` ⌨️

**Menu:** `Sample Editor:Paketti:Zero Crossings:BPM Movement:...` 📋 (all variants)

**BPM-Synced Movement:**
- Moves slice markers by musical timing
- 1/4 beat = quarter note
- 1/8 beat = eighth note
- 1/16 beat = sixteenth note
- 1/32 beat = thirty-second note

**Use Cases:**
- Adjust slice timing to groove
- Fix slightly off-beat slices
- Quantize slice markers
- Create swing feel

### Workflow

**Zero-Crossing Benefits:**
- Click-free slices
- Clean loops
- Professional quality
- No artifacts

**Perfect For:**
- Drum breaks
- Vocal chops
- Melodic samples
- Loop creation

---

## Dirtywave M8 Integration

**Source:** `PakettiM8Export.lua` | **Features:** 8

Import/export samples and instruments between Renoise and Dirtywave M8 tracker.

### Export to M8

**Shortcuts:**
- `Global:Paketti:M8 Export Sample Chain` ⌨️
- `Global:Paketti:M8 Export Instrument` ⌨️

**Menu:**
- `Main Menu:Tools:Paketti:Xperimental/WIP:M8:Export Sample Chain` 📋
- `Main Menu:Tools:Paketti:Xperimental/WIP:M8:Export Instrument` 📋

**Sample Chain:**
- Exports all samples in instrument as M8-compatible chain
- Generates slice data
- Creates M8 instrument file

**Instrument Export:**
- Full instrument with samples
- Preserves keymapping
- M8-compatible format

### Import from M8

**Shortcuts:**
- `Global:Paketti:M8 Import Sample Chain` ⌨️
- `Global:Paketti:M8 Import Instrument` ⌨️

**Menu:**
- `Main Menu:Tools:Paketti:Xperimental/WIP:M8:Import Sample Chain` 📋
- `Main Menu:Tools:Paketti:Xperimental/WIP:M8:Import Instrument` 📋

**Sample Chain Import:**
- Loads M8 sample chains
- Restores slices
- Maps to Renoise instrument

**Instrument Import:**
- Loads M8 instruments
- Converts to XRNI format
- Preserves samples and mapping

### Workflow

**M8 → Renoise:**
- Capture M8 beats in Renoise
- Process with Renoise DSP
- Re-export back to M8

**Renoise → M8:**
- Create complex instruments in Renoise
- Export for M8 performance
- Hybrid production workflow

---

## Teenage Engineering OP-1 Integration

**Source:** `PakettiOP1Export.lua` | **Features:** 10

Export samples and drumkits to Teenage Engineering OP-1/OP-Z format with AIFF metadata.

### Export Drum Kit

**Shortcut:** `Global:Paketti:OP-1 Export Drum Kit` ⌨️

**Menu:** `Main Menu:Tools:Paketti:Xperimental/WIP:OP-1:Export Drum Kit` 📋

**Drum Kit Format:**
- 24 samples maximum (OP-1 pads)
- AIFF format with OP-1 metadata
- Slice markers preserved
- Pad mapping (1-24)

**Process:**
1. Select instrument with samples
2. Export as OP-1 drum kit
3. Transfer AIFF files to OP-1
4. Load on OP-1 Drum Sampler

### Export Tape

**Shortcut:** `Global:Paketti:OP-1 Export Tape` ⌨️

**Menu:** `Main Menu:Tools:Paketti:Xperimental/WIP:OP-1:Export Tape` 📋

Exports audio to OP-1 Tape format:
- Tape-compatible AIFF
- 4-track tape metadata
- Timestamp embedding
- Album artwork (optional)

### Export Sample

**Shortcut:** `Global:Paketti:OP-1 Export Sample` ⌨️

**Menu:** `Main Menu:Tools:Paketti:Xperimental/WIP:OP-1:Export Sample` 📋

Single sample export with OP-1 AIFF chunks:
- Loop points preserved
- BPM metadata
- Key/transpose info
- OP-1 sampler compatible

### Import Sample

**Shortcut:** `Global:Paketti:OP-1 Import Sample` ⌨️

**Menu:**
- `Main Menu:Tools:Paketti:Xperimental/WIP:OP-1:Import Sample` 📋
- `Sample Editor:Paketti:Xperimental/WIP:OP-1:Import Sample` 📋
- `Sample Mappings:Paketti:Xperimental/WIP:OP-1:Import Sample` 📋

Imports OP-1 AIFF files with metadata:
- Reads loop points from metadata
- Applies BPM info
- Restores transpose settings
- Converts to Renoise format

### Use Cases

**OP-1 → Renoise:**
- Import OP-1 recordings
- Process with full DAW capabilities
- Edit and enhance

**Renoise → OP-1:**
- Create drum kits in Renoise
- Export for portable OP-1 use
- Hybrid production workflow

---

## FastTracker XM Import

**Source:** `PakettiXMImport.lua` | **Features:** 1

**Menu:** `Song:Import.:XM File` 📋

Imports FastTracker II .XM (Extended Module) files into Renoise. Converts:
- Patterns
- Instruments
- Samples
- Effects
- Song structure

**FT2 Compatibility:**
- Pattern effects translated
- Volume column preserved
- Panning translated
- BPM/Speed converted

---

## FastTracker XI Export

**Source:** `PakettiXIExport.lua` | **Features:** 3

**Shortcut:** `Global:Paketti:Export Instrument to XI...` ⌨️

**Menu:**
- `Sample Editor:Paketti:Export:Export Instrument to XI...` 📋
- `Instrument Box:Paketti:Export:Export Instrument to XI...` 📋

Exports current Renoise instrument to FastTracker II .XI (Extended Instrument) format.

**XI Format:**
- Sample data
- Keymapping
- Volume envelope
- Panning envelope
- FT2 compatible

**Use Cases:**
- Share instruments with FT2 users
- Archive in classic format
- Cross-tracker compatibility

---

## Impulse Tracker ITI Export

**Source:** `PakettiITIExport.lua` | **Features:** 3

**Shortcuts:**
- `Global:Paketti:Export Instrument to ITI...` ⌨️
- `Sample Editor:Paketti:Export Instrument to ITI...` ⌨️

**Menu:** `Sample Editor:Paketti:Export:Export Instrument to ITI...` 📋

Exports current Renoise instrument to Impulse Tracker .ITI (Impulse Tracker Instrument) format.

**ITI Format:**
- Full instrument data
- All samples
- Envelopes
- NNA (New Note Action)
- IT2 compatible

**Use Cases:**
- Share with Impulse Tracker / OpenMPT users
- Archive in IT format
- Classic tracker compatibility

---

# Slicing Tools

## Stem Slicer

**Source:** `PakettiStemSlicer.lua` | **Features:** 2

Advanced stem separation and slicing tool - separate audio into stems (drums, bass, vocals, other) then slice each stem independently.

### Main Dialog

**Shortcut:** `Global:Paketti:Paketti StemSlicer Dialog...` ⌨️

**Menu:** `Main Menu:Tools:Paketti:StemSlicer:Paketti StemSlicer...` 📋

Comprehensive stem separation interface with:
- AI-powered stem separation
- Per-stem slice control
- BPM detection
- Automatic instrument creation
- Pattern writing

**Stem Separation:**
- Drums
- Bass
- Vocals
- Other (everything else)

**Process:**
1. Select sample
2. AI separates into 4 stems
3. Each stem gets own instrument
4. Optional: Auto-slice each stem
5. Optional: Write to pattern

### Output Management

**Shortcut:** `Global:Paketti:Open Last StemSlicer Output...` ⌨️

**Menu:** `Main Menu:Tools:Paketti:StemSlicer:Open Last StemSlicer Output...` 📋

Opens folder containing last stem separation output. Quick access to:
- Separated stem WAV files
- Slice data
- Processing logs

### Use Cases

**Remixing:**
- Separate full mix into stems
- Rearrange individual elements
- Create new arrangements

**Sampling:**
- Extract drums from full mix
- Isolate vocals
- Get bass/melodic content

**DJing:**
- Create instant acapellas
- Extract drum breaks
- Build mashup stems

---

## Sample FX Chain Slicer

**Source:** `PakettiSampleFXChainSlicer.lua` | **Features:** 2

Applies Sample FX Chain to individual slices, rendering each slice with effects - create processed drumkits from single breakbeat.

### Features

**Shortcuts:** (2 main operations)
- Slice processing with FX chain
- Batch render slices

**Process:**
1. Create slices on sample
2. Add Sample FX Chain to instrument
3. Run FX Chain Slicer
4. Each slice rendered with FX
5. New samples created
6. Original untouched

**Use Cases:**
- Apply reverb to each drum hit independently
- Process slices with different FX
- Create variations from one source
- Destructive FX application per slice

**Output:**
- New samples per slice
- All in same instrument
- Keymapped chromatically
- Original preserved

---

# Utility Tools

## Steppers

**Source:** `PakettiSteppers.lua` | **Features:** 18+

Advanced control over Renoise's Sample Modulation Steppers (Pitch, Volume, Cutoff, Resonance, Drive, Panning).

### Main Dialog

**Shortcut:** `Global:Paketti:Paketti Steppers Dialog...` ⌨️

Comprehensive stepper management interface with visual step editing, preset loading, randomization, and real-time preview.

### Show/Hide Steppers

**Shortcuts:**
- `Global:Paketti:Show/Hide PitchStep on Selected Instrument` ⌨️
- `Global:Paketti:Show/Hide VolumeStep on Selected Instrument` ⌨️
- `Global:Paketti:Show/Hide CutoffStep on Selected Instrument` ⌨️
- `Global:Paketti:Show/Hide ResonanceStep on Selected Instrument` ⌨️
- `Global:Paketti:Show/Hide DriveStep on Selected Instrument` ⌨️
- `Global:Paketti:Show/Hide PanningStep on Selected Instrument` ⌨️

**Menu:** `Instrument Box:Paketti:Steppers:Show Selected Instrument X Stepper` 📋 (all variants)

Toggles visibility of specific stepper on current instrument. Quick access to specific modulation.

### Reset All Steppers

**Shortcut:** `Global:Paketti:Reset All Steppers` ⌨️

Resets all stepper values across all instruments to neutral position.

### Clear Stepper

**Shortcuts:** `Global:Paketti:Clear X Steps` ⌨️ (for each stepper type)

**Menu:** `Sample Modulation Matrix:Paketti:Clear X Steps` 📋

Clears all step values for specific stepper type (Pitch/Volume/Cutoff/etc).

### PitchStepper Operations

**Demo:**
- `Global:Paketti:PitchStepper Demo` ⌨️

**Modify Shortcuts:**
- `Global:Paketti:Modify PitchStep Steps (Random)` ⌨️
- `Global:Paketti:Modify PitchStep Steps (Octave Up, Octave Down)` ⌨️
- `Global:Paketti:Modify PitchStep Steps (Octave Up+2, Octave Down-2)` ⌨️
- `Global:Paketti:Modify PitchStep Steps (Hard Detune)` ⌨️
- `Global:Paketti:Modify PitchStep Steps (Minor Flurry)` ⌨️
- `Global:Paketti:Clear PitchStep Steps` ⌨️

**Random:**
- Randomizes all pitch steps
- Creates unpredictable melodies
- Great for happy accidents

**Octave Up/Down:**
- Alternates between +12 and -12 semitones
- Classic arpeggio pattern
- Clean octave jumps

**Octave Up+2/Down-2:**
- Wider pitch range (±24 semitones)
- Two-octave arpeggios
- Dramatic pitch movement

**Hard Detune:**
- ±0.05 semitones * 64 steps
- Analog-style detuning
- Chorus/doubling effect

**Minor Flurry:**
- ±0.015 semitones * 64 steps
- Subtle pitch variation
- Humanization

### Use Cases

**Rhythmic Modulation:**
- Volume stepper for side-chain effect
- Panning stepper for auto-pan
- Cutoff stepper for rhythmic filtering

**Melodic Generation:**
- Pitch stepper for arpeggios
- Random pitch for generative melodies
- Octave patterns for basslines

**Sound Design:**
- Drive stepper for rhythmic distortion
- Resonance stepper for filter sweeps
- Combined steppers for complex modulation

---

## Frame Calculator

**Source:** `PakettiFrameCalculator.lua` | **Features:** 32

Comprehensive timing calculator - displays frame counts, song length, pattern timing, and cursor position in frames/time.

### Frame Calculator Dialog

**Shortcut:** `Global:Paketti:Frame Calculator Dialog` ⌨️

**Menu:**
- `Pattern Matrix:Paketti:Frame Calculator Dialog` 📋
- `Pattern Sequencer:Paketti:Frame Calculator Dialog` 📋
- `Pattern Editor:Paketti:Frame Calculator Dialog` 📋
- `Mixer:Paketti:Frame Calculator Dialog` 📋

Visual calculator with real-time display:
- BPM ↔ frames conversion
- Pattern length in frames
- Sequence length
- Cursor position timing

### Pattern Frame Info

**Shortcut:** `Global:Paketti:Show Pattern Frame Info` ⌨️

**Menu:**
- `Pattern Matrix:Paketti:Show Pattern Frame Info` 📋
- `Pattern Sequencer:Paketti:Show Pattern Frame Info` 📋
- `Pattern Editor:Paketti:Show Pattern Frame Info` 📋
- `Mixer:Paketti:Show Pattern Frame Info` 📋

Displays frame count for current pattern in status bar.

### Sequence Frame Info

**Shortcut:** `Global:Paketti:Show Sequence Frame Info` ⌨️

**Menu:**
- `Pattern Matrix:Paketti:Show Sequence Frame Info` 📋
- `Pattern Sequencer:Paketti:Show Sequence Frame Info` 📋
- `Pattern Editor:Paketti:Show Sequence Frame Info` 📋
- `Mixer:Paketti:Show Sequence Frame Info` 📋

Displays frame count for current sequence position in status bar.

### Pattern to Line Frame Info

**Shortcut:** `Global:Paketti:Show Pattern to Line Frame Info` ⌨️

**Menu:** `Pattern Editor:Paketti:Show Pattern to Line Frame Info` 📋

Shows frame count from pattern start to cursor line.

### Song to Line Frame Info

**Shortcut:** `Global:Paketti:Show Song to Line Frame Info` ⌨️

**Menu:** `Pattern Editor:Paketti:Show Song to Line Frame Info` 📋

Shows frame count from song start to cursor line - absolute position in frames.

### Song Length

**Shortcuts:**
- `Global:Paketti:Show Song Length` ⌨️ - Status bar display
- `Global:Paketti:Show Song Length Dialog` ⌨️ - Full dialog

**Menu:**
- `Pattern Matrix:Paketti:Show Song Length` 📋
- `Pattern Sequencer:Paketti:Show Song Length` 📋
- `Pattern Editor:Paketti:Show Song Length` 📋
- `Mixer:Paketti:Show Song Length` 📋

Calculates and displays total song length in:
- Frames
- Samples
- Seconds
- Minutes:seconds

### Live Update Modes

**Shortcuts:**
- `Global:Paketti:Toggle Frame Calculator Live Update (Song to Line)` ⌨️
- `Global:Paketti:Toggle Frame Calculator Live Update (Pattern to Line)` ⌨️
- `Global:Paketti:Toggle Frame Calculator Live Update (Both)` ⌨️

**Live Updates:**
- Continuously displays frame position
- Updates as cursor moves
- Song to Line: From song start
- Pattern to Line: From pattern start
- Both: Both displays simultaneously

### Use Cases

**Video Sync:**
- Calculate exact frame timing
- Match Renoise to video frames
- Frame-accurate cuts/edits

**Sample-Accurate Editing:**
- Know exact sample position
- Precise loop point calculation
- Subsample accuracy

**Timing Analysis:**
- Measure pattern lengths
- Calculate section durations
- Plan arrangement timing

---

## Launch App

**Source:** `PakettiLaunchApp.lua` | **Features:** 28+

Open samples in external applications with automatic temp file creation and Smart Folder integration.

### Smart/Backup Folders

**Save Single Sample (01-10):**
- `Global:Paketti:Save Sample to Smart/Backup Folder 1-10` ⌨️

**Menu:**
- `Sample Navigator:Paketti:Save:Save Sample to Smart/Backup Folder 1-10` 📋
- `Sample Mappings:Paketti:Save:Save Sample to Smart/Backup Folder 1-10` 📋
- `Sample Editor:Paketti:Save:Save Sample to Smart/Backup Folder 1-10` 📋

**Save All Samples (01-10):**
- `Global:Paketti:Save All Samples to Smart/Backup Folder 1-10` ⌨️

**Menu:**
- `Sample Navigator:Paketti:Save:Save All Samples to Smart/Backup Folder 1-10` 📋
- `Sample Mappings:Paketti:Save:Save All Samples to Smart/Backup Folder 1-10` 📋
- `Instrument Box:Paketti:Save:Save All Samples to Smart/Backup Folder 1-10` 📋

**Smart Folders:**
- 10 configurable quick-save locations
- Instant backup workflow
- Project organization
- Sample library building

### External Editor Integration

**Configure:**
- `Global:Paketti:Configure Launch App Selection...` ⌨️

**Launch App Features:**
- Open selected sample in external app
- Open sample range/selection
- Automatic temp file creation
- Monitor for changes
- Auto-reload on save

**Supported Contexts:**
- Sample Navigator
- Sample Editor
- Sample Mappings
- Instrument Box

**Use Cases:**
- Edit in Audacity
- Process in iZotope RX
- Spectral edit in external app
- Destructive processing workflow

---

## XMLizer (Custom LFO System)

**Source:** `PakettiXMLizer.lua` | **Features:** 27

Advanced LFO envelope management with custom presets, XML editing, resolution doubling/halving, and transformation operations.

### Custom LFO Presets

**Apply Presets (01-16):**
- `Global:Paketti:Apply Custom LFO Preset 01-16` ⌨️

**Menu:**
- `Main Menu:Tools:Paketti:Instruments:Custom LFO Envelopes:Apply Custom LFO Preset 01-16` 📋
- `DSP Device:Paketti:Custom LFO Envelopes:Apply Custom LFO Preset 01-16` 📋

**Store Presets (01-16):**
**Menu:**
- `Main Menu:Tools:Paketti:Instruments:Custom LFO Envelopes:Store Current LFO to Slot 01-16` 📋
- `DSP Device:Paketti:Custom LFO Envelopes:Store Current LFO to Slot 01-16` 📋

**Shortcuts:**
- `Global:Paketti:Store Current LFO to Slot 01-16` ⌨️

**Load Presets (01-16):**
**Menu:**
- `Main Menu:Tools:Paketti:Instruments:Custom LFO Envelopes:Load LFO from Slot 01-16` 📋
- `DSP Device:Paketti:Custom LFO Envelopes:Load LFO from Slot 01-16` 📋

**Shortcuts:**
- `Global:Paketti:Load LFO from Slot 01-16` ⌨️

**Preset System:**
- 16 storable LFO slots
- Quick recall presets
- Build custom LFO library
- Share between projects

### LFO Resolution

**Shortcuts:**
- `Global:Paketti:Double LFO Envelope Resolution` ⌨️
- `Global:Paketti:Halve LFO Envelope Resolution` ⌨️

**Double Resolution:**
- Increases point density
- More detailed modulation
- Smoother curves

**Halve Resolution:**
- Reduces point density
- Simpler envelopes
- Stepped modulation

### LFO External Editor

**Shortcuts:**
- `Global:Paketti:Toggle LFO/Device External Editor` ⌨️
- `Global:Paketti:List Devices with External Editor Support` ⌨️
- `Global:Paketti:Quick LFO Custom Editor` ⌨️

**External Editor:**
- Edit LFO XML directly
- Advanced curve control
- Mathematical precision
- Power-user features

### LFO Envelope Transformations

**Scale Operations:**
- `Global:Paketti:Custom LFO Envelope Scale 50%` ⌨️
- `Global:Paketti:Custom LFO Envelope Scale 150%` ⌨️
- `Global:Paketti:Custom LFO Envelope Scale FLIP` ⌨️
- `Global:Paketti:Custom LFO Envelope Scale Invert` ⌨️
- `Global:Paketti:Custom LFO Envelope Scale Mirror` ⌨️
- `Global:Paketti:Custom LFO Envelope Scale Slapback` ⌨️

**Adjustment Operations:**
- `Global:Paketti:Custom LFO Envelope Scale Center` ⌨️
- `Global:Paketti:Custom LFO Envelope Scale Min` ⌨️
- `Global:Paketti:Custom LFO Envelope Scale Max` ⌨️

**Randomization:**
- `Global:Paketti:Custom LFO Envelope Scale Randomize` ⌨️
- `Global:Paketti:Custom LFO Envelope Scale Humanize` ⌨️

**Scale 50%/150%:**
- Reduces/increases amplitude
- Subtle/extreme modulation

**FLIP:**
- Reverses envelope horizontally
- Backward modulation

**Invert/Mirror:**
- Flips envelope vertically
- Negative → positive, positive → negative

**Slapback:**
- Creates delay/echo pattern in envelope
- Rhythmic modulation

**Center/Min/Max:**
- Centers envelope around midpoint
- Sets all to minimum
- Sets all to maximum

**Randomize:**
- Random point positions
- Chaotic modulation
- Experimental textures

**Humanize:**
- Subtle random variations
- Natural feel
- Anti-robotic

### LFO Envelope Editor Dialog

**Shortcut:** `Global:Paketti:LFO Envelope Editor Dialog` ⌨️

Visual LFO editor with:
- Point-by-point control
- Transformation presets
- Real-time preview
- XML export

### Send Reverser

**Shortcut:** `Global:Paketti:Send Reverser` ⌨️

Special utility - reverses send device routing behavior (keep/mute toggle).

### Use Cases

**Modulation Design:**
- Build custom LFO shapes
- Create modulation presets library
- Complex rhythmic modulation

**Sound Transformation:**
- Apply mathematical transformations
- Generate unpredictable modulation
- Precision control

**Preset Management:**
- Store favorite LFO shapes
- Quick recall complex envelopes
- Share between projects

---

## Theme Selector

**Source:** `PakettiThemeSelector.lua` | **Features:** 3

Comprehensive Renoise theme management with favorites system and random theme selection.

### Open Theme Selector Dialog

**Shortcut:** `Global:Paketti Theme Selector:Open Paketti Theme Selector Dialog...` ⌨️

Visual theme browser with:
- Preview all installed themes
- Mark favorites
- Apply themes instantly
- Organize theme collection
- Search/filter themes

### Pick Random Theme (All)

**Shortcut:** `Global:Paketti Theme Selector:Pick a Random Theme (All)` ⌨️

Randomly selects and applies any theme from your entire installed theme collection. Perfect for:
- Discovering forgotten themes
- Daily inspiration
- Breaking creative ruts
- Finding new color schemes

### Pick Random Theme (Favorites)

**Shortcut:** `Global:Paketti Theme Selector:Pick a Random Theme (Favorites)` ⌨️

Randomly selects and applies a theme from your favorites list. Uses your curated collection of preferred themes.

**Favorites System:**
- Mark themes as favorites in dialog
- Build curated theme collection
- Quick random selection from best themes
- Organize preferred color schemes

### Use Cases

**Visual Variety:**
- Change theme mood by project
- Random theme for fresh perspective
- Test UI readability across themes

**Workflow Organization:**
- Different themes for different projects
- Visual project identification
- Mood-based theme selection

---
---

# Audio Processing & Effects

Complete guide to Paketti's audio processing, silence removal, channel inversion, phase manipulation, and creative effects.

---

## Documentation Source Files

**Last Updated:** 2025-11-28

| File | Keybindings | MIDI Mappings | Menu Entries | Coverage |
|------|-------------|---------------|--------------|----------|
| `PakettiAudioProcessing.lua` | 14 | 2 | 0 | ✅ Complete |

---

## Table of Contents
1. [Silence Processing](#silence-processing)
2. [Channel Inversion](#channel-inversion)
3. [DC Offset Removal](#dc-offset-removal)
4. [Fade In/Out](#fade-inout)
5. [Phase Manipulation](#phase-manipulation)
6. [Audio Diff](#audio-diff)
7. [Creative Effects](#creative-effects)
8. [Audio Processing Tools Dialog](#audio-processing-tools-dialog)

---

## Silence Processing

### Strip Silence
**Shortcut:** `Global:Paketti:Strip Silence` ⌨️ 🎹 📋

**MIDI:** `Paketti:Strip Silence` 🎹

**Menu:** `Sample Editor:Paketti:Process:Strip Silence` 📋
**Menu:** `Sample Navigator:Paketti:Process:Strip Silence` 📋
**Menu:** `Sample Mappings:Paketti:Process:Strip Silence` 📋

**Intelligent Silence Removal:**
- Analyzes sample for silence at beginning and end
- Uses user-configurable threshold (set in Paketti Preferences)
- Creates new trimmed sample
- **Preserves all sample properties** (loop points, transpose, volume, etc.)
- **Progress dialog** with cancellation support
- Yields every 10k frames for responsiveness

**Use Cases:**
- **Clean recordings** - Remove mic noise
- **Tight loops** - Remove unwanted silence
- **Sample library cleanup** - Batch processing
- **File size reduction** - Smaller samples

**Threshold:** Set in Audio Processing Tools Dialog or Paketti Preferences

---

### Strip Silence from All Samples
Available in **Audio Processing Tools Dialog**

Batch processes all samples in instrument:
- Only processes samples with >50 frames of silence
- Skips already-clean samples
- Progress shows which sample is being processed
- Smart filtering to avoid unnecessary processing

---

### Move Beginning Silence to End
**Shortcut:** `Global:Paketti:Move Beginning Silence to End` ⌨️ 🎹 📋

**MIDI:** `Paketti:Move Beginning Silence to End` 🎹

**Menu:** `Sample Editor:Paketti:Process:Move Beginning Silence to End` 📋
**Menu:** `Sample Navigator:Paketti:Process:Move Beginning Silence to End` 📋
**Menu:** `Sample Mappings:Paketti:Process:Move Beginning Silence to End` 📋

**Creative Silence Relocation:**
- Finds silence at beginning
- Moves audio to start of buffer
- Places silence at end
- **Preserves sample length** (unlike Strip Silence)

**Perfect for:**
- **Loop creation** - Audio starts immediately
- **Tight triggering** - No latency from silence
- **Keeping sample length** - When exact length matters (e.g., beat-synced)

---

### Move Beginning Silence to End for All Samples
**Shortcut:** `Global:Paketti:Move Beginning Silence to End for All Samples` ⌨️ 📋

**Menu:** `Sample Editor:Paketti:Process:Move Beginning Silence to End for All Samples` 📋
**Menu:** `Sample Navigator:Paketti:Process:Move Beginning Silence to End for All Samples` 📋
**Menu:** `Sample Mappings:Paketti:Process:Move Beginning Silence to End for All Samples` 📋

Batch processes entire instrument:
- Only processes samples with >50 frames of initial silence
- Progress dialog with per-sample feedback
- Smart filtering for efficiency

---

## Channel Inversion

### Invert Sample
**Shortcuts:**
- `Global:Paketti:Invert Sample` ⌨️ 📋
- `Sample Editor:Paketti:Invert Sample` ⌨️ 📋

**Menu:** `Sample Editor:Paketti:Process:Invert Sample` 📋
**Menu:** `Sample Navigator:Paketti:Process:Invert Sample` 📋
**Menu:** `Sample Mappings:Paketti:Process:Invert Sample` 📋

Inverts entire sample (flips waveform upside down). Works with mono and stereo.

---

### Invert Left Channel
**Shortcut:** `Sample Editor:Paketti:Invert Left Channel` ⌨️ 📋

**Menu:** `Sample Editor:Paketti:Process:Invert Left Channel` 📋
**Menu:** `Sample Navigator:Paketti:Process:Invert Left Channel` 📋
**Menu:** `Sample Mappings:Paketti:Process:Invert Left Channel` 📋

Inverts only the left channel of stereo sample.

**Use Cases:**
- Phase alignment
- Side-chain preparation
- Creative stereo effects

---

### Invert Right Channel
**Shortcut:** `Sample Editor:Paketti:Invert Right Channel` ⌨️ 📋

**Menu:** `Sample Editor:Paketti:Process:Invert Right Channel` 📋
**Menu:** `Sample Navigator:Paketti:Process:Invert Right Channel` 📋
**Menu:** `Sample Mappings:Paketti:Process:Invert Right Channel` 📋

Inverts only the right channel of stereo sample.

---

### Invert Random Samples in Instrument
**Shortcut:** `Global:Paketti:Invert Random Samples in Instrument` ⌨️ 📋

**Menu:** `Sample Editor:Paketti:Process:Invert Random Samples in Instrument` 📋
**Menu:** `Sample Navigator:Paketti:Process:Invert Random Samples in Instrument` 📋
**Menu:** `Sample Mappings:Paketti:Process:Invert Random Samples in Instrument` 📋

**Creative Randomization:**
- 50% chance each sample will be inverted
- Perfect for drumkits
- Creates phase variation
- Adds subtle character differences

---

### Invert Right, Sum Mono
**Shortcut:** `Sample Editor:Paketti:Invert Right, Sum Mono` ⌨️

**Mid-Side Processing Helper:**
1. Inverts right channel
2. Sums L+R to mono
3. Extracts side information

**Use Cases:**
- Mid-side analysis
- Stereo width extraction
- Phase cancellation experiments

---

## DC Offset Removal

### Recursive Remove DC Offset
**Shortcut:** `Sample Editor:Process:Recursive Remove DC Offset` ⌨️

**High-Pass Filter Algorithm:**
- Removes DC offset using recursive filter
- Cutoff: -3dB @ 40Hz (configurable in code)
- Alternative cutoffs available: 30Hz, 20Hz
- Processes all channels

**Technical:** Uses `R = 1 - (250 / samplerate)` formula

---

### Recursive Remove DC Offset Random Times
**Shortcut:** `Sample Editor:Process:Recursive Remove DC Offset Random Times` ⌨️

Runs recursive DC offset **1-50 times randomly**:
- Each pass removes more low-end
- Creates increasingly thin sound
- Unpredictable results (1-50 iterations)

---

### Max Amp DC Offset Kick Generator
**Shortcut:** `Global:Paketti:Max Amp DC Offset Kick Generator` ⌨️ 📋

**Menu:** `Sample Editor:Paketti:Process:Max Amp DC Offset Kick Generator` 📋

**Instant Kick Drum Synthesizer:**
1. Creates new instrument with Paketti template
2. Generates 16,800-frame sample at maximum amplitude
3. Runs recursive DC offset 1-50 times randomly
4. Sets transpose to -36 (C-4 = sub-bass kick)
5. Names it "Max Amp DC Offset Kick"

**Result:** Unique kick drum every time!

**Perfect for:**
- **808-style kicks** - Deep sub-bass
- **Experimental percussion** - Unpredictable character
- **Quick drums** - Instant usable kick
- **Sound design starting point**

---

## Fade In/Out

### 15 Frame Fade In & Fade Out
**Shortcut:** `Sample Editor:Paketti:15 Frame Fade In & Fade Out` ⌨️ 📋

**Menu:** `Sample Editor:Paketti:Process:15 Frame Fade In & Fade Out` 📋

**Anti-Click Fading:**
- Applies 15-frame fade-in at start
- Applies 15-frame fade-out at end
- Linear fade curves
- Removes clicks/pops
- Works with all sample types

**Frame Count:** 15 frames = ~0.34ms @ 44.1kHz

**Use Cases:**
- **Remove clicks** - Clean sample start/end
- **Loop preparation** - Smooth loop points
- **Sample cleanup** - Professional polish

---

## Phase Manipulation

### Phase Inversion
**Shortcut:** `Sample Editor:Paketti:Phase Inversion` ⌨️

**Duplicate + Invert Mix:**
1. Duplicates sample
2. Inverts original
3. Keeps both samples

**Use Cases:**
- Phase cancellation experiments
- Creating "negative" of sound
- Preparing for audio diff

---

### Phase Inversion & Audio Diff
**Shortcut:** `Sample Editor:Paketti:Phase Inversion & Audio Diff` ⌨️

Combined operation:
1. Phase inverts sample
2. Creates audio diff with duplicate
3. Results in phase-cancelled difference signal

---

## Audio Diff

### Audio Diff
**Shortcut:** `Sample Editor:Paketti:Audio Diff` ⌨️

**Difference Signal Extraction:**
1. Duplicates sample
2. Subtracts duplicate from original
3. Normalizes result to prevent clipping

**Mathematical:** `output = sample - duplicate`

**Use Cases:**
- **Isolate changes** - Hear only what changed after processing
- **Compare versions** - Find differences between takes
- **Extract artifacts** - Hear only the processing artifacts
- **Sound design** - Create complementary signals

---

## Creative Effects

### Pitch Shift
**Shortcut:** `Sample Editor:Paketti:Pitch Shift` ⌨️

Shifts sample by 20 frames:
- Simple frame-offset pitch shift
- Creates chorus-like artifacts
- No interpolation (aliasing may occur)

---

### Pitch Shift & Audio Diff
**Shortcut:** `Sample Editor:Paketti:Pitch Shift & Audio Diff` ⌨️

Combines pitch shift with audio diff for creative effects.

---

### Clip Bottom of Waveform
**Shortcut:** `Sample Editor:Paketti:Clip bottom of waveform` ⌨️

Modulation effect that clips/shapes the waveform:
- Creates harmonic distortion
- Asymmetric waveform shaping
- Unique tonal character

---

### Modulate & Audio Diff
**Shortcut:** `Sample Editor:Paketti:Modulate & Audio Diff` ⌨️

Combines modulation with audio diff.

---

### ProTracker MOD Modulation
**Shortcut:** `Sample Editor:Paketti:Protracker MOD Modulation...` ⌨️

**Classic Amiga ProTracker Effect:**
- Opens dialog with Mod Speed slider (-128 to +127)
- Applies time-varying modulation using ProTracker's 64-value modulation table
- Creates vibrato/chorus-like effects
- **Speed 0** = no effect (must be non-zero)
- Press Enter in dialog to process

**Historical:** Authentic ProTracker algorithm from Amiga era!

**Use Cases:**
- **Retro effects** - Authentic Amiga sound
- **Vibrato** - Speed controls depth/rate
- **Chorus** - Subtle modulation (low speeds)
- **Weird textures** - High speeds create artifacts

---

## Audio Processing Tools Dialog

**Shortcut:** `Global:Paketti:Paketti Audio Processing Tools Dialog...` ⌨️ 📋

**Menu:** `Main Menu:Tools:Paketti:Xperimental/WIP:Audio Processing Tools...` 📋

**Comprehensive Audio Processing Interface** with:

### Silence Threshold Controls
- **Strip Silence Threshold** - Adjustable slider (0.0-1.0)
- **Move Silence Threshold** - Separate threshold for move operation
- Visual percentage display

### Buttons Available:
1. **Strip Silence using Threshold** - Processes selected sample
2. **Move Beginning Silence to End** - Relocates silence
3. **Strip Silence from All Samples** - Batch process instrument

### DC Offset Controls
- **Recursive DC Offset** - Single pass
- **Run DC Offset x times** - Slider for 1-500 iterations
- **Run DC Offset 1-50 times (randomized)** - Random iterations
- **Max Amp DC Offset Kick Generator** - Create kick drum

### Channel Operations
- **Invert Left Channel**
- **Invert Right Channel**
- **Invert Sample** (both channels)

### Conversion
- **Mono→Stereo** - Duplicate to both channels
- **Mono→Stereo (Blank L)** - Right only + blank left
- **Mono→Stereo (Blank R)** - Left only + blank right

### Normalization
- **Normalize Sample** - Quick normalize button

### Phase & Creative
- **Phase Inversion** - Invert and subtract
- **Phase Inversion & Audio Diff** - Combined
- **Invert Right, Sum Mono** - Mid-side extraction
- **Pitch Shift** - Frame-offset pitch shift (with valuebox)
- **Pitch Shift & Audio Diff** - Combined
- **Clip bottom of waveform** - Modulation distortion
- **Modulate & Audio Diff** - Combined
- **Audio Diff** - Difference extraction

### Resampling Section
- **Sample Rate Slider** - 225 Hz to 192 kHz
- **Halve Sample Rate** button
- **Double Sample Rate** button
- **Resample to 44.1 kHz** button
- **Bit Depth Switch** - 8/16/24/32 bit
- **Process** button - Applies conversion

**Sample Info Display:**
- Shows current sample name
- Shows Hz/bit depth/frame count
- Updates automatically on sample change

**This dialog stays open** - Process multiple samples without reopening!

---

## Diagonal Line to Sample

**Shortcut:** `Global:Paketti:Diagonal Line to 16800 length Sample` ⌨️

**Waveform Generator:**
- Creates new instrument
- Generates 16,800-frame sample
- Diagonal line waveform (1.0 to -1.0)
- 44.1kHz, 16-bit, mono

**Use Cases:**
- **Sound design starting point**
- **Test signals**
- **Modulation sources** (via sampling)
- **Wavetable creation**


# Pattern Editor Features

This section covers Pattern Editor features including time signatures, keyboard velocity, BPM control, and pattern organization.

---

## Documentation Source Files

**Last Updated:** 2025-11-28

This documentation was generated by analyzing the following Paketti Lua source files:

| File | Bindings Found | Coverage | Notes |
|------|----------------|----------|-------|
| `PakettiRequests.lua` | 470 bindings | ✅ Complete | All pattern editor features documented |
| `PakettiTkna.lua` | ~150 bindings | ✅ Complete | Sample controls documented in SamplesAndInstruments.md |

**Features Documented:**
- Time signature shortcuts (3/4, 6/8, 7/8)
- Keyboard velocity controls (±16)
- BPM controls (±5)
- Pattern resizing (batch + individual)
- Pattern transformation (rotate, reverse, flip, interpolate)
- Column operations (wipe, adjust, squeeze, invert)
- Automation deletion (track/pattern/song scope)
- Effect column operations (wipe by scope)
- Humanization (dialog + quick presets)
- Note-Off randomization
- Flood fill operations
- Group navigation
- Send track population
- Random playback position

**Re-scraping Guide:** Search for `jenokiSystem`, `resize_all_non_empty_patterns`, `interpolat`, `humanize`, `wipe_`, `delete_automation`, `flood`, `squeeze` patterns.

---

## Table of Contents
1. [Time Signatures](#time-signatures)
2. [Keyboard & Velocity Control](#keyboard--velocity-control)
3. [BPM Control](#bpm-control)
4. [Pattern Organization](#pattern-organization)
5. [Pattern Resizing](#pattern-resizing)
6. [Pattern Transformation](#pattern-transformation)
7. [Column Operations](#column-operations)
8. [Interpolation](#interpolation)
9. [Humanization](#humanization)
10. [Automation Operations](#automation-operations)
11. [Effect Column Operations](#effect-column-operations)
12. [Note Operations](#note-operations)
13. [Navigation & Playback](#navigation--playback)
14. [Track & Group Management](#track--group-management)
15. [Sample Controls](#sample-controls)

---

## Time Signatures

Paketti provides quick shortcuts for setting up common time signatures with appropriate pattern lengths and LPB settings.

### Set Time Signature 3/4 and 48 rows @ LPB 4
**Shortcut:** `Pattern Editor:Paketti:Set Time Signature 3/4 and 48 rows @ LPB 4`

Configures the current pattern for 3/4 time signature:
- **TPL (Ticks Per Line):** 3
- **LPB (Lines Per Beat):** 4
- **Metronome LPB:** 4
- **Metronome Beats Per Bar:** 3
- **Pattern Length:** 48 rows

*Perfect for waltzes and other 3/4 time music.*

---

### Set Time Signature 7/8 and 56 rows @ LPB 8
**Shortcut:** `Pattern Editor:Paketti:Set Time Signature 7/8 and 56 rows @ LPB 8`

Configures the current pattern for 7/8 time signature:
- **TPL:** 7
- **LPB:** 8
- **Metronome LPB:** 8
- **Metronome Beats Per Bar:** 7
- **Pattern Length:** 56 rows

*Useful for progressive rock, jazz, and experimental music.*

---

### Set Time Signature 6/8 and 48 rows @ LPB 8
**Shortcut:** `Pattern Editor:Paketti:Set Time Signature 6/8 and 48 rows @ LPB 8`

Configures the current pattern for 6/8 time signature:
- **TPL:** 6
- **LPB:** 8
- **Metronome LPB:** 8
- **Metronome Beats Per Bar:** 6
- **Pattern Length:** 48 rows

*Common in folk music and compound time signatures.*

---

## Keyboard & Velocity Control

### Computer Keyboard Velocity Adjustment
**Shortcuts:**
- `Global:Paketti:Computer Keyboard Velocity (-16)` - Decrease by 16
- `Global:Paketti:Computer Keyboard Velocity (+16)` - Increase by 16

Quickly adjust the velocity/volume of notes entered via computer keyboard. Range adjustments help you create dynamics without reaching for sliders.

---

## BPM Control

### BPM Adjustment (±5)
**Shortcuts:**
- `Global:Paketti:BPM Decrease (-5)` - Decrease by 5 BPM
- `Global:Paketti:BPM Increase (+5)` - Increase by 5 BPM

Rapid BPM changes in larger increments than the default ±1. Useful for finding the right tempo range quickly.

---

## Pattern Organization

### Selection in Pattern to Group
**Shortcut:** `Pattern Editor:Paketti:Selection in Pattern to Group`

Creates a group track from your current pattern selection. All selected tracks are moved into a new group track, which is inserted after the selection.

**How it works:**
1. Select multiple tracks in the pattern editor (click and drag across track headers, or use pattern selection)
2. Trigger the shortcut
3. A new group is created at the end of your selection
4. All selected tracks are moved into this group
5. Master and Send tracks are automatically excluded

*Useful for organizing your project by grouping related tracks (drums, bass, synths, etc.).*

---

## Sample Exit Loop

### Selected Sample Exit Loop Note-Off
**Shortcuts:**
- `Global:Paketti:Selected Sample Exit Loop Note-Off Toggle` - Toggle on/off
- `Global:Paketti:Selected Sample Exit Loop Note-Off Off` - Force off
- `Global:Paketti:Selected Sample Exit Loop Note-Off On` - Force on

Controls whether the sample continues playing its loop after a note-off is received, or if it exits the loop and plays to the end of the sample.

**Use cases:**
- **Loop Release ON:** For sustained notes (pads, strings) where you want the natural tail to play after releasing the key
- **Loop Release OFF:** For percussive sounds where you want the loop to continue until explicitly stopped

---

## Additional Sample Controls

### Sample Autofade
**Shortcuts:**
- `Global:Paketti:Set Selected Sample Autofade On` - Enable autofade
- `Global:Paketti:Set Selected Sample Autofade Off` - Disable autofade

Quick shortcuts to enable/disable autofade without navigating through sample properties.

---

### Fine Sample Control (±5 increments)
**Shortcuts:**
- `Global:Paketti:Set Selected Sample Finetune (-5)` / `(+5)` - Larger finetune adjustments
- `Global:Paketti:Set Selected Sample Volume (-0.05)` / `(+0.05)` - 5% volume steps
- `Global:Paketti:Set Selected Sample Panning (-0.05)` / `(+0.05)` - 5% panning steps
- `Global:Paketti:Set Selected Sample Transpose (-5)` / `(+5)` - Quick 5-semitone jumps

Alternative increment sizes for faster sample parameter adjustments. Complements the standard ±1/±0.01 controls.

---

## Sample Modulation & FX Assignment

### Assign Modulation Set to Selected Sample
**Function:** `selectedSampleMod(number)`

Assigns a specific modulation set (0-N) to the currently selected sample. If you have multiple modulation sets configured in your instrument, this allows quick switching between them.

**Values:**
- **0:** No modulation set
- **1-N:** Modulation set index (depends on how many you've created)

*Note: Shortcuts for these can be added via Paketti's customization system.*

---

### Assign FX Chain to Selected Sample
**Function:** `selectedSampleFX(number)`

Assigns a specific Sample FX Chain (0-N) to the currently selected sample. Useful for having different FX chains for different samples within the same instrument.

**Values:**
- **0:** No FX chain
- **1-N:** FX chain index (depends on how many you've created)

*Note: Shortcuts for these can be added via Paketti's customization system.*

---

### Assign Modulation Set to All Samples
**Function:** `selectedInstrumentAllMod(number)`

Applies the same modulation set index to ALL samples in the currently selected instrument. Useful for bulk configuration.

---

### Assign FX Chain to All Samples
**Function:** `selectedInstrumentAllFX(number)`

Applies the same FX chain index to ALL samples in the currently selected instrument. Useful for bulk configuration.

---

## Pattern Resizing

### Resize All Non-Empty Patterns
**Shortcuts:**
- `Global:Paketti:Resize all non-empty Patterns to current Pattern length` ⌨️ 📋
- `Global:Paketti:Resize all non-empty Patterns to 012` ⌨️ 📋
- `Global:Paketti:Resize all non-empty Patterns to 016` ⌨️ 📋
- `Global:Paketti:Resize all non-empty Patterns to 024` ⌨️ 📋
- `Global:Paketti:Resize all non-empty Patterns to 032` ⌨️ 📋
- `Global:Paketti:Resize all non-empty Patterns to 048` ⌨️ 📋
- `Global:Paketti:Resize all non-empty Patterns to 064` ⌨️ 📋
- `Global:Paketti:Resize all non-empty Patterns to 096` ⌨️ 📋
- `Global:Paketti:Resize all non-empty Patterns to 128` ⌨️ 📋
- `Global:Paketti:Resize all non-empty Patterns to 192` ⌨️ 📋
- `Global:Paketti:Resize all non-empty Patterns to 256` ⌨️ 📋
- `Global:Paketti:Resize all non-empty Patterns to 384` ⌨️ 📋
- `Global:Paketti:Resize all non-empty Patterns to 512` ⌨️ 📋

**Menu:** `Pattern Editor:Paketti:Pattern:Resize all non-empty Patterns` (all sizes available) 📋
**Menu:** `Pattern Sequencer:Paketti:Resize all non-empty Patterns` (all sizes available) 📋

**Batch Pattern Length Adjustment:**
- Resizes ALL non-empty patterns in song to specified length
- **Skips empty patterns** (preserves empty slots)
- Useful for standardizing pattern lengths across project
- **Current pattern length** option matches all to currently selected pattern

**Use Cases:**
- **Song arrangement** - Make all verses/choruses same length
- **Grid alignment** - Standardize to 64/128 for easier arrangement
- **Genre conventions** - 64 rows for techno, 128 for breaks

---

### Pattern Resize and Fill
**Shortcuts:**
- `Global:Paketti:Pattern Resize and Fill 032` ⌨️ 📋
- `Global:Paketti:Pattern Resize and Fill 064` ⌨️ 📋
- `Global:Paketti:Pattern Resize and Fill 128` ⌨️ 📋
- `Global:Paketti:Pattern Resize and Fill 256` ⌨️ 📋
- `Global:Paketti:Pattern Resize and Fill 512` ⌨️ 📋

**Menu:** `Pattern Editor:Paketti:Pattern:Resize&Fill` (submenu) 📋
**Menu:** `Main Menu:Tools:Paketti:Pattern Editor:Resize&Fill` (submenu) 📋

**Intelligent Duplication:**
1. Resizes pattern to target length
2. **Loops/repeats existing content** to fill new space
3. Perfect for extending loops without copy/paste

**Example:** 16-row drum loop → Fill 128 = 8 repetitions

---

## Pattern Transformation

### Rotate Track Content
**Shortcut:** `Pattern Editor:Paketti:Rotate Track Content to SelectionStart First` ⌨️

**Circular Rotation:**
- Takes pattern content from `selection start` to `pattern end`
- Moves it to beginning of pattern
- Rest of content wraps around to end

**Use Case:** Adjust loop start point without rewriting pattern

---

### Reverse Notes in Selection
**Shortcut:** `Pattern Editor:Paketti:Reverse Notes in Selection` ⌨️ 📋

**Menu:** `Pattern Editor:Paketti:Note Columns:Reverse Notes in Selection` 📋
**Menu:** `Main Menu:Tools:Paketti:Pattern Editor:Reverse Notes in Selection` 📋

Reverses the order of all notes within selected area:
- Note pitches play backwards
- Timing preserved
- Columns/effects also reversed

**Use Cases:**
- **Retrograde melodies** - Classical composition technique
- **Reverse fills** - Backwards drum fills
- **Experimental** - Create mirror versions

---

### Interpolate Notes
**Shortcut:** `Pattern Editor:Paketti:Interpolate Notes` ⌨️

**Menu:** `Pattern Editor:Paketti:Note Columns:Interpolate Notes` 📋

**Smart Note Filling:**
- Finds first and last note in selection
- Fills intermediate rows with interpolated pitches
- Creates smooth pitch glides/arpeggios

**Example:**
```
Row 00: C-4
Row 16: (empty rows)
Row 32: C-5
```
Result: Chromatic scale from C-4 to C-5

---

### Flood Fill with Selection
**Shortcut:** `Pattern Editor:Paketti:Flood Fill with Selection` ⌨️

*(No direct menu entry - use "Flood Fill Note and Instrument" instead)*

**Loop Duplicator:**
1. Takes your selection
2. Repeats it until end of pattern
3. No gaps, continuous repetition

**Perfect for:**
- **Bass lines** - Repeat 4-bar loop
- **Percussion patterns** - Extend hi-hat pattern
- **Any loop** - Instant pattern filler

---

### Flood Fill from Current Row w/ AutoArp
**Shortcut:** `Pattern Editor:Paketti:Flood Fill from Current Row w/ AutoArp` ⌨️ 📋

**Menu:** `Pattern Editor:Paketti:Pattern:Flood Fill from Current Row w/ AutoArp` 📋

Advanced flood fill with auto-arpeggio insertion.

---

## Column Operations

### Delete/Clear/Wipe Operations
**Shortcuts:**
- `Pattern Editor:Paketti:Delete/Clear/Wipe Entire Row` ⌨️ - Clears all columns in current row
- `Pattern Editor:Paketti:Delete/Clear/Wipe Entire Row with EditStep` ⌨️ - Clear + advance by EditStep
- `Pattern Editor:Paketti:Delete/Clear/Wipe Selected Note Column` ⌨️ - Clear just the note column
- `Global:Paketti:Wipe All Columns of Selected Track` ⌨️ - Clear entire track in pattern

---

### Wipe Selection Columns
**Shortcuts (auto-generated for each column type):**
- `Pattern Editor:Paketti:Wipe Selection Volume Column` ⌨️
- `Pattern Editor:Paketti:Wipe Selection Panning Column` ⌨️
- `Pattern Editor:Paketti:Wipe Selection Delay Column` ⌨️
- `Pattern Editor:Paketti:Wipe Selection Sample FX Column` ⌨️

Sets selected column values to 0/empty.

---

### Adjust Selection Columns
**Format:** `Pattern Editor:Paketti:Adjust Selection [Column] Column (±X)` ⌨️

Available for **Volume, Panning, Delay, Sample FX** with multiple increment sizes.

**Example shortcuts:**
- `Adjust Selection Volume Column (+1)` - Increase by 1
- `Adjust Selection Volume Column (-10)` - Decrease by 10
- `Adjust Selection Panning Column (+16)` - Pan right
- `Adjust Selection Delay Column (-5)` - Earlier timing

---

### Squeeze Note Columns (Pattern)
**Shortcut:** `Global:Paketti:Squeeze Note Columns (Pattern)` ⌨️ 🎹

**MIDI:** `Paketti:Squeeze Note Columns (Pattern)` 🎹

**Smart Column Minimization:**
- Removes empty note columns
- Keeps only columns with content
- Makes pattern easier to read
- Reduces horizontal scrolling

---

### Invert Subcolumns
**Shortcuts:**
- `Pattern Editor:Paketti:Invert Note Column Subcolumns` ⌨️
- `Pattern Editor:Paketti:Invert Effect Column Subcolumns` ⌨️
- `Pattern Editor:Paketti:Invert All Subcolumns` ⌨️

Inverts the order of subcolumn values (mathematical inversion).

---

## Interpolation

### Interpolate Column Values
**Shortcuts:**
- `Pattern Editor:Paketti:Interpolate Column Values (Volume)` ⌨️ 📋
- `Pattern Editor:Paketti:Interpolate Column Values (Delay)` ⌨️ 📋
- `Pattern Editor:Paketti:Interpolate Column Values (Panning)` ⌨️ 📋
- `Pattern Editor:Paketti:Interpolate Column Values (Sample FX)` ⌨️ 📋

**Menu:** `Pattern Editor:Paketti:Pattern:Interpolate Column Values` (all 4 available) 📋

**Smooth Value Transitions:**
1. Enter start value at beginning of selection
2. Enter end value at end of selection
3. Run interpolation
4. All intermediate rows filled with smooth transition

**Perfect for:**
- **Volume fades** - 80 → 00 over 16 rows
- **Panning sweeps** - L40 → R40 sweep
- **Delay timing** - Create delay ramps
- **Filter sweeps** - Using Sample FX column

---

## Humanization

### Humanize Dialog
**Shortcut:** `Pattern Editor:Paketti:Humanize Selection...` ⌨️

Opens comprehensive humanization dialog with:
- **Timing variation** (delay column)
- **Velocity variation** (volume column)
- **Pitch variation** (note pitches)
- Adjustable ranges for each

---

### Quick Humanize Presets
**Shortcuts:**
- `Pattern Editor:Paketti:Quick Humanize 5` ⌨️ - Subtle (±5 timing, ±3 velocity)
- `Pattern Editor:Paketti:Quick Humanize 10` ⌨️ - Medium (±10 timing, ±5 velocity)
- `Pattern Editor:Paketti:Quick Humanize 20` ⌨️ - Heavy (±20 timing, ±8 velocity)
- `Pattern Editor:Paketti:Quick Humanize Random` ⌨️ - Randomized amounts

**Perfect for:**
- **Drum programming** - Make drums feel live
- **MIDI input** - Add realism to quantized notes
- **Mechanical parts** - Break the grid
- **Organic feel** - Make sequences less robotic

---

## Automation Operations

### Wipe Automation (Multiple Scopes)
**Shortcuts:**
- `Pattern Editor:Paketti:Wipe All Automation in Track on Current Pattern` ⌨️
- `Pattern Editor:Paketti:Wipe All Automation in All Tracks on Current Pattern` ⌨️
- `Pattern Editor:Paketti:Wipe All Automation in Track on Whole Song` ⌨️
- `Pattern Editor:Paketti:Wipe All Automation in All Tracks on Whole Song` ⌨️

**4 Scope Levels:**
1. **Track + Pattern** - Current track, current pattern only
2. **All Tracks + Pattern** - All tracks, current pattern only
3. **Track + Song** - Current track, entire song
4. **All Tracks + Song** - Every track, entire song (nuclear option!)

**Use Cases:**
- **Start fresh** - Remove all automation to start over
- **Clean mistakes** - Delete automation from problematic section
- **Track isolation** - Remove automation from specific track
- **Global reset** - Clear all automation across entire project

---

## Effect Column Operations

### Wipe Effect Columns (Multiple Scopes)
**Shortcuts:**
- `Pattern Editor:Paketti:Wipe All Effect Columns on Selected Track on Current Pattern` ⌨️ 📋
- `Pattern Editor:Paketti:Wipe All Effect Columns on Selected Track on Song` ⌨️ 📋
- `Pattern Editor:Paketti:Wipe All Effect Columns on Selected Pattern` ⌨️ 📋
- `Pattern Editor:Paketti:Wipe All Effect Columns on Song` ⌨️ 📋

**Menu:** `Pattern Editor:Paketti:Effect Columns:Wipe All Effect Columns` (submenu) 📋

**4 Scope Levels:**
1. **Track + Pattern** - Current track, current pattern
2. **Track + Song** - Current track, all patterns
3. **All Tracks + Pattern** - All tracks, current pattern
4. **All Tracks + Song** - Everything (nuclear!)

**Perfect for:**
- **Remove delay column** - Clean up timing commands
- **Remove glide commands** - Clear pitch effects
- **Clean project** - Remove unwanted effects
- **Start arrangement** - Clear effects before mastering

---

## Note Operations

### Insert Random Note-Offs
**Shortcut:** `Pattern Editor:Paketti:Insert Random Note-Offs in Empty Rows` ⌨️

**Creative Note Cutting:**
- Finds empty rows in selection
- Randomly inserts `OFF` notes
- Creates stutter/gating effects
- Controlled chaos

---

### Randomize Note-Off Positions
**Shortcut:** `Pattern Editor:Paketti:Randomize Positions of Note-Offs` ⌨️

**Shuffle Existing Note-Offs:**
- Takes all `OFF` notes in selection
- Moves them to random positions within selection
- Preserves note-off count
- Changes timing only

**Use Cases:**
- **Gating effects** - Randomize gate timing
- **Stutter variations** - Create unpredictable cuts
- **Experimental** - Break up sustained notes

---

### Fix C0 Panning Values
**Shortcut:** `Pattern Editor:Paketti:Fix C0 Panning Values` ⌨️

**C0 Bug Workaround:**
- Renoise has a quirk with C0 panning values
- This shortcut fixes/normalizes them
- Run if panning behaves strangely

---

### Step by EditStep
**Shortcuts:**
- `Pattern Editor:Paketti:Step by EditStep (Forwards)` ⌨️
- `Pattern Editor:Paketti:Step by EditStep (Backwards)` ⌨️

Move cursor by EditStep amount (like pressing Enter, but backwards too).

---

## Navigation & Playback

### Play at Random Line
**Shortcuts:**
- `Global:Paketti:Play at Random Line in Current Pattern` ⌨️ - Any line
- `Global:Paketti:Play at Random Line in Current Pattern 2` ⌨️ - Even lines (0, 2, 4...)
- `Global:Paketti:Play at Random Line in Current Pattern 4` ⌨️ - Every 4th line
- `Global:Paketti:Play at Random Line in Current Pattern LPB` ⌨️ - Every LPB line

**Random Pattern Preview:**
- Jumps to random position in current pattern
- Starts playback from there
- Great for auditioning different sections

**Use Cases:**
- **Quick preview** - Hear random parts of long pattern
- **Inspiration** - Discover unexpected combinations
- **Testing** - Check different sections rapidly

---

### Jump Forward/Backward by Random
**Shortcuts:**
- `Global:Paketti:Jump Forward Within Pattern by Random` ⌨️
- `Global:Paketti:Jump Backward Within Pattern by Random` ⌨️

Random cursor jumping within current pattern (without playing).

---

## Track & Group Management

### Selection to Group
**Shortcuts:**
- `Pattern Editor:Paketti:Selection in Pattern to Group` ⌨️
- `Pattern Matrix:Paketti:Selection in Pattern Matrix to Group` ⌨️ 📋

**Menu:** `Pattern Matrix:Paketti:Selection in Pattern Matrix to Group` 📋

**Smart Track Grouping:**
- Works from Pattern Editor selection OR Pattern Matrix selection
- Creates new group
- Adds all selected tracks to group
- Skips Master/Send tracks automatically

**Perfect for:**
- **Organizing mix** - Group drums, synths, vocals
- **Bus processing** - Group tracks for collective FX
- **Mixing workflow** - Organize by instrument type

---

### Navigate Groups
**Shortcuts:**
- `Pattern Editor:Paketti:Jump to First Track In Next Group` ⌨️
- `Pattern Editor:Paketti:Jump to First Track In Previous Group` ⌨️

**Fast Group Navigation:**
- Jumps to first track in next/previous group
- Skips over all tracks in between
- Great for large projects with many groups

---

### Populate Send Tracks
**Shortcut:** `Global:Paketti:Populate Send Tracks for All Selected Tracks` ⌨️

**Automatic Send Routing:**
- Creates send tracks for selected tracks
- Sets up routing automatically
- Saves manual send setup time

---

## Sample Controls

(See [Sample Exit Loop](#sample-exit-loop) section above)

---

## Tips & Workflow

### Time Signature Workflows
- Use time signature shortcuts when starting new projects or sections
- Combine with pattern length shortcuts for quick setup
- The pattern lengths are designed to work well with the specified LPB settings

### BPM & Velocity Control
- Use ±16 velocity for dramatic dynamic changes
- Use ±5 BPM for rapid tempo exploration
- Combine with MIDI controllers for live performance tempo rides

### Pattern Organization
- Group tracks by instrument type (drums, bass, leads, pads)
- Group tracks by processing chains (everything going through the same send)
- Group stems for easier mixdown management


# Pattern Sequencer & Section Management

This section covers all Paketti features related to Pattern Sequencer, Sequence Selection, Section management, and playback control.

---

## Documentation Source Files

**Last Updated:** 2025-11-28

This documentation was generated by analyzing the following Paketti Lua source files:

| File | Bindings Found | Coverage | Notes |
|------|----------------|----------|-------|
| `PakettiTkna.lua` | ~320 bindings | ✅ Complete | All sequence/section features documented |
| `PakettiRequests.lua` | 470 bindings | ⚠️ Partial | Pattern Matrix/Editor integration covered |

**Features Documented:**
- 65 section shortcuts by name (00-64) with Trigger/Schedule/Add variations
- 32 section shortcuts by position (01-32) with Trigger/Schedule/Add variations
- 32 sequence shortcuts (00-31) for direct access
- 16 pattern-within-section shortcuts
- Sequence selection, looping, and expansion features
- Performance lock MIDI control
- "Continue from Same Line" workflows

**Re-scraping Guide:** Search for `Toggle Sequence`, `Section`, `Loop`, `Schedule`, `Trigger` patterns in function names.

---

## Table of Contents
1. [Sequence Selection](#sequence-selection)
2. [Sequence Looping](#sequence-looping)
3. [Section Selection & Management](#section-selection--management)
4. [Scheduled Sequences](#scheduled-sequences)
5. [Section Loop Control](#section-loop-control)
6. [Pattern Navigation within Sections](#pattern-navigation-within-sections)
7. [Performance Lock Features](#performance-lock-features)

---

## Sequence Selection

### Toggle Sequence Selection (Individual)
**Shortcuts:** (00-32 available)
- `Global:Paketti:Toggle Sequence Selection 00` through `32`

Toggles selection for a specific sequence position. If the sequence is already selected, it will be deselected. If not selected, it will be selected.

---

### Toggle Current Sequence Selection On/Off
**Shortcut:** `Global:Paketti:Toggle Current Sequence Selection On/Off`

Toggles the selection state of the currently selected sequence. Pressing once selects it, pressing again deselects it.

---

### Toggle Sequence Selection (All) On/Off
**Shortcut:** `Global:Paketti:Toggle Sequence Selection (All) On/Off`

Selects all sequences in the song from position 1 to the end. *Note: Currently always selects all, does not toggle off.*

---

### Set Sequence Selection Off
**Shortcut:** `Global:Paketti:Set Sequence Selection Off`

Clears any active sequence selection.

---

### Sequence Selection (Next/Previous)
**Shortcuts:**
- `Global:Paketti:Sequence Selection (Next)` - Expand selection by 1 sequence forward
- `Global:Paketti:Sequence Selection (Previous)` - Expand selection by 1 sequence backward

**MIDI Mappings:**
- `Paketti:Sequence Selection (Next)`
- `Paketti:Sequence Selection (Previous)`

Step-by-step sequence selection expansion. If no selection exists, selects the current sequence. Then expands the selection range one sequence at a time.

---

### Sequence Selection to Loop
**Shortcut:** `Global:Paketti:Toggle Sequence Selection to Loop` ⌨️ 📋

**Menu:** `Pattern Sequencer:Paketti:Sequences/Sections:Toggle Sequence Selection to Loop` 📋

Converts the current sequence selection into a loop range. If the loop already matches the selection, it toggles the loop off.

---

## Sequence Looping

### Toggle Sequence Loop (Individual Positions)
**Shortcuts:** (01-32 available)
- `Global:Paketti:Toggle Sequence Loop to 00` through `31`

Sets or toggles a loop to a specific sequence position. If the loop is already set to that position, it turns the loop off.

---

### Clear Pattern Sequence Loop
**Shortcut:** `Global:Paketti:Clear Pattern Sequence Loop`

Removes any active sequence loop, allowing playback to continue through the entire song.

---

### Set Sequence Loop from Current to Position
**Shortcuts:** (01-32 available)
- `Global:Paketti:Set Sequence Loop from Current to 00` through `31`

Creates a loop range from the current loop position (or creates a new one) to the specified position. If the new position is before the current start, it becomes the new start.

---

### Sequence Loop Selection (Next/Previous)
**Shortcuts:**
- `Global:Paketti:Sequence Loop Selection (Next)` ⌨️ 📋 - Extend loop by 1 sequence forward
- `Global:Paketti:Sequence Loop Selection (Previous)` ⌨️ 📋 - Extend loop by 1 sequence backward

**MIDI Mappings:**
- `Paketti:Sequence Loop Selection (Next)` 🎹
- `Paketti:Sequence Loop Selection (Previous)` 🎹

**Menu:** `Pattern Sequencer:Paketti:Sequences/Sections:Sequence Loop Selection (Next)` 📋
**Menu:** `Pattern Sequencer:Paketti:Sequences/Sections:Sequence Loop Selection (Previous)` 📋

Incrementally expand the loop range by adding one more sequence in either direction. If no loop exists, starts with the current sequence.

---

## Section Selection & Management

### Select and Loop Section (Next/Previous)
**Shortcuts:**
- `Global:Paketti:Select and Loop Section (Next)` - Jump to and loop next section
- `Global:Paketti:Select and Loop Section (Previous)` - Jump to and loop previous section

Navigates between sections in your song and automatically creates a loop for the entire section. Useful for quickly jumping between song parts during arrangement.

---

### Set Sequence Loop Selection Off
**Shortcut:** `Global:Paketti:Set Sequence Loop Selection Off` ⌨️ 📋

**Menu:** `Pattern Sequencer:Paketti:Sequences/Sections:Set Sequence Loop Selection Off` 📋

Disables the sequence loop, setting the loop range to {0, 0}.

---

### Section Loop (Next/Previous)
**Shortcuts:**
- `Global:Paketti:Section Loop (Next)` ⌨️ 📋 - Expand section loop to include next section
- `Global:Paketti:Section Loop (Previous)` ⌨️ 📋 - Expand section loop to include previous section

**MIDI Mappings:**
- `Paketti:Section Loop (Next)` 🎹
- `Paketti:Section Loop (Previous)` 🎹

**Menu:** `Pattern Sequencer:Paketti:Sequences/Sections:Section Loop (Next)` 📋
**Menu:** `Pattern Sequencer:Paketti:Sequences/Sections:Section Loop (Previous)` 📋

If no loop exists, creates a loop for the current section. If a loop exists, extends it to include the next/previous section. Great for building up section combinations during live performance.

---

### Select, Trigger and Loop Section by Name (00-64)
**Shortcuts:** (00-64 available)
- `Global:Paketti:Select, Trigger and Loop Section 00` through `64`

**MIDI Mappings:**
- `Paketti:Select&Trigger&Loop Section 00` through `64` [Trigger]

**Menu Entries:**
- `Pattern Sequencer:Paketti:Sequences/Sections:Select, Trigger and Loop:Select, Trigger and Loop Section 00-64`

Finds the next occurrence of a section starting with the specified number (e.g., "01.Intro", "01-Intro", "01,Intro") and immediately triggers it with looping enabled. Cycles through multiple occurrences of the same section number.

---

### Select, Schedule and Loop Section by Name (00-64)
**Shortcuts:** (00-64 available)
- `Global:Paketti:Select, Schedule and Loop Section 00` through `64`

**MIDI Mappings:**
- `Paketti:Select&Schedule&Loop Section 00` through `64` [Trigger]

**Menu Entries:**
- `Pattern Sequencer:Paketti:Sequences/Sections:Select, Schedule and Loop:Select, Schedule and Loop Section 00-64`

Same as above, but schedules the section to play at the next pattern boundary instead of immediately triggering it. Useful for seamless transitions.

---

### Select, Add to Schedule and Loop Section by Name (00-64)
**Shortcuts:** (00-64 available)
- `Global:Paketti:Select, Add to Schedule and Loop Section 00` through `64`

**MIDI Mappings:**
- `Paketti:Select&Add to Schedule&Loop Section 00` through `64` [Trigger]

**Menu Entries:**
- `Pattern Sequencer:Paketti:Sequences/Sections:Select, Add to Schedule and Loop:Select, Add to Schedule and Loop Section 00-64`

Adds the specified section to the schedule queue rather than replacing it. Allows building a playlist of sections to play in sequence.

---

### Select, Trigger and Loop Section by Position (01-32)
**Shortcuts:** (01-32 available)
- `Global:Paketti:Select&Trigger&Loop Section by Position 01` through `32`

**MIDI Mappings:**
- `Paketti:Select&Trigger&Loop Section by Position 01` through `32` [Trigger]

**Menu Entries:**
- `Pattern Sequencer:Paketti:Sequences/Sections:Select, Trigger and Loop by Position:Select, Trigger and Loop Section by Position 01-32`

Selects sections by their position (1st section, 2nd section, etc.) regardless of their names, and immediately triggers with looping.

---

### Select, Schedule and Loop Section by Position (01-32)
**Shortcuts:** (01-32 available)
- `Global:Paketti:Select&Schedule&Loop Section by Position 01` through `32`

**MIDI Mappings:**
- `Paketti:Select&Schedule&Loop Section by Position 01` through `32` [Trigger]

**Menu Entries:**
- `Pattern Sequencer:Paketti:Sequences/Sections:Select, Schedule and Loop by Position:Select, Schedule and Loop Section by Position 01-32`

Same as above but schedules the section by position instead of triggering immediately.

---

### Select, Add to Schedule and Loop Section by Position (01-32)
**Shortcuts:** (01-32 available)
- `Global:Paketti:Select&Add to Schedule&Loop Section by Position 01` through `32`

**MIDI Mappings:**
- `Paketti:Select&Add to Schedule&Loop Section by Position 01` through `32` [Trigger]

**Menu Entries:**
- `Pattern Sequencer:Paketti:Sequences/Sections:Select, Add to Schedule and Loop by Position:Select, Add to Schedule and Loop Section by Position 01-32`

Adds the section by position to the schedule queue.

---

## Scheduled Sequences

### Set Sequence as Scheduled List (00-31)
**Shortcuts:** (00-31 available)
- `Global:Paketti:Set Sequence 00 as Scheduled List` through `31`

**Menu Entries:**
- `Pattern Sequencer:Paketti:Sequences/Sections:Set Sequence as Scheduled List:Set Sequence 00-31 as Scheduled List`

Sets a specific sequence to play next, replacing any existing schedule. Starts playback if not already playing.

---

### Set Current Sequence as Scheduled List
**Shortcut:** `Global:Paketti:Set Current Sequence as Scheduled List` ⌨️ 📋

**MIDI:** `Paketti:Set Current Sequence as Scheduled List` 🎹

**Menu:** `Pattern Sequencer:Paketti:Sequences/Sections:Set Current Sequence as Scheduled List` 📋

Schedules the currently selected sequence to play next.

---

### Add Sequence to Scheduled List (00-31)
**Shortcuts:** (00-31 available)
- `Global:Paketti:Add Sequence 00 to Scheduled List` through `31`

Adds a sequence to the scheduled playback queue without replacing existing scheduled sequences.

---

### Set Current Section as Scheduled Sequence
**Shortcut:** `Global:Paketti:Set Current Section as Scheduled Sequence` ⌨️ 📋

**MIDI Mapping:** `Paketti:Set Current Section as Scheduled Sequence` 🎹

**Menu:** `Pattern Sequencer:Paketti:Sequences/Sections:Set Current Section as Scheduled Sequence` 📋

Schedules all patterns in the current section to play next, replacing any existing schedule.

---

### Add Current Section to Scheduled Sequences
**Shortcut:** `Global:Paketti:Add Current Section to Scheduled Sequences` ⌨️ 📋

**MIDI Mapping:** `Paketti:Add Current Section to Scheduled Sequences` 🎹

**Menu:** `Pattern Sequencer:Paketti:Sequences/Sections:Add Current Section to Scheduled Sequences` 📋

Adds all patterns in the current section to the scheduled playback queue.

---

### Set Section Loop and Schedule Section
**Shortcut:** `Global:Paketti:Set Section Loop and Schedule Section` ⌨️ 📋

**MIDI Mapping:** `Paketti:Set Section Loop and Schedule Section [Knob]` 🎹

**Menu:** `Pattern Sequencer:Paketti:Sequences/Sections:Set Section Loop and Schedule Section` 📋

Creates a loop for the current section and schedules it to play from the first sequence of that section.

---

### Set Current Sequence as Scheduled and Loop
**Shortcut:** `Global:Paketti:Set Current Sequence as Scheduled and Loop` ⌨️ 📋

**Menu:** `Pattern Sequencer:Paketti:Sequences/Sections:Set Current Sequence as Scheduled and Loop` 📋

Combines scheduling and looping: sets the current sequence as the scheduled sequence and creates a single-sequence loop.

---

## Section Loop Control

### Jump to Section (Next/Previous)
**Shortcuts:**
- `Global:Paketti:Jump to Section (Next)` - Navigate to next section
- `Global:Paketti:Jump to Section (Previous)` - Navigate to previous section

**MIDI Mappings:**
- `Paketti:Jump to Section (Next) [Trigger]`
- `Paketti:Jump to Section (Previous) [Trigger]`

Quickly navigate between section boundaries in your song without changing loop settings.

---

## Pattern Navigation within Sections

### Jump to Pattern in Section (01-16)
**Shortcuts:** (01-16 available)
- `Global:Paketti:Jump to Pattern 01 in Section` through `16`

**MIDI Mappings:**
- `Paketti:Jump to Pattern 01 in Section [Trigger]` through `16`

Jumps to a specific pattern number within the current section. For example, if you're in a section with 8 patterns, pressing "03" jumps to the 3rd pattern of that section.

---

### Select Pattern Within Section (MIDI Knob)
**MIDI Mapping:** `Paketti:Select Pattern Within Section [Knob]`

Use a MIDI knob to select different patterns within the current section. The knob range (0-127) is mapped to the number of patterns in the section.

---

### Select and Trigger Pattern in Current Section (01-16)
**Shortcuts:** (01-16 available)
- `Global:Paketti:Select and Trigger Pattern 01 in Current Section` through `16`

**MIDI Mappings:**
- `Paketti:Select and Trigger Pattern 01 in Current Section [Trigger]` through `16`

Selects and immediately triggers playback of a specific pattern within the current section.

---

### Select and Schedule Pattern in Current Section (01-16)
**Shortcuts:** (01-16 available)
- `Global:Paketti:Select and Schedule Pattern 01 in Current Section` through `16`

**MIDI Mappings:**
- `Paketti:Select and Schedule Pattern 01 in Current Section [Trigger]` through `16`

Schedules a specific pattern within the current section to play at the next pattern boundary.

---

### Select and Add to Schedule Pattern in Current Section (01-16)
**Shortcuts:** (01-16 available)
- `Global:Paketti:Select and Add to Schedule Pattern 01 in Current Section` through `16`

**MIDI Mappings:**
- `Paketti:Select and Add to Schedule Pattern 01 in Current Section [Trigger]` through `16`

Adds a specific pattern within the current section to the schedule queue.

---

### Trigger Pattern Within Section (MIDI Knob)
**MIDI Mapping:** `Paketti:Trigger Pattern Within Section [Knob]`

Use a MIDI knob to trigger different patterns within the current section. Automatically starts playback.

---

## Performance Lock Features

### Select Section with Performance Lock (MIDI Knob)
**MIDI Mapping:** `Paketti:Select Section with Performance Lock [Knob]`

**Special Feature:** This knob allows selecting and triggering sections with a **performance lock** - once playback starts, you cannot change sections until you stop transport. This prevents accidental section changes during live performance.

Maps MIDI value (0-127) to all available sections in your song. Automatically:
- Selects the target section
- Creates a loop for that section
- Starts playback if not already playing
- Triggers the section to play immediately
- **LOCKS section selection until transport is stopped**

---

## Sequence Jumping & Triggering

### Jump to Sequence (Next/Previous)
**Shortcuts:**
- `Global:Paketti:Jump to Sequence (Next)` - Move to next sequence
- `Global:Paketti:Jump to Sequence (Previous)` - Move to previous sequence

Simple navigation between sequences without affecting playback or loop settings.

---

### Selected Specific Sequence (00-31)
**Shortcuts:** (00-31 available)
- `Global:Paketti:Selected Specific Sequence 00` through `31`

Directly jumps the edit cursor to a specific sequence position (without triggering playback).

---

### Trigger Sequence (00-31)
**Shortcuts:** (00-31 available)
- `Global:Paketti:Trigger Sequence 00` through `31`

Immediately triggers playback from a specific sequence position, regardless of current transport state.

---

### Continue Sequence from Same Line (00-31)
**Shortcuts:** (00-31 available)
- `Global:Paketti:Continue Sequence 00 From Same Line` through `31`

**MIDI Mapping:** `Paketti:Continue Sequence From Same Line [Set Sequence]`

Jumps to a specified sequence position while maintaining the same pattern line number. Useful for live performance when you want to switch sections but stay on the same beat.

*Example: If you're on line 32 of sequence 5, and trigger "Continue Sequence 10 from Same Line", you'll jump to line 32 of sequence 10.*

---

### Continue Current Sequence From Same Line
**Shortcut:** `Global:Paketti:Continue Current Sequence From Same Line`

Re-triggers the current sequence from its current line position. Useful for "restart current section" functionality.

---

## Pattern Editor Integration

### Selection in Pattern to Group
**Shortcut:** `Pattern Editor:Paketti:Selection in Pattern to Group`

Takes your selected tracks from the Pattern Editor and creates a new group track containing them. Automatically positions the group after the selected tracks.

---

### Selection in Pattern Matrix to Group
**Shortcut:** `Pattern Matrix:Paketti:Selection in Pattern Matrix to Group`

Same as above, but works with Pattern Matrix selections. Allows grouping tracks by selecting them in the Pattern Matrix view.

---

## Tips & Workflow Suggestions

### Live Performance Workflow
1. **Pre-arrange sections** with descriptive names (01.Intro, 02.Verse, 03.Chorus, etc.)
2. **Use Section by Name shortcuts** for reliable section triggering
3. **Enable Performance Lock** for the main section selection knob to prevent accidents
4. **Use "Continue from Same Line"** for seamless section transitions during performance
5. **Schedule sections** ahead of time for smooth transitions

### Studio Workflow  
1. **Use Position-based shortcuts** when sections are still unnamed
2. **Loop expansion** (Next/Previous) for quick A/B section comparisons
3. **Pattern-within-section navigation** for detailed editing without losing your place
4. **Sequence Selection to Loop** for quickly testing specific sequence ranges

# Sample Loading & Management

← [Back to Main Manual](README.md)

Comprehensive guide to Paketti's sample loading, drumkit creation, and sample management features.

---

## Documentation Source Files

**Last Updated:** 2025-11-28

| File | Coverage |
|------|----------|
| `PakettiSamples.lua` | ✅ Sample loading section complete |

---

## Table of Contents
1. [PitchBend Sample Loaders](#pitchbend-sample-loaders)
2. [Sample Slot Management](#sample-slot-management)
3. [Quick Sample Folders](#quick-sample-folders)
4. [Sample Zoom Controls](#sample-zoom-controls)
5. [Save Sample Functions](#save-sample-functions)

---

## PitchBend Sample Loaders

### Paketti PitchBend Multiple Sample Loader
**Shortcuts:**
- `Global:Paketti:Paketti PitchBend Multiple Sample Loader` ⌨️ 📋
- `Global:Paketti:Paketti PitchBend Multiple Sample Loader (Normalize)` ⌨️ 📋
- `Sample Editor:Paketti:Paketti PitchBend Multiple Sample Loader` ⌨️
- `Sample Editor:Paketti:Paketti PitchBend Multiple Sample Loader (Normalize)` ⌨️

**MIDI Mapping:** `Paketti:Midi Paketti PitchBend Multiple Sample Loader` 🎹

**Menu:** `Instrument Box:Paketti:Load:Paketti PitchBend Multiple Sample Loader` 📋
**Menu:** `Main Menu:Tools:Paketti:Instruments:Paketti PitchBend Multiple Sample Loader` 📋
**Menu:** `Disk Browser Files:Paketti:Load:Paketti PitchBend Multiple Sample Loader` 📋
**Menu:** `Disk Browser Files:Paketti:Load:Paketti PitchBend Multiple Sample Loader (Normalize)` 📋

Loads multiple samples using macOS Finder/Windows Explorer and automatically "Pakettifies" them with the default Paketti XRNI instrument template:
- **8 Macros** pre-configured (PitchBend, Cutoff, Resonance, Cutoff LFO, Drive, Parallel Compression, etc.)
- **Sample FX Chain** with modulation devices
- **Track DSP** with *Instr. Macros device for automation
- **Normalize option** applies normalization during load

---

### Paketti PitchBend Drumkit Sample Loader
**Shortcuts:**
- `Global:Paketti:Paketti PitchBend Drumkit Sample Loader` ⌨️ 📋
- `Global:Paketti:Paketti PitchBend Drumkit Sample Loader (Random)` ⌨️ 📋 - Loads random 120 samples

**MIDI Mappings:**
- `Paketti:Midi Paketti PitchBend Drumkit Sample Loader` 🎹
- `Paketti:Midi Paketti PitchBend Drumkit Sample Loader (Random)` 🎹

**Menu:** `Instrument Box:Paketti:Load:Paketti PitchBend Drumkit Sample Loader` 📋
**Menu:** `Instrument Box:Paketti:Load:Paketti PitchBend Drumkit Sample Loader (Random)` 📋
**Menu:** `Main Menu:Tools:Paketti:Instruments:Paketti PitchBend Drumkit Sample Loader (Random)` 📋
**Menu:** `Disk Browser Files:Paketti:Load:Paketti PitchBend Drumkit Sample Loader` 📋
**Menu:** `Disk Browser Files:Paketti:Load:Paketti PitchBend Drumkit Sample Loader (Random)` 📋

Loads up to 120 samples and maps them chromatically from C-0 to B-9. Applies the same Paketti XRNI template.

**Random variant** loads 120 random samples from your selected folder - great for instant experimental drumkits!

---

## Sample Slot Management

### Add Sample Slots
**Shortcuts:**
- `Global:Paketti:Add Sample Slot to Instrument` ⌨️ - Add 1 empty slot
- `Global:Paketti:Add 84 Sample Slots to Instrument` ⌨️ 📋 - Add 84 empty slots

**Menu:** `Instrument Box:Paketti:Initialize:Add 84 Sample Slots to Instrument` 📋
**Menu:** `Sample Editor:Paketti:Instruments:Add 84 Sample Slots to Instrument` 📋
**Menu:** `Sample Navigator:Paketti:Add 84 Sample Slots to Instrument` 📋

Quickly add empty sample slots to the current instrument without manual clicking.

---

### Insert New Sample Slot & Select
**Shortcut:** `Global:Paketti:Insert New Sample Slot & Select` ⌨️
**MIDI Mapping:** `Paketti:Midi Insert New Sample Slot & Select` 🎹

Inserts a new empty sample slot and automatically selects it, ready for you to load or record audio.

---

### Delete Current Sample & Select Next
**Shortcut:** `Global:Paketti:Delete Current Sample & Select Next`
**MIDI Mapping:** `Paketti:Midi Delete Current Sample & Select Next`

Deletes the currently selected sample and automatically jumps to the next sample. Speeds up sample cleanup workflows.

---

## Quick Sample Folders

Paketti provides a **Quick Sample Folders** system for instant access to your most-used sample libraries.

**Menu Location:** `Main Menu:Tools:Paketti:Quick Sample Folders`

For each configured folder, you get **6 menu entries:**

### Per-Folder Actions
1. **Open Folder** - Opens the folder in Finder/Explorer
2. **Random Drumkit** - Loads 120 random samples as drumkit
3. **Random 01** - Loads 1 random sample  
4. **Random 01 Sample to Pattern** - Loads 1 random sample + writes it to pattern
5. **Random 12** - Loads 12 random samples
6. **Random 32** - Loads 32 random samples

**How to Configure:**
- Set folder paths in Paketti Preferences
- Folders appear automatically in the Quick Sample Folders menu
- All loaded samples are automatically Pakettified

**Use Cases:**
- **Drum libraries** - Quick random drumkit generation
- **Vocal chops** - Load random vocal samples
- **Texture libraries** - Instant ambient sample access
- **Sound design** - Random sample inspiration

---

## Sample Zoom Controls

### Set Sample Zoom (01x-99x)
**Shortcuts:** (01-99 available)
- `Sample Editor:Paketti:Set Sample Zoom 01x` through `99x`
- `Sample Editor:Paketti:Set Sample Zoom:Zoom 01x` through `99x`

**MIDI Mapping:** `Paketti:Midi Sample Zoom (1x-11x) [Knob]`

Directly set the Sample Editor zoom level without scrolling. Higher numbers = more zoomed in.

**Workflow tip:** Assign commonly used zoom levels (2x, 4x, 8x, 16x) to shortcuts for quick navigation between overview and detail views.

---

## Save Sample Functions

### Save Selected Sample
**Shortcuts:**
- `Global:Paketti:Paketti Save Selected Sample .WAV` ⌨️ 📋
- `Global:Paketti:Paketti Save Selected Sample .FLAC` ⌨️ 📋

**MIDI Mappings:**
- `Paketti:Midi Paketti Save Selected Sample .WAV` 🎹
- `Paketti:Midi Paketti Save Selected Sample .FLAC` 🎹

**Menu:** `Sample Editor:Paketti:Save:Paketti Save Selected Sample .WAV/.FLAC` 📋
**Menu:** `Sample Navigator:Paketti:Save:Paketti Save Selected Sample .WAV/.FLAC` 📋
**Menu:** `Sample Mappings:Paketti:Save:Paketti Save Selected Sample .WAV/.FLAC` 📋

Opens Finder/Explorer to save the currently selected sample. Much faster than navigating through Renoise's sample save dialog.

---

### Save Selected Sample Range
**Shortcuts:**
- `Global:Paketti:Paketti Save Selected Sample Range .WAV` ⌨️ 📋
- `Global:Paketti:Paketti Save Selected Sample Range .FLAC` ⌨️ 📋

**MIDI Mappings:**
- `Paketti:Save Selected Sample Range .WAV` 🎹
- `Paketti:Save Selected Sample Range .FLAC` 🎹

**Menu:** `Sample Editor:Paketti:Save:Paketti Save Selected Sample Range .WAV/.FLAC` 📋

**Fast Tracker 2 Feature:** Saves only the selected range in the sample buffer. Perfect for:
- Exporting individual slices
- Extracting specific transients
- Creating loops from longer samples

---

# Sample Normalization & Channel/Bit Depth Conversion

← [Back to Main Manual](README.md)

Complete guide to Paketti's advanced normalization, channel conversion, and bit depth processing features.

---

## Documentation Source Files

**Last Updated:** 2025-11-28

| File | Keybindings | MIDI Mappings | Menu Entries | Coverage |
|------|-------------|---------------|--------------|----------|
| `PakettiProcess.lua` | 58 | 12 | 1 | ✅ Complete |

---

## Table of Contents
1. [Normalize Sample](#normalize-sample)
2. [Normalize to -12dB](#normalize-to--12db)
3. [Normalize Slices Independently](#normalize-slices-independently)
4. [Reverse Sample & Slices](#reverse-sample--slices)
5. [Mono/Stereo Conversion](#monostereo-conversion)
6. [Bit Depth Conversion](#bit-depth-conversion)
7. [Sample Truncater](#sample-truncater)
8. [Sample Adjust Dialog](#sample-adjust-dialog)
9. [Build Sample Variants](#build-sample-variants)

---

## Normalize Sample

### Normalize Selected Sample or Slice
**Shortcuts:**
- `Sample Editor:Paketti:Normalize Selected Sample or Slice` ⌨️ 📋
- `Global:Paketti:Normalize Selected Sample or Slice` ⌨️ 📋

**MIDI:** `Paketti:Normalize Selected Sample or Slice` 🎹

**Menu:** `Sample Editor:Paketti:Process:Normalize Selected Sample or Slice` 📋
**Menu:** `Sample Navigator:Paketti:Process:Normalize Selected Sample or Slice` 📋
**Menu:** `Sample Mappings:Paketti:Process:Normalize Selected Sample or Slice` 📋

**Smart Normalization** - Works with both whole samples and individual slices:
- **No Slices:** Normalizes entire sample or selection
- **Has Slices:** Normalizes only the selected slice or selection within slice
- **Channel-aware:** Respects left/right/both channel selection
- **Per-channel peaks:** Finds peak per channel for accurate normalization
- **Smart detection:** Skips if already at 0.999969 or higher (near max)

**Features:**
- Progress dialog with cancellation support
- Ultra-fast optimized processing (4M+ frames/second)
- Memory-efficient for huge samples (>50MB uses streaming)
- Works with selections within samples or slices

---

### Normalize Sample (Ultra-Fast)
**Shortcut:** `Global:Paketti:Normalize Sample` ⌨️ 📋

**Menu:** `Sample Editor:Paketti:Process:Normalize Sample` 📋
**Menu:** `Sample Navigator:Paketti:Process:Normalize Sample` 📋
**Menu:** `Sample Mappings:Paketti:Process:Normalize Sample` 📋

Fast normalization of the selected sample - automatically chooses best algorithm:
- **< 50MB:** Ultra-fast cached method
- **> 50MB:** Streaming method (memory-efficient)

---

### Normalize All Samples in Instrument
**Shortcut:** `Global:Paketti:Normalize All Samples in Instrument` ⌨️ 📋

**MIDI:** `Paketti:Normalize All Samples in Instrument` 🎹

**Menu:** `Sample Editor:Paketti:Process:Normalize All Samples in Instrument` 📋
**Menu:** `Sample Navigator:Paketti:Process:Normalize All Samples in Instrument` 📋
**Menu:** `Sample Mappings:Paketti:Process:Normalize All Samples in Instrument` 📋

Normalizes every sample in the current instrument:
- **Sliced instruments:** Only normalizes first sample (preserves slices)
- **Regular instruments:** Normalizes each sample independently
- Progress dialog shows which sample is being processed
- Skips already-normalized samples

---

## Normalize to -12dB

### Normalize with Headroom
**Shortcuts:**
- `Sample Editor:Paketti:Normalize Selected Sample to -12dB` ⌨️ 📋
- `Sample Editor:Paketti:Normalize Selected Instrument to -12dB` ⌨️ 📋
- `Sample Editor:Paketti:Normalize All Instruments to -12dB` ⌨️ 📋

**MIDI Mappings:**
- `Paketti:Normalize Selected Sample to -12dB` 🎹
- `Paketti:Normalize Selected Instrument to -12dB` 🎹
- `Paketti:Normalize All Instruments to -12dB` 🎹

**Menu:** `Sample Editor:Paketti:Process:Normalize Selected Sample -12dB` 📋
**Menu:** `Sample Editor:Paketti:Process:Normalize Selected Instrument -12dB (All Samples & Slices)` 📋
**Menu:** `Sample Editor:Paketti:Process:Normalize All Instruments -12dB` 📋
(Also in Sample Navigator & Sample Mappings)

**Professional Normalization** with -12dB headroom for:
- **Mastering chains** - Leaves room for processing
- **Preventing clipping** - Safe for further compression/limiting
- **Mixing** - Consistent levels with overhead

**Three Scopes:**
1. **Current Sample** - Selected sample only
2. **All Samples** - Entire instrument
3. **All Instruments** - Every instrument in song

---

## Normalize Slices Independently

**Shortcut:** `Global:Paketti:Normalize Sample Slices Independently` ⌨️ 📋

**Menu:** `Sample Editor:Paketti:Process:Normalize Slices Independently` 📋
**Menu:** `Sample Navigator:Paketti:Process:Normalize Slices Independently` 📋

**Advanced Slice Processing** - Each slice is normalized independently:
- Finds peak for each slice separately
- Normalizes each slice to its own maximum
- Preserves relative dynamics between slices
- Perfect for drumkits where each slice should be at maximum volume

**Use Cases:**
- **Drumkits** - Make every drum hit equally loud
- **Vocal chops** - Maximize each chop independently
- **Breaks** - Each hit at full volume for maximum punch

---

## Reverse Sample & Slices

### Reverse Selected Sample or Slice
**Shortcuts:**
- `Sample Editor:Paketti:Reverse Selected Sample or Slice` ⌨️ 📋
- `Sample Keyzones:Paketti:Reverse Selected Sample or Slice` ⌨️ 📋

**MIDI:** `Paketti:Reverse Selected Sample or Slice` 🎹

**Menu:** `Sample Editor:Paketti:Process:Reverse Selected Sample or Slice` 📋
**Menu:** `Sample Navigator:Paketti:Process:Reverse Selected Sample or Slice` 📋
**Menu:** `Sample Mappings:Paketti:Process:Reverse Selected Sample or Slice` 📋

**Intelligent Reversing:**
- **No Slices:** Reverses entire sample or selection
- **Has Slices:** Reverses only the selected slice or selection within slice
- Works with stereo samples
- Progress dialog with cancellation

---

### Reverse All Samples in Selected Instrument
**Shortcut:** `Global:Paketti:Reverse All Samples in Selected Instrument` ⌨️

**MIDI:** `Paketti:Reverse All Samples in Selected Instrument` 🎹

**Menu:** `Sample Editor:Paketti:Process:Reverse All Samples in Selected Instrument` 📋

Reverses every sample in the instrument:
- **Sliced instruments:** Only reverses first sample
- **Regular instruments:** Reverses each sample independently
- Progress shows sample name and overall completion

---

## Mono/Stereo Conversion

### Mono to Stereo
**Shortcuts:**
- `Sample Editor:Paketti:Convert Mono to Stereo` ⌨️ 📋
- `Sample Keyzones:Paketti:Convert Mono to Stereo` ⌨️ 📋

**MIDI:** `Sample Editor:Paketti:Convert Mono to Stereo` 🎹

**Menu:** `Sample Editor:Paketti:Process:Convert Mono to Stereo` 📋
**Menu:** `Sample Navigator:Paketti:Process:Convert Mono to Stereo` 📋

Converts mono sample to stereo by duplicating to both channels.

---

### Mono to Stereo (Blank Channel)
**Shortcuts:**
- `Sample Editor:Paketti:Mono to Left with Blank Right` ⌨️ 🎹
- `Sample Editor:Paketti:Mono to Right with Blank Left` ⌨️ 🎹
- `Sample Keyzones:Paketti:Mono to Left with Blank Right` ⌨️
- `Sample Keyzones:Paketti:Mono to Right with Blank Left` ⌨️

**MIDI Mappings:**
- `Sample Editor:Paketti:Mono to Right with Blank Left` 🎹
- `Sample Editor:Paketti:Mono to Left with Blank Right` 🎹

Converts mono to stereo with one channel silent:
- **Left with Blank Right:** Mono→Left, Right=silence
- **Right with Blank Left:** Mono→Right, Left=silence

**Use Cases:**
- Preparing for mid/side processing
- Creating space for layer stacking
- Phase manipulation setups

---

### Stereo to Mono
**Shortcuts:**
- `Sample Editor:Paketti:Convert Stereo to Mono (Keep Left)` ⌨️ 🎹 📋
- `Sample Editor:Paketti:Convert Stereo to Mono (Keep Right)` ⌨️ 🎹 📋
- `Sample Editor:Paketti:Convert Stereo to Mono (Mix Both)` ⌨️ 🎹 📋
- `Sample Keyzones:Paketti:Convert Stereo to Mono (Keep Left)` ⌨️
- `Sample Keyzones:Paketti:Convert Stereo to Mono (Keep Right)` ⌨️
- `Sample Keyzones:Paketti:Convert Stereo to Mono (Mix Both)` ⌨️

**MIDI Mappings:**
- `Sample Editor:Paketti:Convert Stereo to Mono (Keep Left)` 🎹
- `Sample Editor:Paketti:Convert Stereo to Mono (Keep Right)` 🎹
- `Sample Editor:Paketti:Convert Stereo to Mono (Mix Both)` 🎹

**Menu:** `Sample Editor:Paketti:Process:Convert Stereo to Mono (Keep Left/Right/Mix Both)` 📋
(Also in Sample Navigator)

**Three Modes:**
1. **Keep Left** - Uses left channel only
2. **Keep Right** - Uses right channel only
3. **Mix Both** - Averages both channels (true mono mix)

---

### Convert All Samples to Mono
**Shortcuts:**
- `Sample Editor:Paketti:Convert All Samples to Mono (Keep Left)` ⌨️ 🎹
- `Sample Editor:Paketti:Convert All Samples to Mono (Keep Right)` ⌨️ 🎹
- `Sample Editor:Paketti:Convert All Samples to Mono (Mix Both)` ⌨️ 🎹
- `Sample Keyzones:Paketti:Convert All Samples to Mono (Keep Left)` ⌨️
- `Sample Keyzones:Paketti:Convert All Samples to Mono (Keep Right)` ⌨️
- `Sample Keyzones:Paketti:Convert All Samples to Mono (Mix Both)` ⌨️

**MIDI Mappings:**
- `Sample Editor:Paketti:Convert All Samples to Mono (Keep Left)` 🎹
- `Sample Editor:Paketti:Process:Convert All Samples to Mono (Keep Right)` 🎹
- `Sample Editor:Paketti:Process:Convert All Samples to Mono (Mix Both)` 🎹

Batch converts all stereo samples in instrument to mono:
- Skips mono samples
- Skips sliced samples
- Progress dialog shows which sample is processing
- Preserves all sample properties

---

## Bit Depth Conversion

### Convert to Bit Depth (Single Sample)
**Shortcuts:**
- `Sample Editor:Paketti:Convert to 8-bit` ⌨️ 🎹 📋
- `Sample Editor:Paketti:Convert to 16-bit` ⌨️ 🎹 📋
- `Sample Editor:Paketti:Convert to 24-bit` ⌨️ 🎹 📋
- `Sample Editor:Paketti:Convert to 32-bit` ⌨️ 🎹 📋
- `Sample Keyzones:Paketti:Convert to 8-bit` ⌨️
- `Sample Keyzones:Paketti:Convert to 16-bit` ⌨️
- `Sample Keyzones:Paketti:Convert to 24-bit` ⌨️
- `Sample Keyzones:Paketti:Convert to 32-bit` ⌨️

**MIDI Mappings:**
- `Sample Editor:Paketti:Convert to 8-bit` 🎹
- `Sample Editor:Paketti:Convert to 16-bit` 🎹
- `Sample Editor:Paketti:Convert to 24-bit` 🎹
- `Sample Editor:Paketti:Convert to 32-bit` 🎹

**Menu:** `Sample Editor:Paketti:Process:Convert to [8/16/24/32]-bit` 📋
(Also in Sample Navigator & Sample Mappings)

**Professional Bit Depth Conversion with:**
- **Triangular dithering (TPDF)** - Reduces quantization noise
- **Proper quantization** - Mathematically correct bit reduction
- **Property preservation** - All sample settings maintained
- **Progress feedback** - Shows conversion percentage

**Common Workflows:**
- **32→16bit:** For distribution/compatibility
- **16→8bit:** For lo-fi aesthetic
- **Any→32bit:** For maximum quality processing

---

### Convert All Samples to Bit Depth
**Shortcuts:**
- `Sample Editor:Paketti:Convert All Samples to 8-bit` ⌨️ 🎹 📋
- `Sample Editor:Paketti:Convert All Samples to 16-bit` ⌨️ 🎹 📋
- `Sample Editor:Paketti:Convert All Samples to 24-bit` ⌨️ 🎹 📋
- `Sample Editor:Paketti:Convert All Samples to 32-bit` ⌨️ 🎹 📋
- `Sample Keyzones:Paketti:Convert All Samples to 8-bit` ⌨️
- `Sample Keyzones:Paketti:Convert All Samples to 16-bit` ⌨️
- `Sample Keyzones:Paketti:Convert All Samples to 24-bit` ⌨️
- `Sample Keyzones:Paketti:Convert All Samples to 32-bit` ⌨️

**MIDI Mappings:**
- `Sample Editor:Paketti:Convert All Samples to 8-bit` 🎹
- `Sample Editor:Paketti:Convert All Samples to 16-bit` 🎹
- `Sample Editor:Paketti:Convert All Samples to 24-bit` 🎹
- `Sample Editor:Paketti:Convert All Samples to 32-bit` 🎹

**Menu:** `Sample Editor:Paketti:Process:Convert All Samples to [8/16/24/32]-bit` 📋
(Also in Sample Navigator & Sample Mappings)

Batch converts all samples in instrument:
- Skips samples already at target bit depth
- Progress shows sample number and percentage
- Preserves all sample properties including keymapping

---

## Sample Truncater

### Truncate Sample (Duplicate Frames)
**Shortcuts:**
- `Sample Editor:Paketti:Truncate Sample 2x` ⌨️ 🎹 📋
- `Sample Editor:Paketti:Truncate Sample 4x` ⌨️ 🎹 📋
- `Sample Editor:Paketti:Truncate Sample 8x` ⌨️ 🎹 📋
- `Sample Editor:Paketti:Truncate Sample 16x` ⌨️ 🎹 📋
- `Sample Editor:Paketti:Truncate Sample 32x` ⌨️ 🎹 📋
- `Sample Editor:Paketti:Truncate Sample 64x` ⌨️ 🎹 📋
- `Sample Keyzones:Paketti:Truncate Sample 2x` through `64x` ⌨️

**MIDI Mappings:**
- `Paketti:Truncate Sample 2x` through `64x` 🎹

**Menu:** `Sample Editor:Paketti:Process:Truncate Sample [2x/4x/8x/16x/32x/64x]` 📋

**Lo-Fi Sample Rate Reducer Effect:**
- Duplicates each frame N times
- Creates "bit-crushed" / sample-rate-reduced sound
- **2x:** Subtle degradation
- **4x-8x:** Noticeable lo-fi character
- **16x-64x:** Extreme degradation, aliasing artifacts

**Technical:** This doesn't actually change sample rate - it duplicates frames to simulate lower sample rate playback.

**Use Cases:**
- **Lo-fi aesthetic** - 8-bit/chiptune sounds
- **Telephone effect** - Heavily truncated (32x-64x)
- **Retro textures** - 4x-8x sweet spot

---

## Sample Adjust Dialog

**Shortcuts:**
- `Sample Editor:Paketti:Paketti Sample Adjust Dialog...` ⌨️ 📋
- `Global:Paketti:Paketti Sample Adjust Dialog...` ⌨️ 📋

**Menu:** `Sample Editor:Paketti Gadgets:Paketti Sample Adjust Dialog...` 📋
**Menu:** `Sample Navigator:Paketti Gadgets:Paketti Sample Adjust Dialog...` 📋
**Menu:** `Sample Mappings:Paketti Gadgets:Paketti Sample Adjust Dialog...` 📋

**All-In-One Sample Conversion Dialog** with dropdowns for:

### Channel Conversion
**For Mono Samples:**
- Mono (unchanged)
- Stereo (duplicate to both)

**For Stereo Samples:**
- Mono (Mix) - Average both channels
- Mono (Keep Left) - Discard right
- Mono (Keep Right) - Discard left
- Stereo (unchanged)
- Mono→Stereo (Left only) - Right = silence
- Mono→Stereo (Right only) - Left = silence

### Sample Rate Conversion
8 presets: **11025, 22050, 32000, 44100, 48000, 88200, 96000, 192000 Hz**

### Bit Depth Conversion
4 options: **8-bit, 16-bit, 24-bit, 32-bit** (with TPDF dithering)

### Invert Channels
**For Mono:**
- Do nothing
- Invert

**For Stereo:**
- Do nothing
- Invert Left
- Invert Right
- Invert Both

**Atomic Operation:** All conversions happen in one operation - no quality loss from multiple passes!

---

## Build Sample Variants

**Shortcut:** `Pattern Editor:Paketti:Build Sample Variants` ⌨️ 🎹

**Menu:** `Pattern Editor:Paketti:Build Sample Variants` 📋

**MIDI:** `Paketti:Build Sample Variants` 🎹

**Creative Waveform Destruction** - Creates 4 variant samples with different bit-wrapping algorithms:

1. **Wrapped** - Signed-to-unsigned wrap-around distortion
2. **Unwrapped** - Unsigned-to-signed conversion
3. **Scaled Unsigned** - DC offset shift
4. **Scaled Signed** - Bipolar scaling distortion

Each variant is:
- Created as new sample
- Named with "(wrapped)", "(unwrapped)", etc suffix
- **Set to -INF dB** so you can fade them in manually
- Ready for layering with original

**Perfect for:**
- **Glitch aesthetics** - Digital artifacts
- **Sound design** - Instant variations
- **Layering** - Blend with original for texture
- **Experimental** - Unpredictable transformations

---

## Legend

**Symbols:**
- ⌨️ = Keyboard shortcut available
- 🎹 = MIDI mapping available
- 📋 = Menu entry available

← [Back to Main Manual](README.md)

# Sample Processing & Manipulation

← [Back to Main Manual](README.md)

Comprehensive guide to sample buffer manipulation, processing, and transformation features.

## Table of Contents
1. [Sample Buffer Rotation](#sample-buffer-rotation)
2. [Sample Buffer Flipping](#sample-buffer-flipping)
3. [Sample Buffer Selection](#sample-buffer-selection)
4. [Loop Manipulation](#loop-manipulation)
5. [Sample Trimming](#sample-trimming)
6. [Sample Duplication](#sample-duplication)
7. [Frequency Analysis](#frequency-analysis)

## Sample Buffer Rotation

### Rotate Sample Buffer (Fixed Amounts)
**Shortcuts:**
- `Sample Editor:Paketti:Rotate Sample Buffer Right 10` / `Left 10` ⌨️
- `Sample Editor:Paketti:Rotate Sample Buffer Right 100` / `Left 100` ⌨️
- `Sample Editor:Paketti:Rotate Sample Buffer Right 1000` / `Left 1000` ⌨️
- `Sample Editor:Paketti:Rotate Sample Buffer Right 10000` / `Left 10000` ⌨️

Rotates the sample buffer by moving audio from the beginning to the end (or vice versa). The audio wraps around - no data is lost.

**Use Cases:**
- Phase alignment - Nudge samples for better phase coherence
- Loop creation - Find natural loop points by rotating
- Rhythmic shifting - Move transients to different positions

### Rotate Sample Buffer (MIDI Knob Control)
**MIDI Mappings:**
- `Paketti:Rotate Sample Buffer Left/Right Fine x[Knob]` 🎹
- `Paketti:Rotate Sample Buffer Left/Right Coarse x[Knob]` 🎹

Real-time sample rotation with MIDI controller.

## Sample Buffer Flipping

### Flip Sample Buffer Selection
**Shortcuts:**
- `Sample Editor:Paketti:Flip Sample Buffer Selection Back` ⌨️
- `Sample Editor:Paketti:Flip Sample Buffer Selection Forward` ⌨️

**MIDI Mappings:**
- `Paketti:Flip Sample Buffer Selection Back [Trigger]` 🎹
- `Paketti:Flip Sample Buffer Selection Forward [Trigger]` 🎹

Flips (rotates) the audio in different sized chunks: 1/2, 1/4, 1/8, 1/16. Each press cycles through divisions.

## Loop Manipulation

### Sample Loop Cycler
**Shortcuts:**
- `Global:Paketti:Sample Loop Cycler (Forwards)` ⌨️
- `Global:Paketti:Sample Loop Cycler (Backwards)` ⌨️

Cycle: Off → Forward → Backward → PingPong → Off

### All Samples Loop Cycler
**Shortcuts:**
- `Global:Paketti:All Samples Loop Cycler (Forwards)` ⌨️
- `Global:Paketti:All Samples Loop Cycler (Backwards)` ⌨️

### Set Loop Mode (Sample Editor Context)
**Shortcuts:**
- `Sample Editor:Paketti:Set Loop Mode to 1 Off` ⌨️
- `Sample Editor:Paketti:Set Loop Mode to 2 Forward` ⌨️
- `Sample Editor:Paketti:Set Loop Mode to 3 Reverse` ⌨️
- `Sample Editor:Paketti:Set Loop Mode to 4 PingPong` ⌨️

### Sample Loop Halve/Double
**MIDI Mappings:**
- `Sample Editor:Paketti:Sample Loop Halve` 🎹
- `Sample Editor:Paketti:Sample Loop Double` 🎹

## Sample Trimming

### Trim by Half
**Shortcuts:**
- `Sample Editor:Paketti:Trim by Half (Selected Sample)` ⌨️
- `Global:Paketti:Trim by Half (All Samples in Instrument)` ⌨️

### FT2 Minimize Selected Sample
**Shortcut:** `Global:Paketti:FT2 Minimize Selected Sample` ⌨️

Trims the sample to end at the loop end point.

## Sample Duplication

### Duplicate and Reverse Instrument
**Shortcut:** `Global:Paketti:Duplicate and Reverse Instrument` ⌨️ 📋
**MIDI:** `Paketti:Duplicate and Reverse Instrument [Trigger]` 🎹

Creates a new instrument with all samples reversed.

### Duplicate Sample with Transpose
**MIDI Mappings:**
- `Paketti:Duplicate Selected Sample at -12 transpose` 🎹
- `Paketti:Duplicate Selected Sample at -24 transpose` 🎹
- `Paketti:Duplicate Selected Sample at +12 transpose` 🎹
- `Paketti:Duplicate Selected Sample at +24 transpose` 🎹

### Octave Slammer
**MIDI Mappings:**
- `Paketti:Octave Slammer (-3 +3 octaves)` 🎹
- `Paketti:Octave Slammer (-2 +2 octaves)` 🎹
- `Paketti:Octave Slammer (-1 +1 octaves)` 🎹

Creates multiple copies at different octave transposes simultaneously.

## Frequency Analysis

### Detect and Correct Single-Cycle Pitch
**Menu:** `Sample Editor:Paketti:Detect and Correct Single-Cycle Pitch` 📋

Analyzes single-cycle waveform and automatically sets correct transpose.

### Frequency to Note Analysis
**Menu:** `Sample Editor Ruler:Frequency to Note Analysis` 📋

Shows detected frequency, nearest MIDI note, cents deviation.


# Slicing Features

← [Back to Main Manual](README.md)

Complete guide to Paketti's sample slicing, slice manipulation, and slice marker management features.

## Table of Contents
1. [Real-Time Slice Monitoring](#real-time-slice-monitoring)
2. [BPM-Based Sample Slicer](#bpm-based-sample-slicer)
3. [Slice to Pattern Sequencer](#slice-to-pattern-sequencer)
4. [Slice Marker Management](#slice-marker-management)
5. [Slice Transient Detection](#slice-transient-detection)
6. [Slice Extraction](#slice-extraction)
7. [BeatSync & Slice Processing](#beatsync--slice-processing)
8. [Slice Randomization](#slice-randomization)
9. [Auto-Slice & Kit Creation](#auto-slice--kit-creation)

## Real-Time Slice Monitoring

**Keybindings:**
- `Global:Paketti:Real-Time Slice Monitoring (Toggle Start/Stop)` ⌨️
- `Global:Paketti:Real-Time Slice Monitoring (Start)` ⌨️
- `Global:Paketti:Real-Time Slice Monitoring (Stop)` ⌨️
- `Global:Paketti:Real-Time Slice Insert Marker at Current Position` ⌨️

**MIDI:**
- `Paketti:Real-Time Slice Monitoring Toggle` 🎹
- `Paketti:Real-Time Slice Insert Marker` 🎹

**Menu:**
- `Main Menu:Tools:Paketti:Real-Time Slice Monitoring (Toggle)` 📋
- `Sample Editor:Paketti:Real-Time Slice Monitoring (Toggle)` 📋
- `Sample Editor Ruler:Real-Time Slice Monitoring (Toggle)` 📋

Live slice marker insertion while sample plays. Perfect for manual slicing to audio playback - press keys in rhythm to create slice markers.

**How It Works:**
1. **Start:** Toggle Real-Time Slice Monitoring
2. **Playback:** Sample starts playing from beginning
3. **Insert Markers:** Press assigned key during playback to insert slice markers at current position
4. **Stop:** Toggle again or playback reaches end

**Features:**
- Continuous sample playback
- Frame-accurate marker insertion
- Visual selection follows playback
- Automatic cleanup of stuck notes
- Duplicate marker prevention (100-frame threshold)
- Auto-stops at sample end

**Use Cases:**
- **Manual slicing to rhythm:** Tap along with break, create perfect slices
- **Live performance prep:** Mark key hit points in real-time
- **DJ-style slicing:** Create slice points by feel
- **Drum break slicing:** Listen and slice in one pass

**Workflow:**
1. Load drum break
2. Enable Real-Time Slice Monitoring
3. Sample plays continuously
4. Press key on each kick/snare/hat
5. Markers inserted instantly
6. Disable monitoring
7. Result: Perfect slices at exact hit points

---

## BPM-Based Sample Slicer

**Keybinding:**
- `Global:Paketti:BPM-Based Sample Slicer Dialog...` ⌨️

**MIDI:**
- `Paketti:BPM-Based Sample Slicer Dialog` 🎹

**Menu:**
- `Main Menu:Tools:Paketti:BPM-Based Sample Slicer Dialog...` 📋

Intelligent slicer that creates slice markers based on BPM and beat divisions. Perfect for loops and rhythmic material with known tempo.

**Dialog Features:**
- **BPM Input:** Set sample's original BPM (20-999)
- **Beats per Slice:** Define slice timing (0.125-16 beats)
- **Preset Buttons:** Quick access to common divisions

**Preset Beat Values:**
- **1/6 beat** - Sextuplets
- **1/4 beat** - Sixteenth notes
- **1/3 beat** - Triplets
- **1/2 beat** - Eighth notes
- **1 beat** - Quarter notes
- **2 beats** - Half notes
- **4 beats** - Whole notes
- **8 beats** - Two measures

**Process:**
1. Enter sample BPM
2. Choose beats per slice
3. Click "Slice" button
4. Markers created at exact beat positions
5. BeatSync automatically configured

**Calculations:**
- **Frames per beat** = (Sample Rate × 60) / BPM
- **Slice spacing** = Frames per beat × Beats per slice
- **Total slices** = Sample length / Slice spacing

**Use Cases:**
- **Perfect loop slicing:** 4/8/16-beat loops sliced to quarter/eighth notes
- **Breakbeat slicing:** 2-bar break (8 beats) sliced to 1/2 beat = 16 slices
- **Tempo-locked slicing:** Maintain musical timing regardless of sample length
- **Pattern-ready kits:** Slices aligned to grid

**Example:** 140 BPM breakbeat, 2 bars = 8 beats
- Slice at 1 beat → 8 slices (one per beat)
- Slice at 1/2 beat → 16 slices (eighth notes)
- Slice at 1/4 beat → 32 slices (sixteenth notes)

---

## Slice to Pattern Sequencer

**Keybindings:**
- `Global:Paketti:Create Pattern Sequencer Patterns based on Slice Count with Automatic Slice Printing` ⌨️
- `Global:Paketti:Slice to Pattern Sequencer Dialog...` ⌨️

**Menu:**
- `Pattern Sequencer:Paketti Gadgets:Slice to Pattern Sequencer Dialog...` 📋
- `Instrument Box:Paketti:Slice to Pattern Sequencer Dialog...` 📋

Advanced pattern generator that writes slices to pattern sequencer with intelligent BPM, LPB, and pattern length configuration.

**Dialog Controls:**
- **BPM:** Set song tempo (20-999)
- **LPB:** Lines Per Beat (1-256)
- **Pattern Length:** Number of lines (1-512)
- **Real-time updates:** Changes apply immediately

**Features:**
- **Auto-spacing:** Calculates optimal slice spacing based on BPM/LPB
- **Pattern writing:** Creates notes for each slice
- **Track management:** Creates/selects appropriate track
- **Instrument mapping:** Maps slices to notes chromatically

**Process:**
1. Slice sample (any method)
2. Open Slice to Pattern Sequencer
3. Set BPM, LPB, pattern length
4. Click "Generate Pattern"
5. Slices written to pattern with proper timing

**Calculations:**
- Lines per beat = LPB
- Beats per pattern = Pattern Length / LPB
- Slice spacing = (Pattern Length / Number of Slices)

**Use Cases:**
- **Instant drum patterns:** Slice break → auto-generate pattern
- **Melodic sequencing:** Slice melody → write to pattern at tempo
- **Arrangement building:** Quick pattern creation from slices
- **Live set prep:** Generate playable patterns from one-shots

**Example:** 16 slices, LPB 4, 64-line pattern
- Slice 01 → Line 1
- Slice 02 → Line 5
- Slice 03 → Line 9
- ...creates evenly-spaced pattern

---

## Wipe&Slice&Write to Pattern

**Keybinding:**
- `Global:Paketti:Wipe&Slice&Write to Pattern` ⌨️

All-in-one pattern-based slicing workflow that clears existing slices, creates new slices mathematically based on pattern length, and writes slice notes to the pattern.

**Process:**
1. **Wipe:** Removes all existing slice markers
2. **Slice:** Divides sample into equal slices (one per pattern row, max 255)
3. **Write:** Writes slice notes to pattern sequentially

**Features:**
- Automatic slice count from pattern length
- Mathematical even distribution
- Instant pattern population
- Applies WipeSlices preferences to all samples
- Preserves original transpose
- Auto-configures interpolation (Sinc) and oversample

**Use Cases:**
- **Quick drum break sequencing:** Pattern length defines slice count
- **Instant playable breaks:** Load → slice → pattern-ready
- **Live performance prep:** Fast break setup for jamming

**Example:** 64-line pattern
- Creates 64 slices (max 255)
- Writes one slice per row
- Slice 01 → Row 1, Slice 02 → Row 2, etc.

---

## Slice Marker Management

### Add Slice Marker at Cursor
**Shortcut:** `Sample Editor:Paketti:Add Slice Marker at Cursor` ⌨️ 📋 🎹
**MIDI:** `Paketti:Add Slice Marker at Cursor` 🎹

Adds a slice marker at the current cursor position in the sample editor.

### Delete Slice Marker at Cursor
**Shortcut:** `Sample Editor:Paketti:Delete Slice Marker at Cursor` ⌨️ 📋 🎹
**MIDI:** `Paketti:Delete Slice Marker at Cursor` 🎹

Removes the slice marker closest to the cursor.

### Delete Slice Markers in Selection
**Keybindings:**
- `Sample Editor:Paketti:Delete Slice Markers in Selection` ⌨️
- `Global:Paketti:Delete Slice Markers in Selection` ⌨️

**MIDI:**
- `Paketti:Delete Slice Markers in Selection` 🎹

Removes all slice markers that fall within the current sample buffer selection range. Perfect for cleaning up unwanted slice markers in a specific region without affecting the rest of the sample.

**Workflow:**
1. Select region in sample editor
2. Trigger Delete Slice Markers in Selection
3. Only markers within selection are removed
4. Markers outside selection are preserved

### Delete All Slice Markers
**Shortcut:** `Sample Editor:Paketti:Delete All Slice Markers` ⌨️ 📋 🎹
**MIDI:** `Paketti:Delete All Slice Markers` 🎹

Removes all slice markers from the selected sample.

### Slice Marker Navigation
**Shortcuts:**
- `Sample Editor:Paketti:Go to Previous Slice` ⌨️ 🎹
- `Sample Editor:Paketti:Go to Next Slice` ⌨️ 🎹

**MIDI:**
- `Paketti:Go to Previous Slice` 🎹
- `Paketti:Go to Next Slice` 🎹

## Slice Transient Detection

### Slice (Auto-Detect Transients)
**Shortcut:** `Sample Editor:Paketti:Slice (Auto-Detect Transients)` ⌨️ 📋

**Smart Transient Detection:**
- No BeatSync: Uses default threshold
- BeatSync Enabled: Analyzes BeatSync Lines for optimal threshold

Perfect for drum loops, breaks, vocals, any rhythmic material.

### Slice with Threshold Dialog
**Shortcut:** `Sample Editor:Paketti:Slice with Threshold Dialog...` ⌨️ 📋 🎹
**MIDI:** `Paketti:Slice with Threshold Dialog` 🎹

Manual threshold control with real-time preview.

## Slice Extraction

### Slices to Instruments
**Shortcut:** `Sample Editor:Paketti:Slices to Instruments` ⌨️ 📋 🎹
**MIDI:** `Paketti:Slices to Instruments` 🎹

Creates a new instrument for each slice.

### Slices to Samples in Instrument
**Shortcut:** `Sample Editor:Paketti:Slices to Samples in Instrument` ⌨️ 📋 🎹
**MIDI:** `Paketti:Slices to Samples in Instrument` 🎹

Converts all slices to separate samples within the same instrument with keyzones.

## BeatSync & Slice Processing

### Slice & Set BeatSync Values
**Shortcut:** `Sample Editor:Paketti:Slice & Set BeatSync Values` ⌨️ 📋 🎹
**MIDI:** `Paketti:Slice & Set BeatSync Values` 🎹

All-in-one BeatSync slicer:
1. Auto-detects transients
2. Enables BeatSync
3. Calculates and sets BeatSync Lines
4. Configures slices for optimal playback

## Slice Randomization

### Randomize Selected Slice Pitch
**Shortcuts:**
- `Global:Paketti:Randomize Selected Slice Pitch x25` ⌨️ 🎹 - ±25 semitones
- `Global:Paketti:Randomize Selected Slice Pitch x12` ⌨️ 🎹 - ±12 semitones
- `Global:Paketti:Randomize Selected Slice Pitch x06` ⌨️ 🎹 - ±6 semitones
- `Global:Paketti:Randomize Selected Slice Pitch x03` ⌨️ 🎹 - ±3 semitones
- `Global:Paketti:Randomize Selected Slice Pitch x02` ⌨️ 🎹 - ±2 semitones
- `Global:Paketti:Randomize Selected Slice Pitch x01` ⌨️ 🎹 - ±1 semitone

**MIDI:** All variants available 🎹

### Randomize All Slices Pitch
**Shortcuts:**
- `Global:Paketti:Randomize All Slices Pitch x25` ⌨️ 🎹
- `Global:Paketti:Randomize All Slices Pitch x12` ⌨️ 🎹
- `Global:Paketti:Randomize All Slices Pitch x06` ⌨️ 🎹
- `Global:Paketti:Randomize All Slices Pitch x03` ⌨️ 🎹
- `Global:Paketti:Randomize All Slices Pitch x02` ⌨️ 🎹
- `Global:Paketti:Randomize All Slices Pitch x01` ⌨️ 🎹

**MIDI:** All variants available 🎹

Applies random pitch to ALL slices. Each slice gets its own random transpose.

## Slice Distribution to Pattern

### Random Slice Distribution

**Keybinding:**
- `Pattern Editor:Paketti:Random Slice Distribution` ⌨️

**MIDI:**
- `Paketti:Random Slice Distribution` 🎹

**Menu:**
- `Pattern Editor:Paketti..:Slices..:Random Slice Distribution` 📋

Distributes slices randomly across the selected track in the current pattern with equal spacing. Perfect for creating unpredictable, chaotic drum patterns from sliced breaks.

**Features:**
- Shuffles slice order using Fisher-Yates algorithm
- Equal spacing between slices
- Supports both note-based and 0Sxx effect methods
- Auto-detects when note range exceeds B-9 and uses 0Sxx

**Workflow:**
1. Load sliced instrument
2. Select track in pattern
3. Trigger Random Slice Distribution
4. Slices written in random order with equal spacing

### Equal Slice Distribution

**Keybinding:**
- `Pattern Editor:Paketti:Equal Slice Distribution` ⌨️

**MIDI:**
- `Paketti:Equal Slice Distribution` 🎹

**Menu:**
- `Pattern Editor:Paketti..:Slices..:Equal Slice Distribution` 📋

Distributes slices in sequential order across the selected track with equal spacing. Creates predictable, evenly-spaced slice playback.

**Features:**
- Maintains slice order (0, 1, 2, 3...)
- Equal spacing between slices
- Supports both note-based and 0Sxx effect methods
- Auto-detects when note range exceeds B-9 and uses 0Sxx

**Example:** 8 slices, 64-line pattern
- Spacing = 8 lines
- Slice 0 → Line 1
- Slice 1 → Line 9
- Slice 2 → Line 17
- ...creates evenly-distributed pattern

## Rhythmic Slice DrumChain

Advanced slice chain generator that takes slice timing from a sliced instrument and applies it to new samples. Creates new instruments with rhythmic patterns preserved.

### Create Rhythmic Slice DrumChain with Current Slices

**Keybindings:**
- `Global:Paketti:Create New Rhythmic Slice DrumChain with Current Slices` ⌨️
- `Sample Editor:Paketti:Create New Rhythmic Slice DrumChain with Current Slices` ⌨️

**Menu:**
- `Sample Editor:Paketti:Create New Rhythmic Slice DrumChain with Current Slices` 📋
- `Instrument Box:Paketti:Create New Rhythmic Slice DrumChain with Current Slices` 📋

Loads user-selected samples and chains them using the current instrument's slice timing. Each slice gets filled with a new sample truncated to match the slice duration.

**Process:**
1. Current instrument must have slices
2. User selects samples to load
3. Samples are matched to slice durations
4. New instrument created with chained sample
5. Original slice timing preserved
6. Automatic Pakettification applied

**Features:**
- Sample rate/bit depth/channel conversion
- Intelligent truncation for large samples
- Silent sample detection and skipping
- Cycling through samples if fewer than slices
- 10-frame fadeout on each slice
- Applies Paketti loader settings

### Create Rhythmic Slice DrumChain (Normalized)

**Keybindings:**
- `Global:Paketti:Create New Rhythmic Slice DrumChain with Current Slices (Normalized)` ⌨️
- `Sample Editor:Paketti:Create New Rhythmic Slice DrumChain with Current Slices (Normalized)` ⌨️

**Menu:**
- `Sample Editor:Paketti:Create New Rhythmic Slice DrumChain with Current Slices (Normalized)` 📋
- `Instrument Box:Paketti:Create New Rhythmic Slice DrumChain with Current Slices (Normalized)` 📋

Same as regular DrumChain but normalizes each slice independently for consistent loudness.

### Create Rhythmic Slice DrumChain from XRNI

**Keybindings:**
- `Global:Paketti:Create New Rhythmic Slice DrumChain from XRNI` ⌨️
- `Sample Editor:Paketti:Create New Rhythmic Slice DrumChain from XRNI` ⌨️

**Menu:**
- `Sample Editor:Paketti:Create New Rhythmic Slice DrumChain from XRNI` 📋
- `Instrument Box:Paketti:Create New Rhythmic Slice DrumChain from XRNI` 📋

Uses slices from a loaded XRNI file instead of user-selected samples. Cycles through XRNI slices to match current instrument's slice timing.

**Process:**
1. Current instrument must have slices
2. User selects XRNI file (must contain slices)
3. XRNI slices extracted and converted
4. Cycles through XRNI slices to fill all positions
5. New instrument created with chained sample

**Use Cases:**
- **Break variations:** Apply drum break timing to synth hits
- **Kit morphing:** Combine different kit slice timings
- **Texture layering:** Apply vocal slice timing to FX samples

### Create Rhythmic Slice DrumChain from XRNI (Normalized)

**Keybindings:**
- `Global:Paketti:Create New Rhythmic Slice DrumChain from XRNI (Normalized)` ⌨️
- `Sample Editor:Paketti:Create New Rhythmic Slice DrumChain from XRNI (Normalized)` ⌨️

**Menu:**
- `Sample Editor:Paketti:Create New Rhythmic Slice DrumChain from XRNI (Normalized)` 📋
- `Instrument Box:Paketti:Create New Rhythmic Slice DrumChain from XRNI (Normalized)` 📋

Same as XRNI DrumChain but normalizes each slice independently.

### Create Rhythmic Slice DrumChain (Randomize)

**Keybindings:**
- `Global:Paketti:Create New Rhythmic Slice DrumChain with Current Slices (Randomize)` ⌨️
- `Sample Editor:Paketti:Create New Rhythmic Slice DrumChain with Current Slices (Randomize)` ⌨️

**Menu:**
- `Sample Editor:Paketti:Create New Rhythmic Slice DrumChain with Current Slices (Randomize)` 📋
- `Instrument Box:Paketti:Create New Rhythmic Slice DrumChain with Current Slices (Randomize)` 📋

Randomly selects samples from a folder instead of user selection. Uses Fisher-Yates shuffle for true randomization.

**Process:**
1. Current instrument must have slices
2. User selects folder
3. All audio files found recursively
4. Files randomized using Fisher-Yates
5. Random samples matched to slice durations
6. New instrument created

**Features:**
- Recursive folder scanning
- True random shuffle (not pseudo-random)
- Silent sample detection and skipping
- Automatic cycling if fewer files than slices

**Use Cases:**
- **Instant variety:** Create multiple variations from same timing
- **Sample pack exploration:** Quick audition of folder contents
- **Happy accidents:** Discover unexpected combinations

### Create Rhythmic Slice DrumChain (Randomize) (Normalized)

**Keybindings:**
- `Global:Paketti:Create New Rhythmic Slice DrumChain with Current Slices (Randomize) (Normalized)` ⌨️
- `Sample Editor:Paketti:Create New Rhythmic Slice DrumChain with Current Slices (Randomize) (Normalized)` ⌨️

**Menu:**
- `Sample Editor:Paketti:Create New Rhythmic Slice DrumChain with Current Slices (Randomize) (Normalized)` 📋
- `Instrument Box:Paketti:Create New Rhythmic Slice DrumChain with Current Slices (Randomize) (Normalized)` 📋

Same as Randomize DrumChain but normalizes each slice independently.

**Technical Details:**
- Preserves slice timing frame-accurately
- Converts sample formats automatically (rate/depth/channels)
- Applies WipeSlices preferences
- Intelligently truncates large samples
- Chunked processing for performance
- 10-frame fadeout prevents clicks

## Auto-Slice & Kit Creation

### Custom Auto-Slice Kit
**Shortcut:** `Global:Paketti:Custom Auto-Slice Kit` ⌨️ 📋
**Menu:** `Main Menu:File:Load:Custom Auto-Slice Kit...` 📋

Batch slicing workflow:
1. Select folder of audio files
2. Load each file as instrument
3. Auto-detect transients and create slices
4. Configure BeatSync for each instrument

# Samples and Instruments

← [Back to Main Manual](README.md)

This section covers all Paketti features related to Sample and Instrument management, manipulation, and configuration.

## Table of Contents
1. [Sample Loop Settings](#sample-loop-settings)
2. [Sample Transpose & Pitch](#sample-transpose--pitch)
3. [Sample Panning & Volume](#sample-panning--volume)
4. [Sample Playback Quality](#sample-playback-quality)
5. [Sample BeatSync](#sample-beatsync)
6. [Sample Behavior Settings](#sample-behavior-settings)
7. [Sample New Note Action](#sample-new-note-action-nna)
8. [Sample Mute Groups](#sample-mute-groups)
9. [Slice Settings](#slice-settings)
10. [Instrument-Level Operations](#instrument-level-operations)
11. [Track Volume Control](#track-volume-control)
12. [Output Routing](#output-routing)
13. [Studio Session Workflow](#studio-session-workflow)
14. [LPB Control](#lpb-control)

## Sample Loop Settings

### Set Selected Sample Loop Release On/Off
**Shortcut:** `Global:Paketti:Set Selected Sample Loop Release On/Off`

### Set Selected Sample One-Shot On/Off
**Shortcut:** `Global:Paketti:Set Selected Sample One-Shot On/Off`

### Set Selected Sample Loop Mode
**Shortcuts:**
- `Global:Paketti:Set Selected Sample Loop 1 (Off)`
- `Global:Paketti:Set Selected Sample Loop 2 (Forward)`
- `Global:Paketti:Set Selected Sample Loop 3 (Backward)`
- `Global:Paketti:Set Selected Sample Loop 4 (PingPong)`

## Sample Transpose & Pitch

### Sample Transpose
**Shortcuts:**
- `Global:Paketti:Set Selected Sample Transpose (-1)` - Decrease by 1 semitone
- `Global:Paketti:Set Selected Sample Transpose (+1)` - Increase by 1 semitone
- `Global:Paketti:Set Selected Sample Transpose (-12)` - Decrease by 1 octave
- `Global:Paketti:Set Selected Sample Transpose (+12)` - Increase by 1 octave
- `Global:Paketti:Selected Sample Transpose (0)` - Reset to 0

Range: -120 to +120 semitones.

### Sample Finetune
**Shortcuts:**
- `Global:Paketti:Set Selected Sample Finetune (-1)` - Decrease by 1
- `Global:Paketti:Set Selected Sample Finetune (+1)` - Increase by 1
- `Global:Paketti:Set Selected Sample Finetune (-10)` - Decrease by 10
- `Global:Paketti:Set Selected Sample Finetune (+10)` - Increase by 10
- `Global:Paketti:Set Selected Sample Finetune (0)` - Reset to 0

Range: -127 to +127.

## Sample Panning & Volume

### Sample Panning
**Shortcuts:**
- `Global:Paketti:Set Selected Sample Panning 0.5 (Center)` - Center
- `Global:Paketti:Set Selected Sample Panning 0.0 (Left)` - Hard left
- `Global:Paketti:Set Selected Sample Panning 1.0 (Right)` - Hard right
- `Global:Paketti:Set Selected Sample Panning (+0.01)` - Nudge right
- `Global:Paketti:Set Selected Sample Panning (-0.01)` - Nudge left

Range: 0.0 (left) to 1.0 (right).

### Sample Volume
**Shortcuts:**
- `Global:Paketti:Set Selected Sample Volume (+0.01)` - Increase
- `Global:Paketti:Set Selected Sample Volume (-0.01)` - Decrease
- `Global:Paketti:Set Selected Sample Volume Reset (0.0dB)` - Unity gain

Range: 0.0 to 4.0 (0.0dB = 1.0).

## Sample Playback Quality

### Interpolation Mode
**Shortcuts:**
- `Global:Paketti:Set Selected Sample Interpolation to 1 (None)`
- `Global:Paketti:Set Selected Sample Interpolation to 2 (Linear)`
- `Global:Paketti:Set Selected Sample Interpolation to 3 (Cubic)`
- `Global:Paketti:Set Selected Sample Interpolation to 4 (Sinc)` - Highest quality

### Oversample
**Shortcuts:**
- `Global:Paketti:Set Selected Sample Oversample On`
- `Global:Paketti:Set Selected Sample Oversample Off`
- `Global:Paketti:Set Selected Sample Oversample On/Off` - Toggle

## Sample BeatSync

### BeatSync Mode
**Shortcuts:**
- `Global:Paketti:Set Selected Sample Beatsync 1 (Repitch)`
- `Global:Paketti:Set Selected Sample Beatsync 2 (Time-Stretch Percussion)`
- `Global:Paketti:Set Selected Sample Beatsync 3 (Time-Stretch Texture)`

### BeatSync Mode with Toggle
**Shortcuts:**
- `Global:Paketti:Set Selected Sample Beatsync On/Off 1 (Repitch)`
- `Global:Paketti:Set Selected Sample Beatsync On/Off 2 (Time-Stretch Percussion)`
- `Global:Paketti:Set Selected Sample Beatsync On/Off 3 (Time-Stretch Texture)`

### BeatSync Enable/Disable
**Shortcut:** `Global:Paketti:Set Selected Sample Beatsync On/Off`

### BeatSync Lines
**Shortcuts:**
- `Global:Paketti:Set Selected Sample Beatsync Line (+1)` ⌨️
- `Global:Paketti:Set Selected Sample Beatsync Line (-1)` ⌨️
- `Global:Paketti:Set Selected Sample Beatsync Line (Power of Two Above)` ⌨️
- `Global:Paketti:Set Selected Sample Beatsync Line (Power of Two Below)` ⌨️
- `Global:Paketti:Double Beatsync Line` ⌨️ 📋
- `Global:Paketti:Halve Beatsync Line` ⌨️ 📋

Range: 1-512 lines.

## Sample Behavior Settings

### Autofade
**Shortcut:** `Global:Paketti:Set Selected Sample Autofade On/Off`

### Autoseek
**Shortcut:** `Global:Paketti:Set Selected Sample Autoseek On/Off`

## Sample New Note Action (NNA)

**Shortcuts:**
- `Global:Paketti:Set Selected Sample NNA to 1 (Cut)` ⌨️
- `Global:Paketti:Set Selected Sample NNA to 2 (Note-Off)` ⌨️
- `Global:Paketti:Set Selected Sample NNA to 3 (Continue)` ⌨️

### Set All Instruments Samples NNA to Cut
**Shortcut:** `Global:Paketti:Set All Instruments Samples NNA to Cut` ⌨️ 📋
**Menu:** `Main Menu:Tools:Paketti:Instruments:Set All Instruments Samples NNA to Cut` 📋

## Sample Mute Groups

**Shortcuts:**
- `Global:Paketti:Set Selected Sample Mute Group to 0 (Off)`
- `Global:Paketti:Set Selected Sample Mute Group to 1` through `9`
- `Global:Paketti:Set Selected Sample Mute Group to A` through `F`

## Slice Settings

### Slice Drumkit (Percussion)
**Shortcut:** `Sample Editor:Paketti:Slice Drumkit (Percussion)` ⌨️

Optimized settings: BeatSync enabled (Percussion), Forward loop, Mute group 1, Autoseek on.

### Slice Drumkit (Texture)
**Shortcut:** `Sample Editor:Paketti:Slice Drumkit (Texture)` ⌨️

Optimized settings: BeatSync enabled (Texture), Forward loop, Mute group 1, Autoseek on.

## Instrument-Level Operations

### Transpose Dialog
**Shortcuts:**
- `Global:Paketti:Paketti Instrument Transpose Dialog...` ⌨️ 📋
**Menu:** `Instrument Box:Paketti:Transpose Dialog...` 📋

### Global Volume Adjustment Dialog
**Shortcut:** `Global:Paketti:Paketti Global Volume Adjustment...` ⌨️ 📋
**Menu:** `Instrument Box:Paketti Gadgets:Paketti Global Volume Adjustment...` 📋

### Duplicate and Reverse Instrument
**Shortcut:** `Global:Paketti:Duplicate and Reverse Instrument` ⌨️ 📋
**MIDI:** `Paketti:Duplicate and Reverse Instrument` 🎹

### Duplicate All Samples with Transpose
**Shortcuts:**
- `Global:Paketti:Duplicate All Samples at -36 Transpose` ⌨️ 📋
- `Global:Paketti:Duplicate All Samples at -24 Transpose` ⌨️ 📋
- `Global:Paketti:Duplicate All Samples at -12 Transpose` ⌨️ 📋
- `Global:Paketti:Duplicate All Samples at +12 Transpose` ⌨️ 📋
- `Global:Paketti:Duplicate All Samples at +24 Transpose` ⌨️ 📋
- `Global:Paketti:Duplicate All Samples at +36 Transpose` ⌨️ 📋

## Track Volume Control

### Selected Track Volume
**Shortcuts:**
- `Global:Paketti:Set Selected Track Volume to -INF dB`
- `Global:Paketti:Set Selected Track Volume to 0.0dB`

### Master Track Volume
**Shortcuts:**
- `Global:Paketti:Set Master Track Volume to -INF dB`
- `Global:Paketti:Set Master Track Volume to 0.0dB`
- `Global:Paketti:Change Master Track Volume by +0.1dB`
- `Global:Paketti:Change Master Track Volume by -0.1dB`

Range: -INF to +3.0dB.

## Output Routing

### Cycle Output Routing
**Shortcuts:**
- `Global:Paketti:Selected Track Output Routing +1`
- `Global:Paketti:Selected Track Output Routing -1`
- `Global:Paketti:Master Track Output Routing +1`
- `Global:Paketti:Master Track Output Routing -1`

**MIDI Mappings:**
- `Paketti:Selected Track Output Routing +1 x[Trigger]`
- `Paketti:Master Track Output Routing +1 x[Trigger]`

### Direct Output Routing Selection
**Shortcuts:** (00-63 available)
- `Global:Paketti:Set Selected Track Output Routing 00` through `63`
- `Global:Paketti:Set Master Track Output Routing 00` through `63`

## Studio Session Workflow

### Selected Track to Mono and Hard Pan
**Shortcuts:**
- `Global:Paketti:Selected Track to Mono and Hard Left` - Mono sum, pan hard left
- `Global:Paketti:Selected Track to Mono and Hard Right` - Mono sum, pan hard right

**MIDI:**
- `Paketti:Selected Track to Mono and Hard Left`
- `Paketti:Selected Track to Mono and Hard Right`

Inserts Mono device (Stereo Expander) and sets hard panning for dual-mono studio setups.

### Master Track to Mono and Hard Pan
**Shortcuts:**
- `Global:Paketti:Master Track to Mono and Hard Left`
- `Global:Paketti:Master Track to Mono and Hard Right`

**MIDI:**
- `Paketti:Master Track to Mono and Hard Left`
- `Paketti:Master Track to Mono and Hard Right`

## LPB (Lines Per Beat) Control

### Double/Halve LPB
**Shortcuts:**
- `Global:Paketti:Double LPB` - Multiply by 2
- `Global:Paketti:Halve LPB` - Divide by 2
- `Global:Paketti:Double Double LPB` - Multiply by 4
- `Global:Paketti:Halve Halve LPB` - Divide by 4

Constraints: LPB 1-256, halving only works with even values.

---

# Generative Tools

## Musical Chord Progression Arpeggiator

**Source:** `PakettiArpeggiator.lua` | **Inspired by Jake Albaugh's CodePen**

Advanced musical arpeggiator with chord progression composer, real-time playback, and pattern writing. Features per-chord modal interchange, visual pattern preview, and intelligent chord detection from existing patterns.

### Opening the Arpeggiator

**Shortcuts:**
- `Global:Paketti:Musical Chord Progression Arpeggiator...` ⌨️
- `Pattern Editor:Paketti Gadgets:Musical Chord Progression Arpeggiator...` 📋

**MIDI:** `Paketti:Musical Chord Progression Arpeggiator...` 🎹

**Menu:**
- `Main Menu:Tools:Paketti Gadgets:Musical Chord Progression Arpeggiator...` 📋
- `Pattern Editor:Paketti Gadgets:Musical Chord Progression Arpeggiator...` 📋

### Musical Features

**Supported Scales & Modes:**
- **Church Modes:** Ionian, Dorian, Phrygian, Lydian, Mixolydian, Aeolian, Locrian
- **Standard:** Major, Minor
- **Advanced:** Melodic Minor, Harmonic Minor

**Automatic Triad Generation:**
- Major (maj), Minor (min), Diminished (dim), Augmented (aug)
- Triads generated automatically based on scale degree
- Roman numeral notation (I, II, III, IV, V, VI, VII)

**Per-Chord Modal Interchange:**
- Each of 8 chord positions can have its own mode
- Allows complex harmonic progressions (e.g., position 1=Ionian, position 5=Mixolydian)
- Creates modal mixture and borrowing

### Arpeggio Pattern Engine

**Pattern Types:**
- **Straight:** All permutations of step order (e.g., 0123, 0132, 0213...)
- **Looped:** Straight pattern + reverse (e.g., 0123210)

**Steps:** 3-6 notes per arpeggio

**Visual Pattern Preview:**
- 15x canvas visualizations per row
- Orange highlighting for selected pattern
- Clickable pattern selection

### Playback Modes

**Space Bar - Next Chord Preview:**
- Plays one chord with bass note + arpeggiated notes
- Advances through 8-chord progression
- Automatic note-off after arpeggio completes

**Shift+Space - Continuous Playback:**
- Plays entire 8-chord progression in loop
- Real-time button highlighting (deep purple)
- Continues until stopped or ESC pressed

**BPM Options:**
- Current (uses song BPM)
- Fixed: 45, 60, 75, 90, 105, 120, 135, 150

**Timing:**
- Synchronized to song LPB
- Each arpeggio step is fraction of one line
- Capped to 16 steps maximum for performance

### Chord Progression Composer

**8-Position Grid:**
- 8 vertical columns (one per chord position)
- 7 buttons per column (I-VII scale degrees)
- Click to change chord at that position
- Clicking plays preview of that chord

**Live Editing During Playback:**
- Change chords while continuous playback is running
- Immediately updates harmonic progression
- No dialog rebuild required

**Default Progression:** I-III-VII-IV-V-III-VI-II

### Read from Pattern

**Intelligent Chord Detection:**
- Scans selected track (or specified track number)
- Detects key AND mode simultaneously
- Identifies chord progressions by matching:
  - Bass notes (lowest note in chord)
  - Triad tones (root, third, fifth matching)
  - Diatonic extensions (scale tones)
  - Out-of-scale notes (penalties)

**Works with:**
- Multi-column chords (reads all visible note columns)
- Slash chords and inversions (uses tonal center detection)
- Complex voicings (scores all chord tones)

**Track Selection:**
- Read from Current Track button
- Read Track valuebox (specify track 1-N)
- Read button (analyze and import)

### Write to Pattern

**Smart Pattern Writing:**
- Writes 8 chords to pattern starting at cursor
- 2 lines per chord (note-ons + note-offs)
- Automatically adjusts visible note columns
- Enables delay column for timing

**Delay Column Arpeggio:**
- Calculates 256-tick delay increments
- Each note in different column with precise delay
- Creates arpeggiated effect within single line

**Requirements:**
- Sequencer track selected
- Sufficient pattern lines (16 minimum for 8 chords)

### Key Handler

**ESC:** Stop all playback, close dialog (or just stop if playing)
**Space:** Next chord preview
**Shift+Space:** Toggle continuous playback

### Technical Details

**Performance Optimizations:**
- No dialog rebuilds during playback
- Real-time button color updates without reconstruction
- 40ms highlight timer (25fps)
- Unique note deduplication prevents crashes

**Note Handling:**
- Bass note one octave below chord root
- Arpeggio notes extend across multiple octaves
- Octave base adjustable (default: 4)
- MIDI note-on/note-off with velocity control

### Use Cases

**Composition:**
- Explore chord progressions quickly
- Test modal interchange ideas
- Generate harmonic frameworks

**Live Performance:**
- Play arpeggiated backing tracks
- Real-time chord switching
- Improvise over generated progressions

**Learning:**
- Study scale-chord relationships
- Understand modal harmony
- Visualize arpeggio patterns

---

## Paketti Gater

**Source:** `PakettiGater.lua`

Advanced 16/32-step gate sequencer with per-step note/volume/panning/retrig control, visual grid editor, and intelligent pattern writing.

### Opening the Gater

**Shortcuts:**
- `Global:Paketti:Paketti Gater Dialog...` ⌨️

**MIDI:**
- `Paketti:Paketti Gater Dialog...` 🎹 (Toggle dialog)
- `Paketti:Paketti Gater:Toggle Step Mode (16/32)` 🎹 (Switch 16↔32 steps)

### Step Grid Interface

**16 or 32 Steps:**
- Switch between 16-step and 32-step modes
- Each step represents one line in pattern
- Visual checkbox grid for easy editing

**Per-Step Controls:**
1. **On/Off Checkbox** - Enable/disable step
2. **Note Selector** - Choose pitch for this step
3. **Volume Control** - Set step volume (00-80 hex)
4. **Panning Control** - Left/Center/Right per step
5. **Retrig Control** - Retriggering effect per step

### Panning System

**Panning Intensity Slider (0-100%):**
- Adjusts stereo width globally
- Updates existing pattern data in real-time
- Affects both Panning Column and 0P FX commands

**Panning Column Format:**
- Left: 00-3F
- Center: 40
- Right: 41-80

**FX Column Format (0P command):**
- Left: 00-7F
- Right: 80-FF

**Real-Time Updates:**
- Changing intensity recalculates all panning values in current pattern
- Scans and replaces old panning with new values
- Shows count of updated values

### Retrig System

**Retrig Options:** 1-9 retrigs per step
- Uses Renoise Panning Column retrig format: R1-R9
- Pattern Editor displays as R1, R2, etc.
- Creates rhythmic subdivisions within step

### Pattern Writing Modes

**Write Note Column:**
- Writes to note columns only
- Volume column for step volumes
- Panning column for panning/retrig

**Write FX Column:**
- Writes notes + volumes to note columns
- Uses Effect Column for panning (0P command)
- Better for complex effect chain routing

**Randomize Feature:**
- Randomizes all enabled steps
- Random notes, volumes, panning
- Maintains step on/off state

### Grid Visualization

**25fps Update Rate:**
- Real-time visual feedback
- Smooth cursor tracking
- Responsive UI without performance impact

### Note Range

**Available Notes:**
- C-0 through B-9 (full MIDI range)
- Dropdown selector per step
- Easy octave/note selection

### Use Cases

**Rhythmic Gating:**
- Create gated synth patterns
- Tremolo/volume patterns
- Rhythmic automation

**Melodic Sequencing:**
- Step-based melody writing
- Bassline patterns
- Lead sequences

**Euclidean Rhythms:**
- Enable specific steps for rhythmic patterns
- Retrig for hi-hat patterns
- Panning for stereo movement

**Live Performance:**
- Quick pattern generation
- Real-time randomization
- MIDI-mappable toggle

---

## Enhanced Phrase Generator

**Source:** `PakettiPhraseGenerator.lua` | **Depends on:** `PakettiSteppers.lua`

Comprehensive phrase creation tool with 28 musical scales, multiple rhythm patterns, note ordering options, and stepper-based editing interface.

### Opening the Generator

**Shortcut:** `Global:Paketti:Paketti Enhanced Phrase Generator` ⌨️

### Musical Scales (28 Total)

**Western Scales:**
- All Notes, Minimal (C Major), Chromatic
- Major, Natural Minor, Harmonic Minor, Melodic Minor
- Pentatonic, Blues

**Modal Scales:**
- Dorian, Phrygian, Lydian, Mixolydian, Locrian

**Exotic Scales:**
- Whole Tone, Diminished
- Persian, Japanese, Gamelan
- Hungarian, Romanian, Spanish
- Enigmatic, Neapolitan, Prometheus
- Algerian, Blue1, Blue2

**Scale Display:**
- Full scale name shown
- Root note adjustable via transpose
- Notes displayed in Renoise notation (c-4, d-4, etc.)

### Note Ordering Options

**Available Orders:**
1. **Random** - Unpredictable melodic patterns
2. **Ascending** - Low to high
3. **Descending** - High to low
4. **Ascending + Random** - Mix of both
5. **Descending + Random** - Mix of both

**Status Display:**
- Current order shown in dialog
- Real-time updates when changed

### Rhythm Patterns

**Rhythm Units:** 1/1, 1/2, 1/4, 1/8, 1/16, 1/32, 1/64

**Pattern Types:**
- Straight (even rhythm)
- Dotted (swing feel)
- Triplet (3-feel)
- Custom patterns via stepper interface

### Stepper Integration

**Shared with PakettiSteppers.lua:**
- DRY (Don't Repeat Yourself) approach
- Modifications in PakettiSteppers automatically appear here
- Consistent UI across tools

**Stepper Features:**
- Visual grid for note/rhythm editing
- Per-step enable/disable
- Multiple rhythm patterns
- Copy/paste patterns

### Phrase Creation

**Auto-Initialization:**
- Creates new phrase if none exists
- Applies Paketti phrase settings
- Sets appropriate length based on rhythm unit

**Phrase Settings:**
- Custom naming
- Autoseek configuration
- Column visibility
- Note/effect column counts
- LPB and length
- Looping mode

### Transpose Control

**Range:** -120 to +120 semitones

**Safe Transpose:**
- Clamped to valid MIDI range
- No crashes from extreme values
- Affects entire phrase

**Instrument-Level:**
- Changes root pitch of scale
- All generated notes transposed accordingly

### Generation Process

1. **Select Scale** - Choose from 28 options
2. **Choose Order** - How notes are arranged
3. **Set Rhythm** - Pick timing pattern
4. **Configure Stepper** - Fine-tune individual steps
5. **Generate** - Creates phrase in current instrument
6. **Edit** - Modify using phrase editor

### Advanced Features

**Future-Proof Design:**
- Variables for phrase script syntax
- Pattern field/event field/unit field abstraction
- Return type configuration

**Instrument Switching Protection:**
- Detects rapid instrument changes
- Prevents conflicts during generation
- Safe transpose handling

### Use Cases

**Quick Phrase Creation:**
- Generate melodic patterns instantly
- Test different scales
- Rapid prototyping

**Algorithmic Composition:**
- Random note orders for inspiration
- Combine scales with rhythms
- Generate variations

**Learning Tool:**
- Explore exotic scales
- Understand modal harmony
- Study rhythmic patterns

**Live Performance:**
- Quick phrase generation on-the-fly
- Change scales mid-performance
- Generate backing patterns

---

## Paketti Preferences

**Source:** `Paketti0G01_Loader.lua`

**Shortcut:** `Global:Paketti:Show Paketti Preferences...` ⌨️

Central configuration dialog for all Paketti features. Contains hundreds of preferences organized by category.

### Preference Categories

**Sample Processing:**
- RePitch Enhanced mode toggle
- Waveform writer hex mode
- Auto disk browser behavior

**Stepper Configuration:**
- Global step count (16/32/64)
- Default stepper behaviors

**Tuning System:**
- User-defined tunings
- Auto input tuning
- Custom tuning files

**UI Preferences:**
- Minimized pitch control
- Column widths
- Spacing adjustments

**Gater Settings:**
- Panning intensity default
- Grid visualization options

**Polyend Integration:**
- Polyend root path
- Local backup paths
- Use local backup toggle

**External Tools:**
- eSpeak executable paths (Windows/Mac/Linux)
- Sample rate preferences (22050-192000 Hz)
- Filter type defaults

**Plugin/Device Paths:**
- Custom VST/AU plugin paths
- Favorite devices
- Device chain templates

### Preference Storage

**Document-Based:**
- ObservableString/ObservableNumber types
- Real-time updates across Paketti
- Persistent across Renoise sessions

**Plugin Entry Management:**
- Add/remove custom plugins
- Define device paths
- Organize favorites

**Filter Presets:**
- 22 filter types available
- LP Clean, LP K35, LP Moog, LP Diode
- HP variants, Bandpass, Comb
- Decimator, Distortion, AM modulators

### Integration

**All Paketti Tools:**
- Preferences affect all features
- Consistent behavior across dialogs
- Global defaults

**Platform-Specific:**
- Windows/Mac/Linux path detection
- Appropriate executable defaults
- Cross-platform compatibility

---

# Sample Processing Tools

## AKWF Wavetable Generator

**Source:** `PakettiWavetabler.lua`

Creates random wavetables from Adventure Kid Waveforms (AKWF) library - 4,000+ single-cycle waveforms combined into seamless wavetables.

### Random Wavetable Creation

**Shortcuts (Non-Looped):**
- `Global:Paketti:Create Random AKWF Wavetable (032)` ⌨️ - 32 cycles
- `Global:Paketti:Create Random AKWF Wavetable (064)` ⌨️ - 64 cycles
- `Global:Paketti:Create Random AKWF Wavetable (128)` ⌨️ - 128 cycles
- `Global:Paketti:Create Random AKWF Wavetable (256)` ⌨️ - 256 cycles

**Shortcuts (Looped):**
- `Global:Paketti:Create Random AKWF Wavetable (032,loop)` ⌨️ - 32 cycles + loop
- `Global:Paketti:Create Random AKWF Wavetable (064,loop)` ⌨️ - 64 cycles + loop
- `Global:Paketti:Create Random AKWF Wavetable (128,loop)` ⌨️ - 128 cycles + loop
- `Global:Paketti:Create Random AKWF Wavetable (256,loop)` ⌨️ - 256 cycles + loop

### Generation Process

1. **Select Random Cycles:** Picks N random single-cycle waveforms from AKWF library
2. **Combine into Buffer:** Concatenates all cycles into single sample
3. **Set Loop Points:**
   - **Non-looped:** Loop covers entire wavetable
   - **Looped:** Loop covers first single cycle only
4. **Apply Template:** Uses Paketti XRNI template with macros
5. **Name Instrument:** "Random AKWF Wavetable (064+loop)" format

### Wavetable Control Dialog

**Menu:** `Main Menu:Tools:Paketti:.WT:Wavetable Control...` 📋

Comprehensive wavetable control interface for managing, navigating, and editing wavetables.

### Import/Export Wavetables

**Menu:**
- `Main Menu:Tools:Paketti:.WT:Import Wavetable...` 📋
- `Main Menu:Tools:Paketti:.WT:Export Wavetable...` 📋

Import wavetables from external formats, export Renoise wavetables for use in other tools.

### Wavetable Navigation

**Next/Previous Cycle:**
- `Global:Paketti:Next Wavetable Cycle` ⌨️ - Move loop to next single cycle
- `Global:Paketti:Previous Wavetable Cycle` ⌨️ - Move loop to previous cycle

**MIDI Mappings:**
- `Paketti:Next Wavetable Cycle` 🎹 - Trigger next cycle
- `Paketti:Previous Wavetable Cycle` 🎹 - Trigger previous cycle
- `Paketti:Select Wavetable Cycle [Set]` 🎹 - MIDI CC 0-127 selects cycle

**Loop Calculation:**
- Automatically calculates frames per cycle
- Updates loop start/end to single cycle
- Shows "Loop cycle: 5/64" status

**MIDI Control:**
- CC value 0-127 maps to cycle 1-N
- Instant wavetable scanning
- Real-time morphing during performance

### Technical Details

**AKWF Library:**
- 4,000+ single-cycle waveforms
- Organized in akwf.txt manifest
- Located in tool's AKWF/ folder
- All samples 44.1kHz, 16-bit

**Buffer Management:**
- Disables AutoSamplify during generation
- Temporary samples deleted after combination
- Preserves sample rate and bit depth from source
- Forward loop mode by default

### Use Cases

**Synthesis:**
- Create unique wavetable synths
- Morphing pad sounds
- Evolving textures

**Live Performance:**
- MIDI-controlled wavetable scanning
- Real-time cycle switching
- Dynamic timbre changes

**Sound Design:**
- Random wavetable inspiration
- Combine diverse waveforms
- Experimental synthesis

---

## Time Stretch

**Source:** `PakettiStretch.lua`

**Shortcut:** `Global:Paketti:Timestretch Dialog...` ⌨️

Advanced time-stretching dialog for tempo-independent sample manipulation with quality presets.

### Features

**Time Stretch Modes:**
- Percussion (transient preservation)
- Texture (smooth stretching)
- Custom ratios

**Quality Settings:**
- Fast (low CPU)
- Standard (balanced)
- High Quality (best results)

**Stretch Ratios:**
- 0.5x (half speed, double length)
- 1.0x (original)
- 2.0x (double speed, half length)
- Custom (manual input)

### Dialog Controls

**Source Selection:**
- Current sample
- All samples in instrument
- Sample range

**Output Options:**
- Replace original
- Create new sample
- Create new instrument

**Preview:**
- Real-time preview before applying
- A/B comparison with original
- Visual waveform display

### Use Cases

**Tempo Matching:**
- Match loops to song BPM
- Sync samples without repitching
- Create time-stretched variations

**Sound Design:**
- Extreme slow-down effects
- Granular texture creation
- Preserve pitch while changing length

---

## Sample Cycle Tuning (RePitch)

**Source:** `PakettiRePitch.lua`

Automatic pitch detection and correction for single-cycle waveforms. Analyzes waveform frequency and sets correct transpose value.

### Features

**Shortcuts:**
- `Global:Paketti:Sample Cycle Tuning Calculator...` ⌨️ - Opens calculator dialog
- `Global:Paketti:Selected Sample 1 Cycle Tuning` ⌨️ - Quick tune current sample
- `Global:Paketti:Selected Instrument 1 Cycle Tuning` ⌨️ - Tune all samples in instrument
- `Sample Editor:Paketti:Sample Cycle Tuning Calculator...` ⌨️
- `Sample Editor:Paketti:Selected Sample 1 Cycle Tuning` ⌨️
- `Sample Editor:Paketti:Selected Instrument 1 Cycle Tuning` ⌨️

### Tuning Calculator Dialog

**Analysis:**
- Detects fundamental frequency
- Calculates nearest MIDI note
- Shows cents deviation
- Suggests transpose value

**Auto-Correction:**
- Applies optimal transpose
- Sets finetune for cents accuracy
- Preserves sample properties

**Manual Override:**
- Adjust detected frequency
- Fine-tune cents
- Preview before applying

### Quick Tuning

**Selected Sample:**
- Analyzes single cycle
- Auto-calculates transpose
- Instant correction

**All Samples:**
- Batch processes instrument
- Individual analysis per sample
- Progress feedback

### Use Cases

**Wavetable Creation:**
- Correct AKWF wavetable tuning
- Ensure accurate pitch
- Create chromatic wavetables

**Sample Library Management:**
- Fix detuned samples
- Standardize sample pitch
- Prepare samples for keymapping

**Sound Design:**
- Single-cycle waveform tuning
- Oscillator calibration
- Synthesis preparation

---

# Pattern Sequencer Utilities

**Source:** `PakettiPatternSequencer.lua` | **Features:** 34

Advanced pattern sequencer management with cloning, section management, sorting, and cleanup tools.

## Sequence Cloning & Duplication

**Shortcuts:**
- `Global:Paketti:Clone Current Sequence` ⌨️ - Clones current sequence
- `Pattern Sequencer:Paketti:Clone Current Sequence` ⌨️
- `Global:Paketti:Duplicate Selected Sequence Range` ⌨️ - Duplicates selection
- `Pattern Sequencer:Paketti:Duplicate Selected Sequence Range` ⌨️

**Configurable Naming:**
- Prefix/Suffix options
- Numbering formats (%d, %02d, %03d)
- Keep original / Clear name / Use settings
- Settings dialog: `Pattern Sequencer:Paketti:Show Paketti Sequencer Settings Dialog` ⌨️

## Section Management

**Create Section:**
- `Pattern Sequencer:Paketti:Create Section From Selection` ⌨️
- Creates named section from selected sequence range
- Auto-naming with configurable format

**Section Navigation:**
- `Pattern Sequencer:Paketti:Select Next Section Sequence` ⌨️
- `Pattern Sequencer:Paketti:Select Previous Section Sequence` ⌨️
- Jump between section boundaries

**Section Loops (01-64):**
- `Global:Paketti:Select and Loop Sequence Section 01` through `64` ⌨️
- Instant section selection + loop creation
- 64 pre-mapped section shortcuts

## Sequence Scheduling

**Shortcuts:**
- `Global:Paketti:Add Current Sequence to Scheduled List` ⌨️
- Adds current sequence to schedule queue
- Builds multi-sequence playlists

## Keep Sequence Sorted

**Auto-Sort Patterns:**
- `Global:Paketti:Keep Sequence Sorted On/Off/Toggle` ⌨️
- `Pattern Editor:Paketti:Keep Sequence Sorted On/Off/Toggle` ⌨️
- `Pattern Sequencer:Paketti:Keep Sequence Sorted On/Off/Toggle` ⌨️

**Menu:**
- `Pattern Matrix:Paketti:Keep Sequence Sorted On/Off/Toggle` 📋

**Automatic Sorting:**
- Keeps pattern sequence in ascending order
- Automatically re-sorts when patterns inserted/moved
- Toggle on/off per preference

## Pattern Cleanup

**Wipe Empty Patterns From End:**
- `Pattern Sequencer:Paketti:Wipe Empty Patterns From End` ⌨️ 📋
- `Pattern Matrix:Paketti:Wipe Empty Patterns From End` 📋
- Removes trailing empty patterns
- Cleans up unused slots at end

**Clear Unused Patterns:**
- `Global:Paketti:Clear Unused Patterns` ⌨️
- `Pattern Sequencer:Paketti:Clear Unused Patterns` ⌨️ 📋
- `Pattern Editor:Paketti:Clear Unused Patterns` ⌨️
- `Pattern Matrix:Paketti:Clear Unused Patterns` ⌨️ 📋

**Menu:**
- `Pattern Matrix:Paketti:Clear Unused Patterns` 📋
- `Pattern Sequencer:Paketti:Clear Unused Patterns` 📋

**Smart Cleanup:**
- Finds patterns not used in any sequence
- Clears their content (keeps slot)
- Reclaims memory without breaking sequence

## Pattern Operations

**Duplicate Pattern and Insert Next:**
- `Global:Paketti:Duplicate Pattern and Insert Next` ⌨️
- `Pattern Sequencer:Paketti:Duplicate Pattern and Insert Next` ⌨️
- `Pattern Editor:Paketti:Duplicate Pattern and Insert Next` ⌨️
- Duplicates current pattern
- Inserts into next sequence position

**Play Current Pattern Sequence:**
- `Global:Paketti:Play Current Pattern Sequence` ⌨️
- Starts playback from current sequence
- Pattern-based playback control

## Preferences

**Naming Behavior:**
1. Use Settings (Prefix/Suffix)
2. Clear Name
3. Keep Original Name

**Numbering:**
- Enable/disable numbering
- Format: %d (1), %02d (01), %03d (001)

**Section Naming:**
- Prefix/suffix for sections
- Numbering format
- Auto-naming rules

---

# Utility Features

## Groove to Delay Converter

**Source:** `PakettiGlobalGrooveToDelayValues.lua`

**Shortcut:** `Global:Paketti:Global Groove to Delay Values` ⌨️

Converts groove settings to delay column values across pattern. Analyzes current groove (1-4) and writes corresponding delay values to all notes, creating groove feel without using groove engine.

**Use Cases:**
- Render grooved patterns
- Export with groove baked in
- Fine-tune per-note groove

---

## Fill Pattern

**Source:** `PakettiFill.lua`

**Shortcut:** `Pattern Editor:Paketti:Fill Pattern` ⌨️

Flood-fills pattern with current selection, repeating until pattern end. Creates instant loops and pattern extensions.

**Use Cases:**
- Extend 4-bar loop to 16 bars
- Fill pattern with sequence
- Quick pattern generation

---

## 810 (EightOneTwenty)

**Source:** `PakettiEightOneTwenty.lua` | **Features:** 6

Grid-based step sequencer (8x10 grid = 80 steps) with visual editing, built-in scales, and direct pattern writing.

**Shortcuts:**
- `Global:Paketti:Show 810 Dialog...` ⌨️
- `Global:Paketti:Save 810 State` ⌨️
- `Global:Paketti:Load 810 State` ⌨️
- `Global:Paketti:Write 810 to Pattern` ⌨️
- `Global:Paketti:Clear 810 Grid` ⌨️

**Features:**
- 8 columns × 10 rows = 80 steps
- Musical scale selection
- Step enable/disable checkboxes
- Direct pattern writing
- State save/load

---

## Tree Structure Browser (TODO)

**Source:** `PakettiTreeStructure.lua` | **Features:** 6

Hierarchical pattern/sequence structure browser with collapsible sections. Displays song structure as expandable tree.

**Shortcuts:**
- `Global:Paketti:Show Tree Structure...` ⌨️
- Tree navigation shortcuts (expand/collapse)
- Section jumping
- Pattern selection from tree

**Features:**
- Nested section display
- Pattern count per section
- Click to jump to pattern/section
- Collapsible hierarchy

---

## Capture Last Take

**Source:** `PakettiCaptureLastTake.lua` | **Features:** 3

Records and organizes multiple recording takes with visual slot management. Shows 20 slots with captured samples.

**Shortcuts:**
- `Global:Paketti:Capture Last Take` ⌨️
- `Global:Paketti:Show Last Take Capture Dialog...` ⌨️

**Features:**
- 20 take slots
- Automatic capture after recording
- Visual take browser
- Notes per take
- Audition from dialog
- Write to pattern
- Capture from pattern
- Modify voicings
---


## Selected Device Parameter Editor

**Source:** `PakettiCanvasExperiments.lua` | **Features:** 3

Visual canvas-based parameter editor for Renoise devices with A/B comparison, automation support, and real-time drawing.

### Main Dialog

**Keybinding:** `Global:Paketti:Paketti Selected Device Parameter Editor` ⌨️

Opens a visual parameter editor for the currently selected device with real-time drawing capabilities.

**Features:**
- Visual bar representation of all device parameters
- Mouse-based parameter editing (click/drag to adjust)
- Real-time device parameter updates
- A/B edit mode for parameter comparison
- Crossfade between A and B states
- Automation sync (read/write automation while playing)
- Randomization with strength control
- Parameter name display
- Auto-device switching
- External editor toggle (Space key)

**Visual Elements:**
- **Purple bars** - Edit A parameters (bold when active)
- **Yellow bars** - Edit B parameters (bold when active)
- **Green line** - Crossfade position
- **White cursor** - Mouse position while drawing
- **Vertical text** - Parameter names

### Pattern Automation Features

**Keybindings:**
- `Global:Paketti:Parameter Editor Duplicate to Next Pattern` ⌨️
- `Global:Paketti:Parameter Editor Snapshot to Next Pattern` ⌨️

**Duplicate to Next Pattern:**
- Copies ALL automation from current pattern to next pattern
- Creates new pattern if needed
- Automatically jumps to new pattern
- Preserves automation curves and points

**Snapshot to Next Pattern:**
- Writes current parameter values to automation in next pattern
- Creates snapshot at line 1
- Useful for creating static parameter states
- Works with crossfaded A/B values

### Dialog Controls

**Automation:**
- Add Snapshot - Write current parameters to automation at cursor
- Clear - Remove all automation for current device
- Clean&Snap - Clear automation and write at line 1
- Automation Sync - Toggle bidirectional automation (read during playback, write when drawing)

**Randomization:**
- Randomize Automation - Randomize and write snapshot
- Randomize by EditStep - Create random automation at EditStep intervals
- Randomize Strength slider (0-100%)
- Separate randomization for Edit A/B

**Edit A/B:**
- Edit A button - Edit device parameters directly
- Edit B button - Edit alternate parameter set
- Crossfade slider - Morph between A and B states
- Real-time crossfading during playback

**Device Navigation:**
- Previous/Next Track buttons
- Previous/Next Device buttons
- Auto-device switching (follows selected device)

**Automation Playmode:**
- Points - Stepped automation
- Lines - Linear interpolation
- Curves - Smooth curved interpolation

### Workflow

**Basic Editing:**
1. Select device in Renoise
2. Open Parameter Editor
3. Click/drag bars to adjust parameters
4. Device updates in real-time

**A/B Comparison:**
1. Edit A - Adjust parameters (purple bars)
2. Switch to Edit B
3. Edit B - Create alternate settings (yellow bars)
4. Use Crossfade slider to morph between A and B
5. Snapshot to write crossfaded value to automation

**Automation Writing:**
1. Enable Automation Sync
2. Start playback
3. Draw parameter changes in real-time
4. Automation is written at current playback position
5. Automation view updates automatically

**Pattern Duplication:**
1. Set up automation in current pattern
2. Press "Duplicate to Next Pattern"
3. Automation is copied and you jump to new pattern
4. Continue editing or add variations

### Special Features

**Auto-open:**
- Can auto-open when selecting compatible devices
- Excludes Pro-Q 3 (uses external editor)
- Excludes EQ30/EQ64 (uses dedicated EQ30 dialog)

**Wavetable Mod *LFO:**
- Special handling for Wavetable Mod *LFO devices
- Hides first 3 routing parameters
- Shows only musically relevant parameters

**Parameter Name Cleaning:**
- Removes "CC XX " prefixes from parameter names
- Cleaner display for MIDI-controlled devices

### Keyboard Shortcuts

- **CMD-H** - Close dialog
- **Space** - Toggle external editor (if available)
- All other keys pass through to Renoise

### Use Cases

**Sound Design:**
- Real-time filter sweeps with automation
- Create evolving pad sounds
- Design complex modulation patterns

**Mixing:**
- A/B compare EQ settings
- Automate effect parameters
- Create dynamic effect changes

**Performance:**
- Draw expressive automation during playback
- Morph between preset A and B states
- Create buildups and breakdowns

---

## EQ30/EQ64 Visual Equalizer

**Source:** `PakettiEQ30.lua` | **Features:** 5

Advanced visual EQ system using multiple EQ10 devices for 30-band or 64-band parametric EQ with canvas-based drawing.

### Main Features

**Keybindings:**
- `Global:Paketti:Load & Show Paketti EQ30` ⌨️
- `Global:Paketti:Paketti EQ30 Unused Note Frequency Reduction Flavor` ⌨️
- `Global:Paketti:Paketti EQ64 Unused Note Frequency Reduction Flavor` ⌨️

**MIDI Mappings:**
- `Paketti:Load & Show PakettiEQ30` 🎹
- `Paketti:Paketti EQ30 Unused Note Frequency Reduction Flavor` 🎹
- `Paketti:Paketti EQ64 Unused Note Frequency Reduction Flavor` 🎹

### EQ30 System

**Load & Show Paketti EQ30:**
Opens visual 30-band EQ editor with canvas-based control.

**System:**
- 4 EQ10 devices (8 bands each = 32 total, using middle 8 bands)
- 30 usable bands total
- Frequencies: 25Hz to 20kHz (1/3 octave spacing)
- Avoids problematic 1st and 10th bands of EQ10

**Features:**
- Visual bar-based EQ curve drawing
- Real-time device parameter updates
- Column-aligned vertical guides per band
- Gain markers at musical intervals (-20, -12, -6, -3, 0, +3, +6, +12, +20 dB)
- Left-click/drag to adjust individual bands
- Right-click to reset all bands to flat
- Automation sync support
- Global Q/Bandwidth control
- Create/Follow mode (auto-load EQ when switching tracks)

**Visual Elements:**
- **Purple bars** - EQ gain per band
- **White zero line** - 0dB reference (thick)
- **Green grid lines** - Band boundaries
- **Gray gain markers** - dB reference lines
- **Vertical frequency labels** - Band frequencies
- **Bottom band numbers** - 01-30

### EQ64 System

**Paketti EQ64 Unused Note Frequency Reduction Flavor:**
64-band system for ultra-precise frequency cleanup.

**System:**
- 8 EQ10 devices (8 bands each = 64 total)
- 64 usable bands
- Dynamically generated frequencies based on note analysis
- Same band-skipping strategy (middle 8 bands only)

### Unused Note Frequency Reduction

**Concept:**
Analyzes your track's used notes and generates EQ bands targeting unused note frequencies.

**EQ30 Unused Note Frequency Reduction Flavor:**
1. Scans selected track pattern for used notes
2. Identifies unused note frequencies in expanded range (±1 octave)
3. Generates up to 30 target frequencies
4. Adds 2nd/3rd harmonics if needed
5. Opens EQ30 dialog with custom frequency set

**EQ64 Unused Note Frequency Reduction Flavor:**
1. Same analysis as EQ30
2. Generates up to 64 target frequencies
3. More precise frequency targeting
4. Fills gaps with interpolated frequencies
5. Opens EQ64 dialog with 8 devices

**Use Cases:**
- Clean up mud from unused frequency ranges
- Surgical notching of problematic frequencies
- Create space for lead melodies
- Reduce frequency masking
- Sound design and mixing

### Dialog Controls

**Automation:**
- Reset Flat - Set all bands to 0dB
- Add Snapshot to Automation - Write current EQ curve to automation
- Clear - Remove all EQ automation
- Clean & Snap - Clear and write line 1 snapshot
- Automation Sync toggle

**Randomization:**
- Randomize Automation Step - Create randomized automation per EditStep
- Smooth - Musical random with gentle peaks
- Surgical - Sharp individual band adjustments
- Creative - Wild experimental curves

**Global Q Control:**
- Slider to adjust bandwidth of all bands simultaneously
- Range: 0.05 (sharp) to 0.8 (wide)
- Displays both bandwidth value and approximate Q factor
- Updates all devices in real-time

**Automation Playmode:**
- Points - Stepped automation
- Lines - Linear interpolation
- Curves - Smooth curves

**Workflow:**
- Load from Track - Import existing EQ10 device settings
- Create/Follow - Auto-load EQ when switching tracks
- Recreate Devices - Force rebuild all EQ10 devices
- Close - Close dialog

### Workflow

**Basic EQ Editing:**
1. Select track
2. Open EQ30/EQ64 dialog
3. Click/drag bars to adjust frequencies
4. Right-click to reset to flat
5. EQ10 devices update in real-time

**Unused Note Reduction:**
1. Create melody on track
2. Open Unused Note Frequency Reduction
3. Automatically generates cleanup frequencies
4. Draw notches on unused frequencies
5. Creates space for melody

**Automation Recording:**
1. Enable Automation Sync
2. Start playback
3. Draw EQ changes in real-time
4. Automation is written automatically
5. Create evolving EQ sweeps

**A/B Comparison:**
1. Set up EQ curve
2. Snapshot to automation
3. Adjust to alternate curve
4. Use automation playback to compare
5. Choose best result

### Technical Details

**Frequency Distribution:**
- **EQ30:** 1/3 octave bands (ISO standard)
- **EQ64:** Note-based or interpolated frequencies
- Logarithmic frequency spacing
- Covers full audible spectrum (20Hz-20kHz)

**Bandwidth Calculation:**
- Frequency-dependent default values
- Low frequencies: 0.15 (sharp control)
- Midrange: 0.12 (surgical precision)
- Presence: 0.10 (very sharp)
- High frequencies: 0.15 (sharp)

**Device Naming:**
- EQ30: "EQ30 Device 1-4"
- EQ64: "EQ64 Device 1-8"
- Auto-labels for easy identification

### Special Features

**Auto-open:**
- Automatically opens when selecting EQ30/EQ64 devices
- Device selection observer
- Seamless workflow integration

**Create/Follow Mode:**
- Follows track selection
- Auto-loads existing EQ settings
- Click canvas to create if missing
- Perfect for mixing workflow

**Auto-load:**
- Silent auto-load of existing device settings on dialog open
- "Just works" - no manual loading needed
- Preserves your existing EQ curves

### Use Cases

**Mixing:**
- Surgical EQ for individual tracks
- Remove problematic frequencies
- Create separation between instruments
- Frequency-based sidechaining

**Sound Design:**
- Creative EQ filtering
- Generate unusual frequency responses
- Random EQ for texture
- Evolving timbral changes

**Mastering:**
- Gentle broad strokes (wider Q)
- Fix frequency imbalances
- Create character
- Analog-style coloration

**Live Performance:**
- Real-time EQ automation
- Dynamic frequency sweeps
- Build tension with filter automation
- Drop automation for impact

---

## Slice Effect Step Sequencer

**Source:** `PakettiSliceEffectStepSequencer.lua` | **Features:** 8

Visual step sequencer for creating slice-based patterns with effect columns and velocity control.

### Main Features

**Keybindings:**
- `Global:Paketti:Paketti Slice Effect Step Sequencer Dialog...` ⌨️
- `Pattern Sequencer:Paketti:Duplicate Pattern (Slice Step Sequencer)` ⌨️
- `Pattern Matrix:Paketti:Duplicate Pattern (Slice Step Sequencer)` ⌨️
- `Pattern Editor:Paketti:Duplicate Pattern (Slice Step Sequencer)` ⌨️
- `Global:Paketti:Duplicate Pattern (Slice Step Sequencer)` ⌨️

**MIDI Mappings:**
- `Paketti:Paketti Slice Effect Step Sequencer Dialog...` 🎹
- `Paketti:Paketti Slice Step Sequencer:Duplicate Pattern` 🎹

### Main Dialog

**Paketti Slice Effect Step Sequencer Dialog:**
Visual step sequencer with grid-based editing for sliced instruments.

**Grid Interface:**
- Visual step grid (typically 16 steps)
- Slice selection per step
- Velocity control per step
- Effect column writing
- Pattern length control
- LPB (Lines Per Beat) control

**Features:**
- Click steps to enable/disable
- Select which slice plays per step
- Adjust velocity per step
- Write effect commands (0Sxx for slice changes)
- Real-time pattern preview
- Auto-create patterns
- Multiple pattern lengths

### Duplicate Pattern

**Multiple contexts for quick duplication:**
- From Pattern Sequencer view
- From Pattern Matrix view
- From Pattern Editor view
- Global shortcut (works anywhere)

**Workflow:**
1. Create pattern with Slice Step Sequencer
2. Press duplicate shortcut
3. New pattern created instantly
4. Continue editing variations

### Dialog Controls

**Pattern Settings:**
- Pattern Length - Number of lines
- LPB - Lines per beat (timing)
- Track - Target track selection
- Instrument - Source sliced instrument

**Step Grid:**
- Click to toggle step on/off
- Active steps highlighted
- Slice number selector per step
- Velocity slider per step

**Slice Selection:**
- Dropdown or buttons for slice numbers
- Visual feedback of current slice
- Support for up to 255 slices (0Sxx effect)

**Effect Column:**
- Automatically writes 0Sxx commands
- Slice-per-step triggering
- Velocity column writing
- Clean pattern generation

**Playback:**
- Play button for preview
- Stop button
- Loop toggle
- Transport integration

### Workflow

**Basic Pattern Creation:**
1. Select sliced instrument
2. Open Slice Effect Step Sequencer
3. Click steps to activate
4. Select slice number for each step
5. Adjust velocities
6. Press "Write to Pattern"
7. Pattern appears in sequencer

**Velocity Programming:**
1. Enable steps in grid
2. Adjust velocity slider per step
3. Create dynamic patterns
4. Accent specific beats
5. Write to pattern

**Slice Variations:**
1. Program basic pattern
2. Duplicate pattern
3. Change slice assignments
4. Create variations
5. Build arrangement

**Effect Column Usage:**
1. Automatically uses 0Sxx commands
2. One slice per step
3. Clean, efficient pattern data
4. Works with any sliced instrument

### Use Cases

**Drum Programming:**
- Create kick/snare patterns
- Program hi-hat rhythms
- Build complete drum loops
- Velocity-accented grooves

**Slice-based Sequencing:**
- Melodic slice patterns
- Vocal chop sequences
- Glitch effects
- Rhythmic textures

**Live Performance:**
- Quick pattern sketching
- Real-time variation creation
- Pattern duplication for buildup
- Dynamic arrangement

**Sound Design:**
- Rhythmic texture creation
- Glitchy patterns
- Slice-based arpeggios
- Experimental sequences

---

## Stacker

**Source:** `PakettiStacker.lua` | **Features:** 6

A method of doing velocity stacking - where each velocity stack has a different slice, isolated to individual samples. Basically a poor man's Ableton Live "Warp Mode". Also features methods for playing, and mixing, the slices at 3, 2, 1 octaves lower and 1, 2, 3 octaves higher, at the same time.

### Main Features

**Keybindings:**
- `Global:Paketti:Paketti Stacker Dialog...` ⌨️
- `Global:Paketti:Stack All Samples in Instrument with Velocity Mapping Split` ⌨️
- `Global:Paketti:Load&Slice&Isolate&Stack Sample` ⌨️
- `Global:Paketti:Write Velocity Ramp Up for Stacked Instrument` ⌨️
- `Global:Paketti:Write Velocity Ramp Down for Stacked Instrument` ⌨️
- `Global:Paketti:Write Velocity Random for Stacked Instrument` ⌨️

### Main Dialog

**Paketti Stacker Dialog:**
Visual interface for creating velocity-layered instruments from multiple samples.

**Features:**
- Load multiple samples
- Automatic velocity mapping
- Equal velocity splits
- Sample ordering
- Velocity range display
- Preview stacked result

### Stack with Velocity Mapping

**Stack All Samples in Instrument with Velocity Mapping Split:**
Takes all samples in current instrument and maps them across the full velocity range.

**Process:**
1. Counts total samples in instrument
2. Divides velocity range (0-127) equally
3. Assigns velocity splits to each sample
4. Creates layered instrument
5. Preserves original samples

**Example:**
- 4 samples → 32 velocity units each
- Sample 1: velocity 0-31
- Sample 2: velocity 32-63
- Sample 3: velocity 64-95
- Sample 4: velocity 96-127

### Load&Slice&Isolate&Stack

**Complete workflow automation:**
1. Load sample from browser
2. Auto-detect transients and slice
3. Isolate each slice to separate sample
4. Stack all slices with velocity mapping
5. Create performance-ready instrument

**Perfect for:**
- Drum kit creation from loops
- Multi-sample instruments from breaks
- One-shot libraries from loops
- Velocity-sensitive percussion

### Velocity Pattern Writing

**Write Velocity Ramp Up:**
Writes notes with gradually increasing velocity in pattern.

**Process:**
1. Starts at low velocity
2. Increments velocity per note
3. Reaches maximum at end
4. Creates crescendo effect

**Write Velocity Ramp Down:**
Opposite of ramp up - decrescendo effect.

**Process:**
1. Starts at high velocity
2. Decreases velocity per note
3. Reaches minimum at end
4. Creates fade-out effect

**Write Velocity Random:**
Writes notes with randomized velocities.

**Process:**
1. Generates random velocity values
2. Writes to pattern
3. Creates dynamic, humanized feel
4. Perfect for realistic performances

### Dialog Controls

**Sample Selection:**
- Load samples button
- Sample list display
- Reorder samples (drag/drop)
- Remove samples

**Velocity Mapping:**
- Manual split points
- Equal split button
- Velocity range display
- Preview mapping

**Options:**
- Preserve original samples
- Create new instrument
- Auto-name based on source
- Velocity curve options

### Workflow

**Basic Stacking:**
1. Select instrument with multiple samples
2. Press "Stack All Samples"
3. Velocity mapping applied automatically
4. Play notes - velocity selects sample

**Manual Stacking:**
1. Open Stacker Dialog
2. Add samples in desired order
3. Adjust velocity splits if needed
4. Click "Create Stacked Instrument"
5. New instrument created

**Loop-to-Kit:**
1. Load drum loop
2. Press "Load&Slice&Isolate&Stack"
3. Auto-slicing detects hits
4. Each hit becomes velocity layer
5. Play velocity-sensitive drum kit

**Pattern Generation:**
1. Create stacked instrument
2. Write basic pattern
3. Use "Write Velocity Ramp Up/Down"
4. Or use "Write Velocity Random"
5. Dynamic velocity automatically

### Use Cases

**Multi-Sample Instruments:**
- Velocity-layered piano
- Dynamic drums
- Expressive guitars
- Round-robin samples

**Drum Kit Creation:**
- Convert loops to kits
- Build velocity-sensitive drums
- Create one-shot libraries
- Dynamic percussion

**Sound Design:**
- Layer textures by velocity
- Create evolving sounds
- Build complex instruments
- Dynamic sampling

**Live Performance:**
- Velocity-expressive instruments
- Dynamic playing response
- Natural-sounding drums
- Expressive controllers

**Mixing:**
- Velocity-based variation
- Dynamic sample selection
- Humanization
- Realistic performances

---


---

# Import/Export Suite

Comprehensive file format support for importing and exporting samples and instruments across multiple vintage samplers, hardware devices, and modern formats.

## Format Overview

**Supported Import Formats:**
- **REX/RX2** - Propellerhead ReCycle loops with slice markers
- **PTI/MTI** - Polyend Tracker instruments with slices and wavetables
- **ITI** - Impulse Tracker instruments
- **SF2** - SoundFont 2.0 sample banks
- **IFF/8SVX/16SV** - Amiga IFF audio (8-bit and 16-bit)
- **WT** - Wavetable files
- **WAV+CUE** - WAV files with cue point markers
- **OT** - Elektron Octatrack metadata files

**Supported Export Formats:**
- **PTI** - Polyend Tracker (melodic slices, drum slices, wavetables)
- **ITI** - Impulse Tracker instruments with samples
- **IFF/8SVX/16SV** - Amiga IFF audio formats
- **OT** - Elektron Octatrack (.ot metadata + WAV)
- **Digitakt** - Elektron Digitakt sample chains
- **WAV+CUE** - WAV files with embedded or separate cue markers
- **WT** - Wavetable export

---

## REX/RX2 Loader

**Source:** `PakettiREXLoader.lua`, `PakettiRX2Loader.lua` | **Format:** File Import Hook

Automatic import of Propellerhead ReCycle (REX/RX2) loop files with slice marker preservation.

### REX Loader (.rex)

**Import Method:** Drag & drop .rex file or File → Load Sample

Imports ReCycle 1.x format loops. The loader:
1. Detects and removes 256-frame headers before each slice
2. Reconstructs clean audio without artifacts
3. Creates slice markers at original positions
4. Applies Paketti loader preferences to all slices

**Features:**
- **Automatic header removal** - Removes 256-frame headers that REX format inserts before slices
- **Slice marker preservation** - All original slice timing preserved
- **Mono/stereo support** - Handles both channel configurations
- **Paketti preferences applied** - Autofade, autoseek, interpolation, oversampling, NNA, loop settings
- **Instrument naming** - Uses filename (without extension) for instrument/sample names
- **Macro device creation** - Auto-creates *Instr. Macro device (unless disabled in preferences)

**Process:**
1. Loads REX file as AIFF into temp location
2. Scans for "REX " chunk at offset +1032
3. Reads slice offset table (up to 256 slices)
4. Calculates actual audio length (visible frames + header frames)
5. Removes headers in sequential order
6. Creates new sample without headers
7. Inserts slice markers at corrected positions
8. Applies loader preferences to base sample and all slice samples

**Technical Details:**
- Header length: 256 frames per slice
- Max slices: 255 (Renoise limit)
- Slice position calculation: `new_pos = original_pos - (slice_index * 256)`

### RX2 Loader (.rx2)

**Import Method:** Drag & drop .rx2 file or File → Load Sample

Imports ReCycle 2.x format loops using external decoder (rex2decoder).

**Features:**
- **External decoder** - Uses rex2decoder binary (macOS/Windows/Linux+Wine)
- **Automatic permission handling** - macOS: removes quarantine, sets +x permission
- **Slice marker import** - Reads slice positions from decoder output
- **255 slice limit** - Truncates to 255 slices if file exceeds limit
- **Empty sample cleanup** - Removes spurious "Sample 01" entries after slice loading
- **Cross-platform** - macOS (native), Windows (native), Linux (Wine)

**Process:**
1. Creates new instrument with Paketti defaults
2. Runs rex2decoder to extract WAV + slice marker text file
3. Loads WAV into sample buffer
4. Parses slice marker text file (`insert_slice_marker(position)` format)
5. Inserts slice markers (max 255)
6. Applies Paketti loader preferences
7. Cleans up temporary files
8. Shows truncation warning if > 255 slices

**Platform-specific:**
- **macOS:** `rex2decoder_mac` + `REX Shared Library.bundle`
- **Windows:** `rex2decoder_win.exe`
- **Linux:** `rex2decoder_win.exe` via Wine (requires Wine installed)

**Error Handling:**
- Validates decoder exit code
- Checks output file existence (even on non-zero exit)
- Prevents multiple simultaneous imports
- Restores sample selection after import

---

## PTI/MTI Loader (Polyend Tracker)

**Source:** `PakettiPTILoader.lua` | **Format:** File Import Hook + Export Functions

Complete Polyend Tracker instrument format support with import, export, melodic slices, drum slices, and wavetables.

### PTI Import (.pti)

**Import Method:** Drag & drop .pti file or File → Load Sample

Imports Polyend Tracker instruments with full slice marker, loop, and wavetable support.

**Keybindings:**
- `Global:Paketti:PTI Export` ⌨️

**Features:**
- **Slice modes** - Detects Slice (4) vs Beat Slice (5) playback modes
- **Wavetable support** - Imports wavetable instruments with position mapping
- **Loop preservation** - Reads and applies loop start/end/mode
- **Mono/stereo auto-detection** - Analyzes PCM data size to determine channels
- **50% silence trimming** - Auto-trims silent padding with slice rescaling
- **Polyend slice processing** - Routes Slice mode (4) PTIs to Polyend slice switcher
- **B-1 base note mapping** - Slices auto-map from C-2 (Polyend standard)
- **ProcessSlicer progress** - Shows progress dialog for large samples

**Import Process:**
1. Reads 392-byte PTI header
2. Detects mono/stereo from PCM data size
3. Creates new instrument with Paketti defaults
4. Decodes 16-bit PCM data (stereo = separate L/R blocks, mono = interleaved)
5. Reads loop mode (OFF/Forward/Reverse/PingPong) and loop points
6. Detects wavetable mode (offset 20)
7. Reads slice markers (offset 280-375, max 48 slices)
8. Trims 50% silence if detected
9. Sets base sample to B-1, slice samples auto-map from C-2
10. Applies Paketti loader preferences

**Wavetable Import:**
- Reads wavetable window size (offset 64-65)
- Reads total positions (offset 68-69)  
- Reads active position (offset 88-89)
- Creates Sample 1 as full wavetable (looped)
- Creates individual samples for each position
- Sets velocity mapping: active position = 00-7F, others = 00-00

**Slice Note Mapping:**
- Slice mode PTIs print expected note mapping to console
- Base sample: B-1 (note 35)
- Slice 00: C-2 (note 36)
- Slice 01: C#2 (note 37)
- ...continues chromatically

### PTI Export (.pti)

**Keybindings:**
- `Global:Paketti:PTI Export` ⌨️
- `Global:Paketti:Export Subfolders as Melodic Slices` ⌨️
- `Global:Paketti:Export Subfolders as Drum Slices` ⌨️

**Export Features:**
- **Smart detection** - Auto-detects melodic slice vs drum slice vs regular sample
- **Slice mode selection** - Beat Slice (5) for drums, Slice (4) for melodic
- **Base sample export** - For sliced instruments, always exports Sample 1
- **Loop point mapping** - Converts Renoise loop points to PTI format
- **48 slice limit** - Truncates to 48 slices (PTI format limitation)
- **ProcessSlicer progress** - Shows progress for large exports

**Export Process:**
1. Detects export type (melodic slice/drum slice/regular)
2. Prompts for save location (.pti file)
3. Builds 392-byte PTI header with all metadata
4. Writes 16-bit PCM data (stereo = L block then R block, mono = sequential)
5. Applies slice marker conversion (frame → 0-65535 range)
6. Sets playback mode (0=1-Shot, 1=Forward, 2=Reverse, 3=PingPong, 4=Slice, 5=Beat Slice)

**PTI Header Structure:**
- Offset 0-1: "TI" marker
- Offset 21-51: Instrument name (31 bytes)
- Offset 60-63: Sample length (frames)
- Offset 76: Playback/loop mode
- Offset 78-79: Playback start
- Offset 80-81: Loop start (raw value 1-65534)
- Offset 82-83: Loop end (raw value 1-65534)
- Offset 84-85: Playback end
- Offset 280-375: Slice markers (48 × 2 bytes)
- Offset 376: Slice count
- Offset 377: Active slice

**Melodic Slice Detection:**
- Pattern: (n-1) samples with velocity 00-00 + 1 sample with velocity 00-7F
- Exports as Slice mode (4)
- Uses current_selected_slice for active slice

**Drum Slice Detection:**
- Sample 1 has slice markers
- Exports as Beat Slice mode (5)
- Active slice always 0

### MTI Import (.mti)

**Import Method:** Drag & drop .mti file

Imports Polyend Tracker multi-file instruments (MTI references separate WAV file).

**Features:**
- **WAV file pairing** - Searches for corresponding WAV file using naming patterns
- **Multiple search locations** - Checks same folder and ../Samples/ folder
- **Naming pattern matching** - Handles instrument_XX → instXX.wav patterns
- **Slice marker support** - Attempts to read slice data from MTI header
- **Loop preservation** - Reads and applies loop points

**WAV Search Pattern:**
1. `instrument_33.mti` → `inst33.wav` (same folder)
2. `instrument_33.mti` → `../Samples/inst33.wav`
3. Tries variations: `instr33.wav`, `instrument33.wav`, `inst_33.wav`, etc.

### Subfolder Batch Export

**Melodic Slice Export** - `Global:Paketti:Export Subfolders as Melodic Slices` ⌨️

Exports each subfolder as a melodic slice PTI (one file per subfolder).

**Process:**
1. Select parent folder
2. For each subfolder:
   - If 1 file: Create simple instrument (C-0 to B-9)
   - If 2-48 files: Create melodic slice setup (first sample 00-7F, others 00-00)
   - Export as PTI with subfolder name
3. Shows count of exported PTIs

**Drum Slice Export** - `Global:Paketti:Export Subfolders as Drum Slices` ⌨️

Exports each subfolder as a drum slice PTI using sample chaining.

**Process:**
1. Select parent folder
2. For each subfolder:
   - If 1 file: Export as simple PTI
   - If 2-48 files: Chain samples, insert slice markers, export as Beat Slice PTI
3. Creates sample chain by concatenating audio
4. Handles mono/stereo mixing intelligently

---

## Polyend Buddy (PTI File Browser)

**Source:** `PakettiPolyendSuite.lua`

**Keybindings:**
- `Global:Paketti:Polyend Buddy (PTI File Browser)` ⌨️

**MIDI:**
- `Paketti:Polyend Buddy (PTI File Browser)` 🎹

Dedicated PTI file browser and loader dialog with Polyend Tracker workflow integration.

**Features:**
- **PTI file browser** - Lists .pti files in selected directory
- **Quick preview** - Audition PTI instruments before loading
- **Batch operations** - Load multiple PTIs sequentially
- **Polyend integration** - Designed for Polyend Tracker sample library management
- **Recent folders** - Remembers last browsed locations

**Workflow:**
1. Open Polyend Buddy dialog
2. Browse to PTI library folder
3. Preview instruments
4. Load selected PTI into Renoise
5. Edit and export back to PTI

---

## Melodic Slice Export (Polyend)

**Source:** `PakettiPolyendMelodicSliceExport.lua`

**Keybindings:**
- `Global:Paketti:Melodic Slice Export (One-Shot)` ⌨️
- `Global:Paketti:Melodic Slice Create Chain` ⌨️
- `Global:Paketti:Melodic Slice Export Current` ⌨️

Specialized tools for creating and exporting melodic slice instruments for Polyend Tracker.

### Melodic Slice Export (One-Shot)

Creates PTI with each sample as separate melodic slice, no sample chaining.

**Process:**
1. Validates instrument has 2-48 samples
2. Sets first sample velocity to 00-7F (active)
3. Sets remaining samples velocity to 00-00 (inactive)
4. Exports PTI in Slice mode (4)

**Use Case:** Multi-sample melodic instruments where each sample is a different recording

### Melodic Slice Create Chain

Creates sample chain from multiple samples with slice markers.

**Process:**
1. Concatenates all samples into single audio buffer
2. Inserts slice markers at sample boundaries
3. Creates melodic slice velocity mapping
4. Ready for PTI export

**Use Case:** Convert multi-sample instrument to sliced format for Polyend

### Melodic Slice Export Current

Exports currently selected sample/slice as melodic slice PTI.

**Process:**
1. Identifies selected sample in melodic slice instrument
2. Sets that sample as active (00-7F)
3. Exports PTI with correct active slice metadata
4. Uses current_selected_slice for PTI header

**Use Case:** Export specific variation from multi-sample melodic instrument

---

## Polyend Slice Switcher

**Source:** `PakettiPolyendSliceSwitcher.lua`

**Keybindings:**
- `Global:Paketti:Polyend Slice Next` ⌨️
- `Global:Paketti:Polyend Slice Previous` ⌨️
- `Global:Paketti:Polyend Slice Dialog Toggle` ⌨️

**MIDI:**
- `Paketti:Polyend Slice Select (0-48) x[Knob]` 🎹

Real-time melodic slice switching for Polyend-style instruments using velocity mapping.

**Features:**
- **Velocity-based switching** - Changes which slice is active (00-7F vs 00-00)
- **MIDI knob control** - Continuous controller knob for slice selection
- **Visual feedback** - Dialog shows current slice and instrument info
- **Next/Previous navigation** - Step through slices sequentially
- **48 slice support** - Full Polyend Tracker slice count

**How It Works:**
1. Instrument has multiple samples (2-48)
2. Each sample mapped to same note range (C-0 to B-9)
3. Active sample has velocity 00-7F, others have 00-00
4. Switching changes which sample responds to velocity

**Use Case:**
- Live performance with melodic slice instruments
- Auditioning different takes/variations of same melodic phrase
- MIDI controller-based slice selection

**Dialog:**
- Shows current slice number (0-47)
- Shows total slice count
- Shows instrument name
- Real-time updates during switching

---

## ITI Export/Import (Impulse Tracker)

**Source:** `PakettiITIExport.lua`, `PakettiITIImport.lua`

Complete Impulse Tracker instrument format support with advanced sample properties and envelope preservation.

### ITI Export

**Keybindings:**
- `Global:Paketti:Export Instrument to ITI...` ⌨️
- `Sample Editor:Paketti:Export Instrument to ITI...` ⌨️

**Menu:**
- `Sample Editor:Paketti:Export:Export Instrument to ITI...` 📋

**Features:**
- **Full instrument export** - All samples and settings
- **Sample properties** - Volume, panning, transpose, finetune
- **Envelope support** - Volume and panning envelopes (planned)
- **Loop preservation** - Forward/bidirectional/off loop modes
- **Note mapping** - Sample keyzones and velocity layers
- **ADSR envelopes** - Attack, decay, sustain, release

**Export Dialog:**
- Instrument name
- Sample count
- Target filename
- Progress indicator

**ITI Format Support:**
- Header: "IMPI" marker
- Instrument name (26 chars)
- Sample count
- Envelope data
- Sample data (8-bit or 16-bit)

### ITI Import

**Import Method:** Drag & drop .iti file or File → Load Instrument

**Features:**
- **Automatic import** - File import hook integration
- **Sample properties** - Restores volume, panning, transpose, finetune
- **Loop restoration** - Applies loop points and modes
- **Envelope restoration** - Volume and panning envelopes (planned)
- **Naming** - Uses instrument name from ITI file

**Process:**
1. Reads IMPI header
2. Validates format
3. Creates new instrument
4. Loads samples with properties
5. Applies envelopes
6. Sets note mapping

---

## SF2 Loader (SoundFont)

**Source:** `PakettiSF2Loader.lua` | **Format:** File Import Hook

**Import Method:** Drag & drop .sf2 file

SoundFont 2.0 bank loader with preset and sample extraction.

**Features:**
- **Automatic import** - File import hook integration
- **Preset extraction** - Imports presets as Renoise instruments
- **Multi-sample support** - Creates proper sample layers
- **Loop preservation** - Reads and applies loop points
- **Velocity layers** - Preserves velocity-mapped samples
- **Keyzone mapping** - Applies proper note ranges

**Import Process:**
1. Reads SF2 RIFF structure
2. Parses INFO, sdta, and pdta chunks
3. Extracts preset list
4. Shows preset selection dialog
5. Loads selected preset(s) as instruments
6. Maps samples to keyzones with correct properties

**SF2 Format Support:**
- RIFF/INFO/sdta/pdta chunks
- Preset/instrument generators
- Sample generators
- Modulator support (basic)

---

## Octatrack OctaCycle Generator

**Source:** `PakettiOctaCycle.lua`

**Keybindings:**
- `Sample Editor:Paketti:Generate OctaCycle for Octatrack` ⌨️
- `Sample Editor:Paketti:Quick OctaCycle for Octatrack` ⌨️
- `Sample Editor:Paketti:Export OctaCycle to Octatrack` ⌨️

**Menu:**
- `Sample Editor:Paketti:Octatrack:Generate OctaCycle...` 📋
- `Sample Editor:Paketti:Octatrack:Quick OctaCycle (C, Oct 1-7)` 📋
- `Sample Editor:Paketti:Octatrack:Export OctaCycle to Octatrack` 📋
- `Sample Mappings:Paketti:Octatrack:Generate OctaCycle...` 📋
- `Sample Mappings:Paketti:Octatrack:Quick OctaCycle (C, Oct 1-7)` 📋
- `Sample Mappings:Paketti:Octatrack:Export OctaCycle to Octatrack` 📋

Generates pitch-shifted sample sets for Elektron Octatrack's OctaCycle feature (chromatic sample playback).

### Generate OctaCycle (Full Dialog)

**Process:**
1. Opens dialog with pitch/octave/note selection
2. User selects root note and octave range
3. Generates 12-84 samples (1-7 octaves)
4. Each sample pitch-shifted chromatically
5. Maps samples to keyboard chromatically

**Options:**
- Root note selection (C, C#, D, etc.)
- Octave count (1-7 octaves)
- Pitch algorithm (cubic interpolation)
- Note naming format

### Quick OctaCycle (C, Oct 1-7)

One-click OctaCycle generation with preset settings:
- Root note: C
- Octave range: 1-7 octaves (84 samples)
- Standard chromatic mapping

**Use Case:** Fast OctaCycle generation for most common use case

### Export OctaCycle to Octatrack

**Features:**
- Exports OctaCycle instrument as individual WAV files
- Creates matching .ot metadata files
- Organizes in Octatrack-compatible folder structure
- Adds sample length, loop, and slice metadata

**Export Structure:**
```
OctaCycle_InstrumentName/
  C-1.wav
  C-1.ot
  C#1.wav
  C#1.ot
  ...
  C-7.wav
  C-7.ot
```

---

## Octatrack Export Suite

**Source:** `PakettiOTExport.lua`

**Keybindings:**
- `Sample Editor:Paketti:Export to Octatrack (.WAV+.ot)` ⌨️
- `Sample Editor:Paketti:Export to Octatrack (.ot)` ⌨️
- `Sample Editor:Paketti:Import Octatrack (.ot)` ⌨️
- `Sample Editor:Paketti:Debug Octatrack (.ot)` ⌨️
- `Sample Editor:Paketti:Octatrack Generate Drumkit (Smart Mono/Stereo)` ⌨️
- `Sample Editor:Paketti:Octatrack Generate Drumkit (Force Mono)` ⌨️
- `Sample Editor:Paketti:Octatrack Generate Drumkit (Play to End)` ⌨️
- `Sample Editor:Paketti:Octatrack Set .ot Loop to Slice` ⌨️

**Menu:** 16 menu entries across Sample Editor, Sample Mappings

Comprehensive Elektron Octatrack metadata and sample export with drumkit generation.

### Export to Octatrack (.WAV+.ot)

Exports sample with matching .ot metadata file.

**Features:**
- **Slice marker export** - Converts Renoise slices to Octatrack slices
- **Loop metadata** - Loop start/end/mode
- **BPM detection** - Auto-detects and writes BPM
- **Gain/trim metadata** - Start/end trim points, gain
- **Tempo multiplier** - Speed/pitch relationship
- **Sample attributes** - Bit depth, sample rate, length

**.ot Format:**
- Binary format with Octatrack-specific structure
- Slice data (up to 64 slices)
- Loop points (frames)
- Playback parameters
- BPM and tempo settings

### Export to Octatrack (.ot only)

Exports only .ot metadata file (no WAV export).

**Use Case:** Update metadata for existing Octatrack samples

### Import Octatrack (.ot)

**Features:**
- Reads .ot metadata file
- Applies slice markers to Renoise sample
- Restores loop points
- Shows BPM and tempo data
- Validates slice positions

**Process:**
1. Select .ot file
2. Reads binary structure
3. Applies to currently selected sample
4. Creates slice markers
5. Sets loop points

### Generate Drumkit (Smart Mono/Stereo)

Creates Octatrack-compatible drumkit from instrument.

**Features:**
- **Smart channel handling** - Preserves stereo, converts mono as needed
- **Slice-based export** - Each slice becomes separate WAV + .ot
- **Note mapping** - Chromatic mapping from C-0
- **Metadata generation** - Full .ot files for each slice

**Export Structure:**
```
DrumkitName/
  01_KickName.wav
  01_KickName.ot
  02_SnareName.wav
  02_SnareName.ot
  ...
```

### Generate Drumkit (Force Mono)

Same as Smart mode but forces all samples to mono (summed L+R).

**Use Case:** Octatrack Mk1 with limited sample memory

### Generate Drumkit (Play to End)

Exports drumkit with "play to end" mode (no loop).

**Use Case:** One-shot drum sounds (kicks, snares, etc.)

### Set .ot Loop to Slice

Sets Octatrack loop points to match slice boundaries.

**Process:**
1. Select slice in Renoise
2. Reads slice start/end frames
3. Creates .ot file with loop = slice range
4. Useful for isolating specific slices in Octatrack

---

## Digitakt Export Suite

**Source:** `PakettiDigitakt.lua`

**Keybindings:**
- `Global:Paketti:Export Digitakt Sample Chain...` ⌨️
- `Global:Paketti:Export Digitakt Quick Export (Digitakt Mono)` ⌨️
- `Global:Paketti:Export Digitakt Quick Export (Digitakt 2 Stereo)` ⌨️
- `Global:Paketti:Export Digitakt Quick Export (Chain Mode)` ⌨️
- `Global:Paketti:Digitakt Export Sample Chain...` ⌨️
- `Sample Editor:Paketti:Digitakt Export Sample Chain...` ⌨️
- `Sample Editor:Paketti:Digitakt Quick Export Mono` ⌨️
- `Sample Editor:Paketti:Digitakt Quick Export Stereo` ⌨️
- `Sample Editor:Paketti:Digitakt Quick Export Chain` ⌨️

**Menu:**
- `Sample Editor:Paketti:Digitakt:Export Sample Chain...` 📋
- `Sample Editor:Paketti:Digitakt:Quick Export (Digitakt Mono)` 📋
- `Sample Editor:Paketti:Digitakt:Quick Export (Digitakt 2 Stereo)` 📋
- `Sample Editor:Paketti:Digitakt:Quick Export (Chain Mode)` 📋
- `Instrument Box:Paketti:Digitakt:Export Sample Chain...` 📋
- `DSP Device:Paketti:Digitakt:Export Sample Chain...` 📋
- `Mixer:Paketti:Digitakt:Export Sample Chain...` 📋

Elektron Digitakt sample chain and slice export with Digitakt/Digitakt 2 format support.

### Export Sample Chain (Full Dialog)

**Features:**
- **Format selection** - Digitakt Mono / Digitakt 2 Stereo / Chain Mode
- **Slice-based export** - Chains slices into single WAV
- **Start point markers** - Embeds cue points for Digitakt slice triggering
- **Sample count limit** - Max 127 slices (Digitakt limit)
- **Mono summing** - L+R mix for original Digitakt
- **Stereo preservation** - Full stereo for Digitakt 2

**Dialog Options:**
- Export format (Mono/Stereo/Chain)
- Target filename
- Slice range selection
- Normalize option

**Export Process:**
1. Validates instrument has slices
2. Opens export dialog
3. Chains slices into single audio buffer
4. Adds silence padding between slices (optional)
5. Embeds cue point markers
6. Exports as WAV
7. Shows slice count and total duration

### Quick Export (Digitakt Mono)

One-click export for original Digitakt (mono, 127 slices max).

**Process:**
- Chains all slices
- Sums to mono
- Adds cue points
- Exports with Digitakt-compatible naming

### Quick Export (Digitakt 2 Stereo)

One-click export for Digitakt 2 (stereo, 127 slices max).

**Process:**
- Chains all slices in stereo
- Adds cue points
- Exports with Digitakt 2-compatible naming

### Quick Export (Chain Mode)

Simple sample chain without cue points.

**Use Case:** Manual slice assignment in Digitakt

**Digitakt Format Requirements:**
- **Original Digitakt:** Mono only, 127 samples max, 48kHz/16-bit
- **Digitakt 2:** Stereo support, 127 samples max, 48kHz/16-bit
- **Cue points:** WAV "cue " chunk with sample start positions

---

## IFF/8SVX/16SV Loader (Amiga)

**Source:** `PakettiIFFLoader.lua`

**Keybindings:**
- `Global:Paketti:Load IFF Sample File...` ⌨️
- `Global:Paketti:Convert IFF to WAV...` ⌨️
- `Global:Paketti:Convert WAV to IFF...` ⌨️
- `Global:Paketti:Save Current Sample as IFF...` ⌨️
- `Global:Paketti:Save Current Sample as 8SVX...` ⌨️
- `Global:Paketti:Save Current Sample as 16SV...` ⌨️
- `Global:Paketti:Batch Convert WAV/AIFF to 8SVX...` ⌨️
- `Global:Paketti:Batch Convert WAV/AIFF to 16SV...` ⌨️
- `Global:Paketti:Batch Convert IFF/8SVX/16SV to WAV...` ⌨️
- `Global:Paketti:Batch Convert WAV to IFF...` ⌨️

Complete Amiga IFF/8SVX/16SV format support with import, export, and batch conversion.

### Load IFF Sample File

**Features:**
- **8SVX support** - 8-bit signed samples
- **16SV support** - 16-bit signed samples
- **IFF-ILBM support** - Amiga image file detection (skips)
- **Fibonacci compression** - Decompresses Fibonacci-delta encoded samples
- **VHDR chunk** - Reads sample rate, loop points, volume
- **NAME chunk** - Reads sample name
- **ANNO chunk** - Reads annotation/comment

**Import Process:**
1. Reads IFF FORM header
2. Validates FORM type (8SVX/16SV)
3. Parses VHDR (voice header)
4. Reads BODY chunk (sample data)
5. Decompresses if Fibonacci encoding
6. Creates Renoise sample
7. Applies loop points
8. Sets sample name

**8SVX Format:**
- 8-bit signed samples (-128 to 127)
- Optional Fibonacci-delta compression
- Max sample rate: 28867 Hz (Amiga hardware limit)

**16SV Format:**
- 16-bit signed samples
- No compression
- Higher sample rates supported

### Convert IFF to WAV

Batch conversion from IFF/8SVX/16SV to WAV.

**Features:**
- Folder selection for batch processing
- Recursive directory scanning
- Maintains folder structure
- Creates WAV folder for output

### Convert WAV to IFF

Batch conversion from WAV to IFF/8SVX.

**Features:**
- 8-bit or 16-bit output
- Fibonacci compression option (8SVX)
- Loop point preservation
- Sample rate conversion

### Save Current Sample as IFF/8SVX/16SV

**Features:**
- **Format selection** - IFF (auto-detect), 8SVX (8-bit), 16SV (16-bit)
- **Compression** - Optional Fibonacci compression for 8SVX
- **Loop preservation** - Writes VHDR loop points
- **Name embedding** - Embeds sample name in NAME chunk
- **Volume** - Writes 0-64 volume in VHDR

**8SVX Output:**
```
FORM 8SVX
  VHDR (voice header - 20 bytes)
  NAME (sample name)
  BODY (sample data)
```

### Batch Conversion Tools

**Batch Convert WAV/AIFF to 8SVX** - Converts all WAV/AIFF files in folder to 8-bit IFF

**Batch Convert WAV/AIFF to 16SV** - Converts all WAV/AIFF files in folder to 16-bit IFF

**Batch Convert IFF/8SVX/16SV to WAV** - Converts all IFF files in folder to WAV

**Batch Convert WAV to IFF** - Converts all WAV files to IFF (auto-detect 8/16-bit)

**Batch Features:**
- Progress reporting
- Error handling per file
- Skips already converted files
- Maintains directory structure

---

## Wavetable Import/Export

**Source:** `PakettiWTImport.lua`

**Keybindings:**
- `Global:Paketti:Wavetable Control` ⌨️
- `Global:Paketti:Export Wavetable` ⌨️
- `Global:Paketti:Import Wavetable` ⌨️

**MIDI:**
- `Paketti:Wavetable Sample Selector x[Knob]` 🎹

Wavetable import/export with position switching and MIDI control.

### Wavetable Control

**Features:**
- **Position browser** - Shows all wavetable positions (samples)
- **MIDI switching** - Use MIDI knob to switch between positions
- **Visual feedback** - Displays current position and total count
- **Velocity mapping** - Switches active position using velocity layers
- **Real-time switching** - Changes during playback

**Dialog:**
- Wavetable name
- Current position (0-n)
- Total positions
- Position list with names
- MIDI learn button

### Export Wavetable

**Features:**
- **Multi-sample export** - Exports all samples as wavetable positions
- **Loop preservation** - Maintains loop points
- **Position metadata** - Embeds position count and window size
- **WAV or custom format** - Standard WAV with metadata chunks

**Process:**
1. Validates instrument has multiple samples
2. Checks sample lengths match (wavetable requirement)
3. Prompts for filename
4. Exports each sample as wavetable position
5. Adds metadata chunk with position info

### Import Wavetable

**Features:**
- **Position detection** - Auto-detects wavetable positions
- **Velocity mapping** - Maps positions to velocity layers
- **Loop setup** - Sets appropriate loop points
- **Position naming** - Names samples by position

**Process:**
1. Select wavetable file
2. Detects position count
3. Creates instrument
4. Loads each position as sample
5. Maps to velocity or note layers
6. Sets loops for wavetable playback

### MIDI Wavetable Sample Selector

**MIDI:** `Paketti:Wavetable Sample Selector x[Knob]` 🎹

**Features:**
- **Continuous control** - MIDI knob/fader control
- **Position switching** - Velocity-based position selection
- **Real-time** - Changes during playback
- **0-127 mapping** - Maps MIDI CC 0-127 to sample positions

**Use Case:**
- Live wavetable position morphing
- Hardware wavetable synthesis emulation
- Wavetable scanning with MIDI controller

---

## WAV Cue Extract/Export

**Source:** `PakettiWavCueExtract.lua`

**Keybindings:**
- `Global:Paketti:Load WAV with CUE Markers...` ⌨️
- `Sample Editor:Paketti:Load WAV with CUE Markers...` ⌨️
- `Global:Paketti:Export WAV with CUE File...` ⌨️
- `Global:Paketti:Export WAV with Embedded CUE Headers...` ⌨️
- `Sample Editor:Paketti:Export WAV with CUE File...` ⌨️
- `Sample Editor:Paketti:Export WAV with Embedded CUE Headers...` ⌨️

**Menu:**
- `Main Menu:File:Load WAV with CUE Markers...` 📋
- `Main Menu:File:Export WAV with CUE File...` 📋
- `Main Menu:File:Export WAV with Embedded CUE Headers...` 📋
- `Sample Editor:Paketti:Load WAV with CUE Markers...` 📋
- `Sample Editor:Paketti:Export WAV with CUE File...` 📋
- `Sample Editor:Paketti:Export WAV with Embedded CUE Headers...` 📋
- `Sample Navigator:Paketti:Load WAV with CUE Markers...` 📋
- `Sample Navigator:Paketti:Export WAV with CUE File...` 📋
- `Sample Navigator:Paketti:Export WAV with Embedded CUE Headers...` 📋
- `Main Menu:Tools:Paketti:!Sample Editor:Load WAV with CUE Markers...` 📋
- `Main Menu:Tools:Paketti:!Sample Editor:Export WAV with CUE File...` 📋
- `Main Menu:Tools:Paketti:!Sample Editor:Export WAV with Embedded CUE Headers...` 📋

Import and export WAV files with cue point markers (slice markers) using embedded headers or separate .cue files.

### Load WAV with CUE Markers

**Features:**
- **Embedded cue chunks** - Reads WAV "cue " chunk
- **Separate .cue files** - Reads companion .cue text file
- **Slice marker creation** - Converts cue points to Renoise slices
- **Multiple cue formats** - Supports various cue file syntaxes
- **Frame-accurate** - Preserves exact cue point positions

**Import Process:**
1. Select WAV file
2. Searches for "cue " chunk in WAV header
3. OR looks for .cue file in same directory
4. Parses cue point positions
5. Loads WAV as sample
6. Creates slice markers at cue positions
7. Applies Paketti loader preferences

**Cue Chunk Format:**
```
cue  [chunk size]
[cue point count]
[cue point 1: ID, position, chunk ID, etc.]
[cue point 2: ...]
```

**Cue File Format (.cue):**
```
FILE "sample.wav" WAVE
  TRACK 01 AUDIO
    INDEX 01 00:00:00
  TRACK 02 AUDIO
    INDEX 01 00:01:45
```

### Export WAV with CUE File

Exports sample with separate .cue text file.

**Features:**
- **Slice to cue conversion** - Converts Renoise slices to cue points
- **Frame positions** - Writes exact frame positions
- **Time codes** - Also writes time code format (MM:SS:FF)
- **Companion file** - Creates .cue file next to WAV

**Export Process:**
1. Select save location
2. Exports sample as WAV
3. Writes .cue file with slice positions
4. Uses standard cue sheet format

**Output:**
```
sample.wav
sample.cue
```

### Export WAV with Embedded CUE Headers

Embeds cue points directly in WAV file.

**Features:**
- **Self-contained** - No separate .cue file needed
- **"cue " chunk** - Standard RIFF/WAV cue chunk format
- **Compatible** - Works with other DAWs and samplers
- **Frame-accurate** - Preserves exact positions

**Process:**
1. Select save location
2. Exports WAV with standard audio data
3. Adds "cue " chunk to RIFF header
4. Writes cue point list with frame positions

**Use Case:**
- Sharing sliced samples with other DAWs
- Exporting drum breaks with slice markers
- Archiving sliced samples with metadata intact

---

## Import/Export Format Summary

| Format | Import | Export | Slices | Loops | Stereo | Notes |
|--------|--------|--------|--------|-------|--------|-------|
| **REX** | ✓ | - | ✓ | - | ✓ | ReCycle 1.x, header removal |
| **RX2** | ✓ | - | ✓ | - | ✓ | ReCycle 2.x, external decoder |
| **PTI** | ✓ | ✓ | ✓ | ✓ | ✓ | Polyend Tracker, wavetables, melodic/drum slices |
| **MTI** | ✓ | - | ✓ | ✓ | ✓ | Polyend multi-file, requires WAV |
| **ITI** | ✓ | ✓ | - | ✓ | ✓ | Impulse Tracker, envelopes |
| **SF2** | ✓ | - | - | ✓ | ✓ | SoundFont 2.0, presets |
| **IFF/8SVX** | ✓ | ✓ | - | ✓ | - | Amiga 8-bit, Fibonacci compression |
| **16SV** | ✓ | ✓ | - | ✓ | - | Amiga 16-bit |
| **OT** | ✓ | ✓ | ✓ | ✓ | ✓ | Octatrack metadata, drumkits |
| **Digitakt** | - | ✓ | ✓ | - | ✓ | Sample chains, cue points |
| **WT** | ✓ | ✓ | - | ✓ | ✓ | Wavetables, position switching |
| **WAV+CUE** | ✓ | ✓ | ✓ | - | ✓ | Embedded or separate cue files |

---

## Hardware Compatibility

**Polyend Tracker:**
- PTI/MTI import/export
- Melodic slices (velocity 00-7F switching)
- Drum slices (Beat Slice mode)
- Wavetables (position mapping)
- 48 slice maximum

**Elektron Octatrack:**
- .ot metadata files
- Slice marker export (64 slices)
- OctaCycle chromatic sample sets
- Drumkit generation
- Loop and BPM metadata

**Elektron Digitakt:**
- Sample chain export
- Cue point markers
- 127 slice maximum
- Mono (Digitakt) or Stereo (Digitakt 2)

**Amiga:**
- IFF/8SVX/16SV formats
- Fibonacci compression
- Classic tracker compatibility
- ProTracker/OctaMED sample exchange

**Impulse Tracker:**
- ITI instrument format
- Envelope support
- DOS tracker compatibility
- Sample properties preservation

