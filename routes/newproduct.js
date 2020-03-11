const express = require('express');
const bodyParser = require('body-parser');
const newProductRouter = express.Router();


newProductRouter.route('/newproduct')
    .get((req, res) => {
        res.render('admin/newproduct.ejs');
    })




module.exports = newProductRouter;