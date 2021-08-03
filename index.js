/* eslint-disable no-octal */
const Discord = require('discord.js');
const { default: axios } = require('axios');
const schedule = require('node-schedule');
const { Octokit } = require('@octokit/rest');
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

const octokit = new Octokit({ auth: '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' });

const notificationResults = async () => {
	const { data: user } = await octokit.request('GET /user');

	console.log(`authenticated as ${user.login}`);

	const notifiy = await octokit.request('GET /repos/{owner}/{repo}/notifications', {
		owner: 'MLH-Fellowship',
		repo: 'pod3.1.4-DiscordBot',
	});

	console.log(notifiy.data);
};

notificationResults();

client.login(process.env.TOKEN);

// Program to send message
const scheduleMessage = async () => {
	const quote = await getQuote();
	const guild = client.guilds.cache.get(guiddId);
	const channel = guild.channels.cache.get(channelId);
	channel.send(quote);
};

// schedule time to send quote when it 10:00am, 3:00pm and 8:00pm
schedule.scheduleJob('5 0 10 * * *', scheduleMessage);
schedule.scheduleJob('5 0 15 * * *', scheduleMessage);
schedule.scheduleJob('5 0 20 * * *', scheduleMessage);
