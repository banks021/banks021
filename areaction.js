const { bot,parsedJid } = require('../lib/')
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
const not_react_jids = '' // add jid so bot not react to message on that chat


const gids = parsedJid(not_react_jids)

bot({ on: 'text', fromMe: false, type: 'ap' }, async (message, match) => {
	if (!message.fromMe) {
		const react = {
			text: '❤️',
			key: message.message.key,
		}
		if (!gids.includes(message.jid))
			return await message.send(react, {}, 'react')
	}
})
