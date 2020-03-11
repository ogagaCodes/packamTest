const express = require('express');
const bodyParser = require('body-parser');
const allOrdersRouter = express.Router();


allOrdersRouter.route('/allOrder')
    .get((req, res) => {
        res.render('allOrder.ejs');
    })



module.exports = allOrdersRouter;