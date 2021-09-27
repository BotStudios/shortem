const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
const db = require('./../utils/utils.js');
const config = require('./../config.json');
const notFoundPath = path.join(__dirname, 'public/404.html');

app.enable('trust proxy');

app.use(helmet()); // Add On Some Headers 
app.use(express.json()); // Return JSON Data
app.use(express.static('./public')); 


app.get('/', async (req,res) => {
  // Use HTML
 res.sendFile(path.join(__dirname, './public/index.html'))
  // Or redirect
 // res.redirect('https://github.com/BotStudios/shortem')
})

app.get('/:id', async (req,res) => {
   const slug = req.params.id;
  try {
    var url = await db.get(slug);
    if (url) {
      return res.redirect(`${url}`);
    }
    return res.status(404).sendFile(notFoundPath);
  } catch (error) {
    return res.status(404).sendFile(notFoundPath);
  }
})

app.use((req, res, next) => {
  res.status(404).sendFile(notFoundPath);
});


app.listen(config.token || process.env.PORT)

