const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cartRouter = express.Router();

cartRouter.route('/')
.get((req, res)=>{
      res.render('cart.ejs');
  });




module.exports = cartRouter;