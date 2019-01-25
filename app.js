const express = require('express')
const app = express();

app.get('/', (req, res) => {
  res.send(req.headers['user-agent'])
});

app.listen(3000, () => console.log('listening 3000'));