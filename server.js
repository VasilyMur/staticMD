const express = require('express');
const next = require('next');
const { getItems } = require('./lib/getItems');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();


  server.get('/api/items', (req, res) => {
    res.json(getItems());
  });
  
  // server.get('/', (req, res) => {
  //   const actualPage = '/';
  //   nextApp.render(req, res, actualPage );
  // });

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})