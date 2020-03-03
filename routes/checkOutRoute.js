const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const checkOutRouter = express.Router();


  checkOutRouter.route('/')
  .get((req, res)=>{
      res.render('checkout.ejs');
  });



module.exports = checkOutRouter;