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

//SHOW /breads/{0}
breads.get('/:arrayIndex', (req, res) =>{  
   if (Bread[req.params.arrayIndex]) {
      res.render('Show',{
        bread: Bread[req.params.arrayIndex],
        title: 'View Show Page'
      }) 
   } else {
    res.send('404: Bread not found')
   }
})


module.exports = breads
