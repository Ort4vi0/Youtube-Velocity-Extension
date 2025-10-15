# 📁 Project Structure

This document explains the organization of the YouTube Velocity Extension project.

## Directory Layout

```
Youtube-Velocity-Extension/
├── manifest.json           # Chrome/Edge extension manifest (Manifest V3)
├── README.md               # Main README (English)
├── STRUCTURE.md            # This file - explains project organization
├── src/                    # Source files directory
│   ├── content.js          # Main content script injected into YouTube pages
│   ├── styles.css          # CSS styles for the speed button and tooltip
│   ├── icon48.png          # Extension icon 48x48px
│   └── icon128.png         # Extension icon 128x128px
└── docs/                   # Documentation directory
    ├── README.pt.md        # Portuguese documentation
    └── README.es.md        # Spanish documentation
```

## File Descriptions

### Root Files

- **manifest.json**: Extension configuration file following Manifest V3 specifications. Defines permissions, content scripts, icons, and metadata.
- **README.md**: Main project documentation in English, including installation instructions, usage guide, and feature list.

### src/ Directory

Contains all source code and assets for the extension:

- **content.js**: JavaScript file that runs on YouTube pages. Creates the speed control button, handles mouse scroll events, and manages playback speed changes.
- **styles.css**: Stylesheet for the custom speed button and tooltip with glass effect (backdrop-filter).
- **icon48.png** & **icon128.png**: Extension icons displayed in the browser's extension menu and Chrome Web Store.

### docs/ Directory

Contains translated documentation:

- **README.pt.md**: Complete documentation in Portuguese (Brazilian).
- **README.es.md**: Complete documentation in Spanish.

## Why This Structure?

### Benefits

1. **Separation of Concerns**: Source code (`src/`) is separated from documentation (`docs/`) and configuration (root).
2. **Scalability**: Easy to add more source files, languages, or documentation without cluttering the root directory.
3. **Standard Practice**: Follows common conventions used in web extension development.
4. **Easy Navigation**: Developers can quickly find what they need based on directory names.

### Extension Loading

When loading the extension in Chrome/Edge:
1. Point the browser to the **root directory** (`Youtube-Velocity-Extension/`)
2. The browser reads `manifest.json` which references files in `src/`
3. All paths in `manifest.json` are relative to the root directory

## Adding New Files

### New Source File
Place in `src/` and reference in `manifest.json` if needed.

### New Language Documentation
Create `docs/README.[lang].md` and add a link in the main `README.md`.

### New Assets (images, fonts, etc.)
Place in `src/` or create `src/assets/` subdirectory if you have many assets.

---

Last updated: October 2025
