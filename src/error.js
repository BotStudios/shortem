const config = require('./config.json');
const Database = require('./utils/database.js');
const database = new Database();
require('dotenv').config();


if(!config.token && !process.env.token)throw new Error("Please Provide A Token");
if(!config.prefix && !process.env.prefix)throw new Error("Please Provide A Prefix");
if(!config.owner_id && !process.env.owner_id)throw new Error("Please Provide An Owner ID");
if(!config.PORT && !process.env.PORT)throw new Error("Please Provide A Port To Listen");

(async () => {
  if(!Array.isArray(await database.list()))throw new Error("Please Specify Database Methods\nExample : https://github.com/BotStudios/shortem/tree/main/example")
})()
