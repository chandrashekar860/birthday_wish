# Make it yours

Edit [src/data/birthdayContent.js](./src/data/birthdayContent.js) and put your files in `public/assets/`. You don’t need to edit the React components.

## Names, date, and dialogue

Set `name`, `nickname`, and `birthday` at the top of the file. Greetings and dialogue that use these values update automatically. Change `title` for the browser tab, `intro` for the opening dialogue and invitation, and `dialogue` for the guide’s lines in the house and activities. The date is shown as text; it doesn’t control access.

## The album and quiz

- In `memories`, edit each entry’s `title`, `caption`, and optional `date`. Use the filename without its extension in `photo('memory-01')`. Add, remove, or reorder entries in the array, and give each one a unique `id`. The album always adds its closing page after the last memory.
- In `quiz`, edit each `question` and the two `answers`. Each answer has a `label` and its own `response`. The quiz has no scoring. Add or remove question objects as needed and keep their IDs distinct. The question counter adjusts automatically.

## Gift, cake, and letter

- Edit or reorder the strings in `loveNotes`. The gift counts each note once when it’s flipped. After they’re all read, its keepsake page uses `photos.gift` and `giftClosing`.
- Change `cake.greeting`, `cake.finalMessage`, or `cake.wish`. Set `cake.candles` to a number from 1 to 6. The cake uses the birthday girl’s name on the icing.
- Change `finalLetter.title`, each string in `finalLetter.paragraphs`, and `finalLetter.closing`. Each array item is revealed on its own. Edit `finalLetter.finale` and `finalLetter.signature` for the ending screen. `photos.final` is the Polaroid beside the letter.

## Artwork and audio

Your files should match the exact names, casing, and extensions below. All are optional. Missing photos display illustrations, and missing character art uses an original illustrated guide. Add a transparent PNG as `shinchan-guide.png` for the main guide; the happy and surprised expressions fall back to that image if absent. Use artwork and tracks you’re allowed to share.

Audio is off by default. Once files are added, use the sound toggle to enable it. The ending track replaces background music in the final letter when supplied; otherwise the same background track continues. Each effect can be supplied separately. The app waits for interaction before playing music.

```text
public/
└── assets/
    ├── photos/
    │   ├── intro-together.jpg      Invitation frame
    │   ├── memory-01.jpg           Album page 1
    │   ├── memory-02.jpg           Album page 2
    │   ├── memory-03.jpg           Album page 3
    │   ├── memory-04.jpg           Album page 4
    │   ├── memory-05.jpg           Album page 5
    │   ├── memory-06.jpg           Album page 6
    │   ├── memory-07.jpg           Album page 7
    │   ├── memory-08.jpg           Album page 8
    │   ├── gift-surprise.jpg       Gift keepsake
    │   └── final-together.jpg      Final letter Polaroid
    ├── characters/
    │   ├── shinchan-guide.png      Main guide
    │   ├── shinchan-happy.png      Optional happy expression
    │   └── shinchan-surprised.png  Optional surprised expression
    └── audio/
        ├── background-music.mp3    General background loop
        ├── ending-music.mp3        Optional final letter loop
        ├── click.mp3               Navigation and interactions
        ├── page-flip.mp3           Album, note, and letter pages
        ├── gift-open.mp3           Unwrapping the present
        └── celebration.mp3         Last candle extinguished
```

For custom filenames or extensions, use literal paths like `'/assets/photos/my-picture.webp'` in the configuration. Place the real files under `public/assets/`; another build is needed for the published site to recognize newly added files. Keep photos reasonably sized for mobile. The display keeps their original proportions, including portrait photos.

Use **Reset adventure** in the footer to test the complete sequence again. It asks before clearing progress for the current browser.
