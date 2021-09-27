const config = require('./../config.json');
require('dotenv').config();


if(!config.token && !process.env.token)throw new Error("Please Provide A Token");
if(!config.prefix && !process.env.prefix)throw new Error("Please Provide A Prefix");
if(!config.owner_id && !process.env.owner_id)throw new Error("Please Provide An Owner ID");
if(!config.PORT && !process.env.PORT)throw new Error("Please Provide A Port To Listen");
