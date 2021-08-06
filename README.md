# React Raccoon Bot

The bot helps developers that are working collaboratively on a project residing on GitHub repository by notifying them on Discord channel each time there is PRs, Reviews or Comments on that repo. It also sends motivation quotes at intervals (Morning, Afternoon and Evening).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Make sure [Node.js](https://nodejs.org/en/download/) is running on your local machine.
- A registered [Discord](https://discord.com/) account


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
git checkout -b <branch-name>
```

Fix eslint errors:
```
npm run lint
```

Log in to server
```
ssh root@172.xxx.xxx.xxx
```

Run the program 
```
pm2 --name DiscordBot start npm -- start
```

List Running Process
```
pm2 ps
```

Stop Process - 0 is the index
```
pm2 delete 0 
```

Check logs
```
pm2 logs
```

Check background processes
```
ps
```

kill background processes
```
sudo kill -9 3348
```

start ngrok in background
```
./ngrok http 3000 -log=stdout > ngrok.log &
```

get the public url from the ngrok.log
```
cat ngrok.log
```

# Authors

[Uduak Essien](https://github.com/acushlakoncept): Created files for basic bot setup, worked on connectivity with the React Raccoon Bot from Github to Discord, and tested the bot.

[Ajiboye Adedotun](https://github.com/Youngprinnce): Integrated motivational quote API, worked on testing and improved README.

[Sebastian Holguin](https://github.com/sebastian-holguin): Updated Github information and setup of the Discord bot and tested with open/closed issues on Github.

## Show your support

Give a ⭐️ if you like this project!

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](issues/).
