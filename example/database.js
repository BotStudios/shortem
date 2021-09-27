const monk = require('monk');
const urls = monk(MONGODB_URI);
const db = urls.get('shortem')
db.createIndex({ slug: 1 }, { unique: true });

class mongoDatabase {
  
      constructor(data) {

      }
  
    async get(name) {
     return await db.findOne({ slug: name });
     }
  
    async set(name, value) {
     return await db.insert({
       url: name,
       slug: value
     });
     }
  
    async delete(name) {
     return await db.remove({
       url: name
     });
     }
     
    async list() {
     return await db.find({ });
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
