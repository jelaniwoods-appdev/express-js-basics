const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('index', { message: 'Hello, World!'})
})

app.listen(3000);
