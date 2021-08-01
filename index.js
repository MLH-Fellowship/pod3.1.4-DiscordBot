/* eslint-disable no-octal */
const Discord = require('discord.js');
const { default: axios } = require('axios');
const schedule = require('node-schedule');
const client = new Discord.Client();

const dotenv = require('dotenv');
dotenv.config();

const guiddId = '870629107992526880';
const channelId = '870629108441309187';

// Fetch motivational quote, randomize data and limit to one result
async function getQuote() {
	const res = await axios.get('https://type.fit/api/quotes');
	const data = res.data[Math.floor(Math.random() * res.data.length)];
	return `${data.text} - ${data.author}`;
}

client.login(process.env.TOKEN);

// Program to send message
const scheduleMessage = async () => {
	const quote = await getQuote();
	client.login(process.env.TOKEN).then(() => {
		const guild = client.guilds.cache.get(guiddId);
		const channel = guild.channels.cache.get(channelId);
		channel.send(quote);
	});
};

// schedule time to send quote when it 10:00am, 3:00pm and 6:00pm
schedule.scheduleJob({ hour: 10, minute: 00, dayOfWeek: 0 }, scheduleMessage);
schedule.scheduleJob({ hour: 15, minute: 00, dayOfWeek: 0 }, scheduleMessage);
schedule.scheduleJob({ hour: 18, minute: 37, dayOfWeek: 0 }, scheduleMessage);