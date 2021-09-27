module.exports = {
  name: 'info',
  execute: async (msg, db) => {
    var url = msg.options.getString('url');
    var slug = msg.options.getString('slug');

    if(!url && !slug)return await msg.reply({ embeds: [{ description: 'Please Provide A URL Or Slug', color: '#e83838' }], ephemeral: true });

    if(slug){
      var data = await db.get(slug);
      if(!data)return await msg.reply({ embeds: [{ description: 'This Slug Does Not Exist', color: '#e83838' }], ephemeral: true });

      await msg.reply({
        embeds: [{
          description: `**Slug:** \`${slug}\`\n**URL:** \`${data}\``,
          color: '#03fc2c'
        }]
      })
    }else {
      var data = await db.list();
      if(!data[0])return await msg.reply({ embeds: [{ description: 'Database Was Empty', color: '#e83838' }], ephemeral: true });
      
      var list = [];
      for(i in data){
        list.push({
          [`${await db.get(data[i])}`]: `${data[i]}`
      })
      }
  
     var find = list.find(e =>  e[`${url}`]);
     for(i in find){
       slug = find[i]
     }
     if(slug){
      await msg.reply({
       embeds: [{
          description: `**Slug:** \`${slug}\`\n**URL:** \`${url}\``,
          color: '#03fc2c'
        }]
      })
     }else {
    await msg.reply({ embeds: [{ description: 'This URL Does Not Exist', color: '#e83838' }], ephemeral: true });
     }
    }
  }
}
