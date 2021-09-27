/*!
 * Shortem v2.6.14
 * (c) 2021 Joe Lee
 * Released under the Apache License.
 * https://github.com/BotStudios/shortem
 */
const { Client, Intents, Collection } = require('discord.js')
, client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })
, { db } = require('./utils/utils.js')
, Joi = require('joi')
, fs = require('fs')
, deploy = require('./commands/deploy.js')
, config = require('./config.json')
, commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
client.commands = new Collection();

require('dotenv').config();
require('./server');


client.once('ready', () => {
  console.log(client.user.tag);

for (const file of commandFiles) {
  if(file != 'deploy.js'){
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command, config);
  }
}
})


client.on('messageCreate', async message => {
  if(message.content == "!!deploy"){
     deploy(client, message, config);
   }
})


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const command = client.commands.get(interaction.commandName);
	if (!command) return;
	try {
		await command.execute(interaction, db, Joi);
	} catch (error) {
		console.error(error);
		await interaction.reply({ embeds: [{ description: 'Something Went Wrong', color: '#e83838' }], ephemeral: true });
}
});


/*
client.on('interactionCreate', async message => {
   	if(!interaction.isCommand()) return;
try{
    var content = message.commandName;
    switch(content){
      case "create": 
      create(message, db);
      break;
      
      case "delete":
      del(message, db);
      break;

      case "info":
      info(message, db);
      break;

      case "list":
      list(message, db);
      break;

      default:
      await message.reply('This Command Does Not Exist !');
    }
}catch(e){
  console.error(e)
}
})*/
if(config.debug){
client.on('error', (err) => console.log(err));
client.on('debug', (err) => console.log(err));
}
client.login(config.token || process.env.token)
