/* eslint-disable no-case-declarations */
const express = require('express');
const dotenv = require('dotenv');
const { Client, MessageEmbed } = require('discord.js');
const schedule = require('node-schedule');
const { getQuote } = require('./getQuote');

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

const scheduleMessage = async () => {
	const quote = await getQuote();
	const guild = client.guilds.cache.get(guiddId);
	const channel = guild.channels.cache.get(channelId);
	channel.send(quote);
};

const discordMsg = (sender, action, type, url, title = '', body = '') => {
	const embed = new MessageEmbed()
		.setTitle(`${sender.login} ${action} ${type} ${title}`)
		.setURL(url.replace('api.', '').replace('/repos', ''))
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

	async function NotifyChannel() {
		const actionType = req.headers['x-github-event'];
		const resbody = req.body;
		const sender = resbody.sender;
		const guild = client.guilds.cache.get(guiddId);
		const channel = guild.channels.cache.get(channelId);

		switch (actionType) {
		case 'issue_comment':
			const msg = discordMsg(sender, resbody.action, 'comment on issue', resbody.issue.url, resbody.issue.title, resbody.comment.body);
			channel.send(msg);
			break;
		case 'issues':
			const issueMsg = discordMsg(sender, resbody.action, 'an issue', resbody.issue.url, resbody.issue.title, resbody.issue.body);

			channel.send(issueMsg);
			break;
		case 'pull_request':
			const prMsg = discordMsg(sender, resbody.action, 'a Pull Request', resbody.pull_request.url, resbody.pull_request.title, resbody.pull_request.body);

			channel.send(prMsg);
			break;
		case 'push':
			const pushMsg = discordMsg(sender, 'made', 'a push', resbody.head_commit.url);

			channel.send(pushMsg);
			break;
		case 'pull_request_review_comment':
			const prComment = discordMsg(sender, 'commented', 'on a PR', resbody.comment.url, '', resbody.comment.body);

			channel.send(prComment);
			break;
		case 'pull_request_review':
			const prRev = discordMsg(sender, resbody.action, 'a PR review', resbody.html_url, '', resbody.review.body);

			channel.send(prRev);
			break;
		default:
			break;
		}
	}
	NotifyChannel();
});

client.on('message', message => {
	const prefixes = ['!', '?', '/'];
	const prefix = prefixes.find(p => message.content.startsWith(p));
	if (!prefix) return;

	message.reply('I am here!');
});

app.listen(port, () =>
	console.log(`Example app listening at http://localhost:${port}`),
);
