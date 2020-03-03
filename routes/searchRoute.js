const express = require('express');
const bodyParser = require('body-parser');
const  searchRouter = express.Router();


  searchRouter.route('/')
       .get((req, res)=>{
           res.render('search.ejs');
       })
  

  

module.exports = searchRouter;