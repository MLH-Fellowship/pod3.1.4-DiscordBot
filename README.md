# Explorer Template

This is a template to help you get started with your projects. Find out more information inside of the Fello Handbook.

This template has a `main` and `staging` branch already setup. 

- Code will only be merged into `main` once your Pod Leader has reviewed your code. 
- During the week, you'll merge code into `staging`.

## Useful commands

Switch branches:
```
git checkout <branch-name>
```

Make new branch and switch to it:
```
git checkout -b <branch-name>
```

I'd recommend using the GitHub CLI for reviewing Pull Requests, making Pull Requests and making Issues.

Download it with Homebrew:
```
brew install gh
```

## Getting Started Information

- Visit https://discord.com/developers/applications
- Create Application with name React Raccoon Bot
- OAuth2 tab -> scope: select bot | Bot Permissions: set all Text Permissions except Send TTS Messages
- Copy bot url: https://discord.com/api/oauth2/authorize?client_id=870626780103442502&permissions=259846040640&scope=bot
- Add a testing server to Discord for this purpose, since the bot needs to run in a Discord server we have permission. - Added Pod-3.1.4 Discord Server
- React Raccoon Bot added to Pod-3.1.4 server
- Added Package.json file
- Add eslint for js lint error checks
- Add npm run commands : `npm run start` to run bot and `npm run lint` to check js lint errors
- Add .env file to add bot token
- Add dotenv package to fetch .env content
- Write basic bot login instructions
