# esports Tournament Logos

An attempt to maintain a singular resource of tournament logos for active and inactive esports tournaments.

Similar to esport team logos, tournaments are divided based on game. Tournament logos will live in a separate `tournaments/` folder.

To request more images please create an issue or pull request.


## How to Add more tournament Logos:
- Find tournament(s) with missing logos, and their path
- Source image and save to desktop: tournaments/game-name/tournament-name/tournament-name-logo.png on your desktop. Examples:
  - tournaments/overwatch/overwatch-league/overwatch-league-logo.png
  - tournaments/league-of-legends/vcs-summer-split/vcs-summer-split-128.png
- Open https://github.com/lootmarket/esport-team-logos/upload/master
- Drag and drop the folders
- Type a brief title / desciption within `Commit Changes`
- Click "Create a New branch" and give the branch a name (Example: `Added tournament logos` or `Added Overwatch League logo`)
- Click `Commit Changes`


## Identifying Missing Logos
- visit rivalry.gg/watch-esports-live
- open up your developer console in browser (right click inspect, select console tab)
- refresh with console open
- If there are tournament logos missing, they will be shown in the error logs.
![example](https://dzwonsemrish7.cloudfront.net/items/0Q0x3q1s2P1J1T290R2D/Screen%20Shot%202018-07-11%20at%202.08.10%20PM.png)
- this will tell you the broken image url, and the path we're expecting when you add the game. For example, the paths shown in the right of that screenshot are:
    - https://esport-team-logos.global.ssl.fastly.net/esport-team-logos/tournaments/call-of-duty/cwl-global-pro-league-group-stage-2/cwl-global-pro-league-group-stage-2-128.png
    - https://esport-team-logos.global.ssl.fastly.net/esport-team-logos/tournaments/csgo/esea-premier-division-europe/esea-premier-division-europe-128.png
    - https://esport-team-logos.global.ssl.fastly.net/esport-team-logos/tournaments/dota-2/bts-summer-cup-phase-3/bts-summer-cup-phase-3-128.png
    - https://esport-team-logos.global.ssl.fastly.net/esport-team-logos/tournaments/league-of-legends/lck/lck-128.png


## Thumbnailing Logos

To process a single image, run `npm run thumb <path/to/image>`

To process an entire game, run `npm run thumb <game>`

### Available Thumbnail Sizes

This will create thumbnails in:

- 32x32 - `{tournament}-logo-32.png`
- 128x128 - `{tournament}-logo-128.png`
- 320x320 - `{tournament}-logo-320.png`
- original file - `{tournament}-logo.png`
