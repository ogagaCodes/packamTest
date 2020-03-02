const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

function router(){
  aboutUsRouter.router.get('/', (req, res)=>{
      res.render('about.ejs');
  });

  return aboutUsRouter;
}

module.exports = router;