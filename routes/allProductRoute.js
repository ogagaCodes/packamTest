const express = require('express');
const bodyParser = require('body-parser');
const allProductRouter = express.Router();


allProductRouter.route('/allProductRoute')
    .get((req, res) => {
        res.render('admin/products.ejs');
    })

module.exports = allProductRouter;