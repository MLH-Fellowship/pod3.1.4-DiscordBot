const { default: axios } = require('axios');

// Fetch motivational quote, randomize data and limit to one result
const getQuote = async () => {
	const res = await axios.get('https://type.fit/api/quotes');
	const data = res.data[Math.floor(Math.random() * res.data.length)];
	return `${data.text} - ${data.author}`;
};

exports.getQuote = getQuote;