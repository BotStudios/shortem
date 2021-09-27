module.exports = {
  name: 'delete',
	async execute(msg, db) {
    var slug = msg.options.getString('slug');

    if(!slug)return await msg.reply({ embeds: [{ description: 'Something Went Wrong', color: '#e83838' }], ephemeral: true });

    const data = await db.get(slug);
    if(!data)return await msg.reply({ embeds: [{ description: 'Slug Does Not Exist', color: '#e83838' }], ephemeral: true });

    await db.delete(slug).then(async () => {
      await msg.reply({
        embeds: [{
          title: 'Deleted !',
          description: `**Slug:** \`${slug}\`\n**URL:** \`${data}\``,
          color: '#03fc2c'
        }]
      })
    })
	},
};
