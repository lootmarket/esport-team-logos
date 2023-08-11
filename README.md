# esport Team Logos

An attempt to maintain a singular resource of team logos for active, and retired esports teams.

Teams are divided based on game.

To request more images please create an issue or pull request.


## How to Add more Team Logos:
- Find team(s) with missing logos, and their path
- Source image and save to desktop: game-name/team-name/team-name-logo.png on your desktop. Examples:
  - csgo/faze-clan/faze-clan-logo.png
  - league-of-legends/mineski/mineski-logo.png
- Open https://github.com/lootmarket/esport-team-logos/upload/master
- Drag and drop the folders
- Type a brief title / desciption within `Commit Changes`
- Click "Create a New branch" and give the branch a name (Example: `Added team logos` or `Added Rebel Esports logo`)
- Click `Commit Changes`


## Identifying Missing Logos
- visit rivalry.com
- open up your developer console in browser (right click inspect, select console tab)
- refresh with console open
- If there are team logos missing, they will be shown in the error logs.
![example](https://d3vv6lp55qjaqc.cloudfront.net/items/1k0v412T302U2x202S2r/Image%202018-06-13%20at%2010.30.51%20AM.png?X-CloudApp-Visitor-Id=30913)
- this will tell you the broken image url, and the path we're expecting when you add the game. For example, the paths shown in the right of that screenshot are:
    - https://esport-team-logos.global.ssl.fastly.net/esport-team-logos/dota-2/singularity-esports/singularity-esports-logo.png
    - https://esport-team-logos.global.ssl.fastly.net/esport-team-logos/dota-2/helsinki-reds/helsinki-reds-logo.png
    - https://esport-team-logos.global.ssl.fastly.net/esport-team-logos/starcraft/classic/classic-logo.png
    - https://esport-team-logos.global.ssl.fastly.net/esport-team-logos/starcraft/maru/maru-logo.png
