const express = require("express");
const app = express();

app.get('/',(req, res)=>{
  const posts = postBank.lists();

  const html = `<!DOCTYPE html>
   <html>
  <head> <title>Wizard News</title>
   <head> 
   <body>
  <ul>
  ${posts.map(post => '<li>${post.title}</1i>')}
   </ul> 
  </body>
  </html>`

  res.send (html)
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
