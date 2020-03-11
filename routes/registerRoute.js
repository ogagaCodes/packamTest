const express = require('express');
const bodyParser = require('body-parser');
const  registerRouter = express.Router();


  registerRouter.route('/')
       .get((req, res)=>{
           res.render('register.ejs');
       })
  

  

module.exports = registerRouter;