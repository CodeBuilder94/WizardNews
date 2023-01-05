const express = require("express");
const morgan = require('morgan');
const postBank = require('./postBank');

const app = express();

app.use(express.static('public'));

app.use(morgan('dem'));


app.get('/',(req, res)=>{
  const posts = postBank.list();

  const html = `<!DOCTYPE html>
   <html>
  <head> <title>Wizard News</title>
   <head> 
   <body>
  <ul>
  ${posts.map(post => `<li>${post.title}</1i>`)}
   </ul> 
  </body>
  </html>`

  res.send (html)
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
