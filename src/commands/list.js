const { MessageAttachment } = require('discord.js');
const Table = require('./../utils/table.js');
module.exports = {
  name: 'list',
	async execute(msg, db) {
    const data = await db.list();
    if(!data[0])return await msg.reply({ embeds: [{ description: 'Database Was Empty', color: '#e83838' }], ephemeral: true });

  var table = new Table({
    head: ['Slug', 'URL'],
    borders: true
  });
    for(i in data){
      table.push({
        [`${data[i]}`]: `${await db.get(data[i])}`,
      });
    }


    await msg.reply({ files: [new MessageAttachment(Buffer.from(`${table.toString()}`, 'utf-8'), 'list.txt')]})
	},
};
