const express = require('express')
const breads = express.Router()
const Bread = require('../models/bread.js')

// INDEX
breads.get('/', (req, res) => {
    res.render('index',
        {
            breads: Bread,
            title: "My Index Page"
        }
    )
  // res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    if (Bread[req.params.arrayIndex]) {
        res.render('show', {
            bread:Bread[req.params.arrayIndex]
        })
    } else {
        res.render('notFound')
    }
})

module.exports = breads