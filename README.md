# Save to Minttr

A PopClip extension for saving links and notes to Minttr.

## Features

- Save the current webpage URL along with selected text as a note
- Save selected text as a standalone note(mind)
- Works with all major browsers including Safari, Chrome, Firefox, Arc, and Dia
- Optional: Automatically open Minttr after saving
- Support for Dia browser via AppleScript fallback

## Installation

1. Download [SaveToMinttr.popclipextz](https://github.com/wtxdew/minttr.poppclipext/releases/download/0.1/minttr.popclipextz)
2. Double-click the file to install
3. Configure your Minttr API token in PopClip settings

## Configuration

### API Token (Required)

Get your API token from Minttr:
1. Go to https://my.minttr.com/settings
2. Find API Token section
3. Paste it into the PopClip extension settings

### Disable Minttr After Saving (Optional)

Disable this option if you don't want Minttr to automatically open in your browser after saving.

Default: Enabled

## Usage

### Save Link

1. Select text on any webpage
2. Click "Save Link" in the PopClip menu
3. The current page URL and your selected text will be saved to Minttr as a link

### Save Note

1. Select any text (on a webpage or in any application)
2. Click "Save Note" in the PopClip menu
3. The selected text will be saved to Minttr as a note

## Supported Browsers

- Safari
- Google Chrome
- Arc
- Dia (via AppleScript)

## Technical Details

- Uses Minttr API v1
- Requires network entitlement for API calls
- Dia browser support uses AppleScript for URL detection
- Other browsers use native PopClip browser integration
- Save Note action works in any application, not just browsers

## Troubleshooting

### "Cannot get URL from current page"

This error appears when:
- You are not in a browser
- The browser is not supported
- PopClip cannot detect the page URL

Solution: Make sure you are selecting text on an actual webpage, not in the address bar or other UI elements. If you want to save text without a URL, use the "Save Note" action instead.

### "Save failed: Invalid token"

Your API token is incorrect or has expired. Get a new token from Minttr settings.

### "Save failed: 400"

The request was malformed. This usually indicates a bug. Please report it.

## Privacy

This extension:
- Only sends data to my.minttr.com
- Does not collect or store any data locally
- Only transmits the URL and selected text you explicitly choose to save

## Changelog

### Version 1.0.0
- Initial release
- Support for saving links with notes
- Support for saving standalone notes
- Support for major browsers
- Dia browser support via AppleScript
- Optional auto-open Minttr feature
