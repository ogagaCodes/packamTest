const express = require('express');
const bodyParser = require('body-parser');
const contactUsRouter = express.Router();


contactUsRouter.route('/')
    .get((req, res) => {
        res.render('contact.ejs');
    })




module.exports = contactUsRouter;