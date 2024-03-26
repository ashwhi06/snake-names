const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
  res.render('Index',
    {
      breads: 'Bread',
      title: 'View Index Page'
    }
  )
  //res.send(Bread) // Displays the array of BREAD objects
})

//SHOW
breads.get('/:arrayIndex', (req, res) =>{  ///breads/{0}
    res.render('Show',{
      bread: Bread[req.params.arrayIndex],
      title: 'View Show Page'
    }) 
})

module.exports = breads
