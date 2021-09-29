# Shortem
A URL Shortener That Allow Users To Interact With Its API Through A Discord Bot

## About
- Supports Multiple [Databases](./example/database.js)
- Performant
- Uses [discord.js](https://github.com/discordjs/discord.js) v13
- Uses Slash Commands
- Customizable, Using Command Handling Method

## Commands/API
- `/create <slug> <url>` - Create A Slug 
- `/delete <slug>` - Delete A Slug
- `/list` - A List Of Available Slugs
- `/info <slug/url>` - View Slug's Information
- `deploy` - Deploy Slash Commands ( Owner )

## Requirements
- Node.js 16.2.0^ ( see why : [here](https://github.com/BotStudios/shortem/wiki/node.js-16.2.0%5E-is-required,-why-%3F) )
- Install All Required Dependencies

## Setup 
1. Clone This Repository ( By `git clone` Or [`create-shortem-app`](https://npmjs.com/create-shortem-app) )
2. Edit The [Config File](./config.json)
3. Run The Bot `npm start` / `node src/index.js`

## Credits
**Code**
- Inspired by [CodingGarden/miniature-umbrella](https://github.com/CodingGarden/miniature-umbrella)
- Using some of [Todo Bot](https://discord.com/oauth2/authorize?client_id=824842524441968640&scope=bot&permissions=523328)'s concept
**Dependencies**
[discord.js](https://npmjs.com/discord.js), [@discordjs/rest](https://npmjs.com/@discordjs/rest), [discord-api-types](https://npmjs.com/discord-api-types), [dotenv](https://npmjs.com/dotenv), [express](https://npmjs.com/express), [helmet](https://npmjs.com/helmet), [joi](https://npmjs.com/joi)
