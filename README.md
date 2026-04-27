# KTANE Module Helper

中文文档: [README.zh-CN.md](README.zh-CN.md)

A lightweight, browser-based helper for selected modules in **Keep Talking and Nobody Explodes**.

This project runs entirely on the client side (HTML/CSS/JavaScript) with no build step and no dependencies.

## Features

- Complicated Wires solver
- Wire Sequences tracker (12 wires, occurrence-aware)
- Memory module assistant (5 stages, with guided keyboard entry)
- Passwords candidate filter with next-position recommendation
- Morse Code matcher with frequency output and alphabet reference
- English and Chinese language toggle (`EN` / `中文`)
- Per-module reset controls

## Modules Included

1. **Complicated Wires**
- Set wire properties (red, blue, star, LED).
- Toggle bomb conditions (even serial, parallel port, 2+ batteries).
- Get immediate cut / do not cut output per wire.

1. **Wire Sequences**
- Enter each wire's color and destination (A/B/C).
- App tracks occurrence count by color and applies the official table logic.

1. **Memory**
- Select display value and button labels for each stage.
- App computes press as `P<position> / <label>`.
- Keyboard shortcut flow: type 5 digits (`display + 4 labels`) and press Enter.

1. **Passwords**
- Enter possible letters for each position.
- App shows matching candidate words.
- Recommendation suggests the next position to check to reduce search space.

1. **Morse Code**
- Enter letter substrings to filter known words.
- See matching transmit frequency and Morse representation.
- Click letters in the Morse alphabet panel to append quickly.

## Project Structure

- `index.html` - UI layout and templates for all modules
- `styles.css` - styling, layout, and state visuals
- `script.js` - module logic, lookups, localization, and event handling

## Getting Started

1. Clone or download this repository.
1. Open `index.html` in your browser.

No installation required.

## Development

Because this is a static project, you can edit files directly and refresh the browser.

Optional local server examples:

```bash
# Python 3
python -m http.server 8080

# Node (npx)
npx serve .
```

Then open `http://localhost:8080` (or the URL shown by your server).

## Notes

- The helper is intended as a fast reference/assistant, not a full game manual replacement.
- Data and logic are bundled directly in `script.js` for simplicity.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
