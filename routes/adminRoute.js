const express = require('express');
const bodyParser = require('body-parser');
const  adminRouter = express.Router();


  adminRouter.route('/')
       .get((req, res)=>{
           res.render('admin.ejs');
       })
  

  

module.exports = adminRouter;