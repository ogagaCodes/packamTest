const express = require('express');
const bodyParser = require('body-parser');
const  vendorRouter = express.Router();


  vendorRouter.route('/')
       .get((req, res)=>{
           res.render('about.ejs');
       })
  

  

module.exports = vendorRouter;