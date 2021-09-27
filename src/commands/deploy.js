const { SlashCommandBuilder } = require('@discordjs/builders')
, { REST } = require('@discordjs/rest')
, { Routes } = require('discord-api-types/v9');
require('dotenv').config();

const deploy = (client, message, config) => {
   if(message.author.id != config.owner_id || message.author.id != process.env.owner_id)return;
const commands = [
	new SlashCommandBuilder().setName('create').setDescription('Create A Slug').addStringOption(option => option.setName('slug').setDescription('Enter A Slug').setRequired(true)).addStringOption(option => option.setName('url').setDescription('Enter A URL').setRequired(true)),

	new SlashCommandBuilder().setName('delete').setDescription('Delete A Slug').addStringOption(option => option.setName('slug').setDescription('Enter A Slug To Delete').setRequired(true)),

	new SlashCommandBuilder().setName('info').setDescription('Get Information Of A Slug').addStringOption(option => option.setName('slug').setDescription('Enter A Slug')).addStringOption(option => option.setName('url').setDescription('Enter A Url')),
  
  new SlashCommandBuilder().setName('list').setDescription('Get A List Of Slugs')
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(config.token || process.env.token);

rest.put(Routes.applicationCommands(client.user.id), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);
  
}

module.exports = deploy;
