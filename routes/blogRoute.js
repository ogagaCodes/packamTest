const express = require('express');
const bodyParser = require('body-parser');
const  blogRouter = express.Router();


blogRouter.route('/')
       .get((req, res)=>{
           res.render('blog.ejs');
       })
  

  

module.exports = blogRouter;