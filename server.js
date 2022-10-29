const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.get('/', (req, res) => {
  res.render('index', { message: 'Hello, World!'})
})

app.get('/users', (req, res) => {
  res.send("User List")
})

app.get('/users/new', (req, res) => {
  res.send("User New")
})

app.listen(3000);
