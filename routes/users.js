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

router.route('/:id')
  .get( (req, res) => {
    res.send(`User Get with id: ${req.params.id}`)
  })
  .put( (req, res) => {
    res.send(`User Get with id: ${req.params.id}`)
  })
  .delete( (req, res) => {
    res.send(`User Get with id: ${req.params.id}`)
  })

module.exports = router
