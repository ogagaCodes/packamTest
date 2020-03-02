const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

function router(){
  cartRouter.router.get('/', (req, res)=>{
      res.render('cart.ejs');
  });

  return aboutUsRouter;
}

module.exports = router;