const express = require('express');
const bodyParser = require('body-parser');
const categoryRouter = express.Router();


categoryRouter.route('/')
    .get((req, res) => {
        res.render('category.ejs');
    })




module.exports = categoryRouter;