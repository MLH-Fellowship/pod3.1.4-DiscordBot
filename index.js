/* eslint-disable no-case-declarations */
const express = require('express');
const dotenv = require('dotenv');
const { Client, MessageEmbed } = require('discord.js');
const schedule = require('node-schedule');
const { default: axios } = require('axios');

const client = new Client();

const app = express();
const port = 3000;

dotenv.config();

app.use(express.json());

app.get('/', (req, res) => res.send(`
  <html>
    <head><title>Success!</title></head>
    <body>
      <h1>You did it!</h1>
      <img src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif" alt="Cool kid doing thumbs up" />
    </body>
  </html>
`));

const guiddId = '870629107992526880';
const channelId = '870629108441309187';

// Fetch motivational quote, randomize data and limit to one result
const getQuote = async () => {
	const res = await axios.get('https://type.fit/api/quotes');
	const data = res.data[Math.floor(Math.random() * res.data.length)];
	return `${data.text} - ${data.author}`;
};

const scheduleMessage = async () => {
	const quote = await getQuote();
	const guild = client.guilds.cache.get(guiddId);
	const channel = guild.channels.cache.get(channelId);
	channel.send(quote);
};

const discordMsg = (sender, action, type, url, title = '', body = '') => {
	const embed = new MessageEmbed()
		.setTitle(`${sender.login} ${action} ${type} ${title}`)
		.setURL(url)
		.setThumbnail(sender.avatar_url)
		.setDescription(`${body}`);
	return embed;
};

client.login(process.env.TOKEN);

// schedule time to send quote when it 11:00am, 4:00pm and 9:00pm UTC +1
schedule.scheduleJob('5 0 10 * * *', scheduleMessage);
schedule.scheduleJob('5 0 15 * * *', scheduleMessage);
schedule.scheduleJob('5 0 20 * * *', scheduleMessage);

// eslint-disable-next-line no-unused-vars
app.post('/github', (req, res) => {

});

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`),
);