const express = require('express');
const bodyParser = require('body-parser');
const okShopRouter = express.Router();


okShopRouter.route('/')
    .get((req, res) => {
        res.render('okshop.ejs');
    })




module.exports = okShopRouter;