const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

function router(){
  blogRouter.router.get('/', (req, res)=>{
      res.render('blog.ejs');
  });

  return blogRouter;
}

module.exports = router;