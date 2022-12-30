const { bot } = require('../lib/')
/*
bot(
	{
		pattern: 'app ?(.*)',
		fromMe: false,
		desc: 'Creates fancy text from given text',
		type: 'misc',
	},
	async (message, match) => {
  */
bot({ on: 'text', fromMe: false, type: 'ap' }, async (message, match) => {
	if (!message.fromMe && message.jid == '120363028822238739@g.us') {
		return await message.send(
			{
				text: '❤️',
				key: message.message.key,
			},
			{},
			'react'
		)
	}
})
