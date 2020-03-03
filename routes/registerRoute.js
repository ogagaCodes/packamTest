const express = require('express');
const bodyParser = require('body-parser');
const  registerRouter = express.Router();


  registerRouter.route('/')
       .get((req, res)=>{
           res.render('about.ejs');
       })
  

  

module.exports = registerRouter;