const express = require('express')
const router = express.Router()

router.get('', (req, res) => {
  res.send("User List")
})

router.get('/new', (req, res) => {
  res.send("User New")
})

router.post('/', (req, res) => {
  res.send("User Create")
})

router.get('/:id', (req, res) => {
  res.send(`User Get with id: ${req.params.id}`)
})

router.put('/:id', (req, res) => {
  res.send(`User Get with id: ${req.params.id}`)
})

router.delete('/:id', (req, res) => {
  res.send(`User Get with id: ${req.params.id}`)
})

module.exports = router
