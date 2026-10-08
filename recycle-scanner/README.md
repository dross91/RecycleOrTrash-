# Recycle or Trash?

Tap the resin identification code (the number 1–7 inside the recycling triangle) printed
on a plastic item, and get an instant verdict: **RECYCLE** or **TRASH**, plus guidance,
common examples, and a few fun facts about that type of plastic.

Built with Next.js (App Router + TypeScript + Tailwind). Everything runs client-side —
no API keys, no backend calls, no photo uploads.

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How it works

- `components/NumberPicker.tsx` is the main screen — a row of buttons for codes 1–7.
- Tapping a number shows `components/ResultView.tsx`: the verdict, short guidance,
  common examples made from that resin, and a "Fun facts & tips" section.
- `rules.json` maps each resin code to its verdict (recycle/trash), guidance, examples,
  a note about regional exceptions, and fun facts. Edit this file to match your local
  program's rules or add more facts — no code changes needed.

## Project structure

```
app/
  page.tsx              main screen, switches between the picker and the result
  layout.tsx            root layout, metadata
  globals.css           Tailwind + base styles
components/
  NumberPicker.tsx        row of 1–7 buttons (hero size on the main screen, compact when
                           changing the number from the result view)
  ResultView.tsx           verdict, guidance, examples, fun facts, note
lib/
  rules.ts               loads rules.json
  types.ts                shared types
rules.json                 recycle/trash rules + fun facts per resin code (edit to customize)
```

## Notes

- Recycling rules vary a lot by municipality — the defaults here are reasonable
  generalizations, not a guarantee. The app always shows a reminder to check local rules.
