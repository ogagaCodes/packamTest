const express = require('express');
const bodyParser = require('body-parser');
const threeShopRouter = express.Router();


threeShopRouter.route('/')
    .get((req, res) => {
        res.render('3kshop.ejs');
    })




module.exports = threeShopRouter;