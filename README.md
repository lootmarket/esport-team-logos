# esports Team Logos

An attempt to maintain a singular resource of team logos for active, and retired esports teams.

Teams are divided based on game.

The current dataset only contains a single large image. Resized / cropped images coming soon.

To request more images please create an issue or pull request.

How to Add more Team Logos:
- Find team(s) with missing logos on LootLeague.com
- Source image and save to desktop: game-name/team-name/team-name-logo.png on your desktop. Examples:
  - csgo/faze-clan/faze-clan-logo.png
  - league-of-legends/mineski/mineski-logo.png
- Open https://github.com/lootmarket/esport-team-logos/upload/master
- Drag and drop the folders
- Type a brief title / desciption within `Commit Changes`
- Click "Create a New branch" and give the branch a name (Example: `Added team logos` or `Added Rebel Esports logo`)
- Click `Commit Changes`


## Thumbnailing Logos

To process a single image, run `npm run thumb <path/to/image>`

To process an entire game, run `npm run thumb <game>`

### Available Thumbnail Sizes

This will create thumbnails in:

- 32x32 - `{team}-logo-32.png`
- 128x128 - `{team}-logo-128.png`
- 320x320 - `{team}-logo-320.png`
- original file - `{team}-logo.png`
