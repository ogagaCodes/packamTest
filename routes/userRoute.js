const express = require('express');
const bodyParser = require('body-parser');
const  userRouter = express.Router();


  userRouter.route('/')
       .post((req, res)=>{
           res.render('about.ejs');
       });
  

  

module.exports = userRouter;