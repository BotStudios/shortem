const monk = require('monk');
const urls = monk(MONGODB_URI);
const db = urls.get('shortem')
db.createIndex({ slug: 1 }, { unique: true });

class mongoDatabase {
  
      constructor(data) {

      }
  
    async get(name) {
     var data = await db.findOne({ slug: name });
     if(data){
       return data.url;
     }
     }
  
    async set(name, value) {
     return await db.insert({
       url: value,
       slug: name
     });
     }
  
    async delete(name) {
     return await db.remove({
       slug: name
     });
     }
     
    async list() {
     var data = await db.find({ });
     var list = [];
     for(var i of data){
       list.push(
         `${i.slug}`
       )
     }
     return list;
     }
}

/*
const Database = require('@replit/database');
const db = new Database();

class replitDatabase {
  
      constructor(data) {

      }
  
     async get(name) {
      return await db.get(name);
     }
  
    async set(name, value) {
      return await db.set(name, value);
     }
  
    async delete(name) {
       return await db.delete(name)
     }
     
    async list() {
      return await db.list()
     }
} */

module.exports = mongoDatabase;
