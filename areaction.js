const { bot } = require('../lib/')
/*
bot(
	{
		pattern: 'areact ?(.*)',
		fromMe: false,
		desc: 'Creates fancy text from given text',
		type: 'misc',
	},
	async (message, match) => {
  */
const jids = '120363037627355464@g.us'
const gids = jids.split(',')
bot({ on: 'text', fromMe: false, type: 'ap' }, async (message, match) => {
	if (!message.fromMe) {
		const react = {
			text: '❤️',
			key: message.message.key,
		}
		if (gids.includes(message.jid))
			return await message.send(react, {}, 'react')
	}
})
