# README in others langs
- [Português](README.pt.md)
- [Español](README.es.md)

# 🎬 YouTube Speed Control

Chrome/Edge extension that adds a button to the YouTube player to control video speed using the mouse scroll.

## ✨ Features

- 🖱️ **Scroll control**: Use the mouse wheel to quickly adjust playback speed
- 🎯 **Integrated button**: Stylish button that blends into YouTube's player controls
- 🌍 **Multilanguage support**: Tooltip automatically translated to 16 languages
- ⚡ **Custom speeds**: Configure speeds from 0.25x up to 4x
- 🎮 **Spacebar compatible**: Keeps your custom speed when using the spacebar playback feature
- 💎 **Modern design**: Tooltip with glass (frosted) effect

## 📦 Installation

### Method 1: Manual Install (Developer)

1. **Download the files**
   - Download or clone this repository
   - Make sure you have the following files:
     - `manifest.json`
     - `content.js`
     - `styles.css`

2. **Open Chrome/Edge**
   - Type `chrome://extensions/` (Chrome) or `edge://extensions/` (Edge) in the address bar
   - Press Enter

3. **Enable Developer Mode**
   - In the top-right corner, toggle on "Developer mode"

4. **Load the extension**
   - Click "Load unpacked" (Chrome) or "Load unpacked" (Edge)
   - Select the folder containing the extension files

5. **Done!**
   - The extension is installed and active
   - Open any YouTube video to test

## 🎯 How to Use

### Basic Control

1. **Open a YouTube video**
   - Go to [youtube.com](https://youtube.com)
   - Play any video

2. **Find the button**
   - Look for the speed button (e.g. "1x", "2x") in the player controls
   - It is located alongside other controls (volume, quality, etc.)

3. **Adjust the speed**
   - Hover the cursor over the speed button
   - **Scroll up** = increase speed (+0.25x)
   - **Scroll down** = decrease speed (-0.25x)

### Advanced Features

#### 🎮 Spacebar Function

YouTube has a built-in behavior where holding the spacebar temporarily sets playback to 2x. This extension improves that feature:

- **Without the extension**: Releasing the spacebar returns playback to 1x
- **With the extension**: Releasing the spacebar returns playback to your custom speed

**Example:**
1. Set the video to 3x using the scroll
2. Hold the spacebar (video goes to 2x temporarily)
3. Release the spacebar (video returns to 3x automatically)

#### 🌍 Supported Languages

The extension detects your browser language and displays the tooltip in the correct language:

- 🇧🇷 Portuguese: "Alterar velocidade"
- 🇺🇸 English: "Change speed"
- 🇪🇸 Spanish: "Cambiar velocidad"
- 🇫🇷 French: "Modifier la vitesse"
- 🇩🇪 German: "Geschwindigkeit ändern"
- 🇮🇹 Italian: "Modifica velocità"
- 🇯🇵 Japanese: "速度を変更"
- 🇰🇷 Korean: "속도 변경"
- 🇨🇳 Chinese: "更改速度"
- 🇷🇺 Russian: "Изменить скорость"
- 🇸🇦 Arabic: "تغيير السرعة"
- 🇮🇳 Hindi: "गति बदलें"
- 🇳🇱 Dutch: "Snelheid wijzigen"
- 🇵🇱 Polish: "Zmień prędkość"
- 🇹🇷 Turkish: "Hızı değiştir"

## ⚙️ Speed Limits

- **Minimum**: 0.25x (4x slower)
- **Maximum**: 4x (4x faster)
- **Step**: 0.25x per scroll

## 🔧 Troubleshooting

### Extension does not appear on YouTube

1. Check that the extension is enabled at `chrome://extensions/`
2. Reload the YouTube page (F5)
3. Make sure you are on a video page (not the homepage)

### Button does not respond to scroll

1. Make sure the cursor is over the speed button
2. Check for other conflicting extensions
3. Try reloading the extension

### Speed is not preserved after using the spacebar

1. Set the speed using the extension's scroll (not the YouTube menu)
2. Wait a few seconds for the setting to be saved
3. Test the spacebar again

## 🛠️ Development

### Project Structure

```
YoutubeVelocity/
├── manifest.json    # Extension configuration
├── content.js       # Main script
├── styles.css       # Button and tooltip styles
└── README.md        # Portuguese README
```

### Technologies Used

- **Manifest V3**: Latest Chrome extensions platform
- **Content Scripts**: Code injection into YouTube pages
- **MutationObserver**: Dynamic player detection
- **CSS Backdrop Filter**: Glass (frosted) effect on tooltip

## 📝 License

This project is open source. Feel free to use, modify, and distribute.

## 🤝 Contributions

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Open pull requests
- Translate to new languages

## 📧 Support

If you find any issues or have suggestions, open an issue on the repository.

---

Made with ❤️ to improve your YouTube experience
