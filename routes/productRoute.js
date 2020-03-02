const express = require('express');
const bodyParser = require('body-parser');
const  productRouter = express.Router();


  productRouter.route('/')
       .get((req, res)=>{
           res.render('product.ejs');
       })
  

  

module.exports = productRouter;