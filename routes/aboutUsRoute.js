const express = require('express');
const bodyParser = require('body-parser');
const aboutUsRouter = express.Router();


aboutUsRouter.route('/')
    .get((req, res) => {
        res.render('about.ejs');
    })

module.exports = aboutUsRouter;