const express = require('express');
const bodyParser = require('body-parser');
const  shopRouter = express.Router();


  shopRouter.route('/')
       .get((req, res)=>{
           res.render('shop.ejs');
       })
  

  

module.exports = shopRouter;