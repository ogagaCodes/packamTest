const express = require('express');
const bodyParser = require('body-parser');
const orderReportRouter = express.Router();


orderReportRouter.route('/')
    .get((req, res) => {
        res.render('orderreport.ejs');
    })




module.exports = orderReportRouter;