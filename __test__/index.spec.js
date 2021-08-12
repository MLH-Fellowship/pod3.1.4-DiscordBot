/* eslint-disable no-undef */
const { getQuote } = require('./../getQuote');

describe('get a quote', () => {
	it('Should return a random quote', async () => {
		await getQuote();
	});
});