# ArtStation Chrome Extension

This Chrome extension allows you to automatically fill fields on the ArtStation website. It is designed to fill the input field with the name "title" with a predefined value specified in the `config.js` file.

## Files

The project contains the following files:

- `manifest.json`: The manifest file that defines the extension's metadata, permissions, content scripts, and browser action details.
- `content.js`: The content script that is injected into the ArtStation website to interact with the page and fill the fields.
- `config.js`: An external configuration file that contains the predefined value for the input field.
- `popup.html` (optional): An HTML file that serves as the popup for the extension. It includes a button to trigger the field filling action.
- `popup.js` (optional): A JavaScript file that handles the button click event in the popup and sends a message to the content script.
  
Note:  all the files are inside a `artstation_chrome_ext` folder.  

## Usage

1. Clone or download the project files from the [GitHub repository](https://github.com/louispaulet/artstation_chrome_ext).

2. Load the extension in Google Chrome:
   - Open Google Chrome and go to `chrome://extensions`.
   - Enable "Developer mode" by toggling the switch at the top right corner.
   - Click on "Load unpacked" and select the project directory, then folder `artstation_chrome_ext`.

3. Visit the ArtStation website (https://www.artstation.com).

4. Click on the extension icon in the Chrome toolbar.

5. The input field with the name "title" on the ArtStation website should be filled with the predefined value from the `config.js` file.

## License

This project is licensed under the [MIT License](LICENSE).

Feel free to customize and enhance the extension to suit your specific needs.

If you encounter any issues or have any suggestions, please open an issue on the [GitHub repository](https://github.com/louispaulet/artstation_chrome_ext/issues).
