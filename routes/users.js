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
    console.log(req.user)
    res.send(`User Get with id: ${req.params.id}`)
  })
  .put( (req, res) => {
    res.send(`User Get with id: ${req.params.id}`)
  })
  .delete( (req, res) => {
    res.send(`User Get with id: ${req.params.id}`)
  })

const users = [ {name: "Jelani"}, { name: "Amber"} ]
// kind of like a 'before_action' but for specific request params
router.param("id", (req, res, next, id) => {
  // can set 'variables' for the request
  req.user = users[id]
  next() // continue to the next middleware function or response
})

// middleware - stuff that runs between the user sending the request
//  and the server sending back the response
module.exports = router
