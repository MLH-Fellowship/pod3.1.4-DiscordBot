/* eslint-disable no-octal */
const Discord = require('discord.js');
const { default: axios } = require('axios');
const schedule = require('node-schedule');
const client = new Discord.Client();

const dotenv = require('dotenv');
dotenv.config();

const guiddId = '870629107992526880';
const channelId = '870629108441309187';

async function getQuote() {
	const res = await axios.get('https://type.fit/api/quotes');
	const data = res.data[Math.floor(Math.random() * res.data.length)];
	return `${data.text} - ${data.author}`;
}

client.once('ready', () => {
	console.log('Ready!');
});

// client.login(process.env.TOKEN);

schedule.scheduleJob({ hour: 10, minute: 00, dayOfWeek: 0 }, scheduleMessage());
schedule.scheduleJob({ hour: 15, minute: 21, dayOfWeek: 0 }, scheduleMessage());
schedule.scheduleJob({ hour: 18, minute: 00, dayOfWeek: 0 }, scheduleMessage());


const scheduleMessage = async () => {
	const quote = await getQuote();
	client.login(process.env.TOKEN).then(() => {
		const guild = client.guilds.get(guiddId);
		if(guild && guild.channels.get(channelId)) {
			guild.channels.get(channelId).send(quote).then(() => client.destroy());
		}
		else {
			client.destroy();
		}
	});
};
