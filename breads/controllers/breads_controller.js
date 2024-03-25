const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  res.render('Index',
    {
      breads: 'Bread'
    }
  )
  //res.send(Bread) // Displays the array of BREAD objects
})

//SHOW
breads.get('/:arrayIndex', (req, res) =>{  ///breads/{0}
    res.send(Bread[req.params.arrayIndex]) // req.params.arrayIndex is the index of the array
})

module.exports = breads
