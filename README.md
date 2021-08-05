# React Raccoon Bot

The bot helps developers that are working collaboratively on a project residing on GitHub repository by notifying them on Discord channel each time there is PRs, Reviews or Comments on that repo. It also sends motivation quotes at intervals (Morning, Afternoon and Evening).


## Getting Started

To get a local copy up and running follow these simple example steps:

### Prerequisites

Make sure [Node.js](https://nodejs.org/en/download/) is running on your local machine.

### Setup

~~~bash
$ git clone https://github.com/MLH-Fellowship/pod3.1.4-DiscordBot.git
$ cd pod3.1.4-DiscordBot
$ git checkout -b <new-branch>
~~~

Install modules:

```
yarn or npm install
```

**Run Bot:**
Create a `.env` file in the root of the folder and add `TOKEN=xxxxxx`

``` 
npm run start
```

## Useful commands

Switch branches:
```
git checkout <branch-name>
```

Make new branch and switch to it:
```
git checkout -b <branch-name>
```

Fix eslint errors:
```
npm run lint
```

# Authors

[Uduak Essien](https://github.com/acushlakoncept): Created files for basic bot setup, worked on connectivity with the React Raccoon Bot from Github to Discord, and tested the bot.

[Ajiboye Adedotun](https://github.com/Youngprinnce): Integrated motivational quote API and worked on testing.

[Sebastian Holguin](https://github.com/sebastian-holguin): Updated Github information and setup of the Discord bot and tested with open/closed issues on Github.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).
