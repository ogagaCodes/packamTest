const express = require('express');
const bodyParser = require('body-parser');
const brandRouter = express.Router();


brandRouter.route('/')
    .get((req, res) => {
        res.render('brand.ejs');
    })




module.exports = brandRouter;