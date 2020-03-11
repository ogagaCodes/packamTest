const express = require('express');
const bodyParser = require('body-parser');
const newOrderRouter = express.Router();


newOrderRouter.route('/neworder')
    .get((req, res) => {
        res.render('neworder.ejs');
    })




module.exports = newOrderRouter;