const express = require('express');
const bodyParser = require('body-parser');
const newUserRouter = express.Router();


newUserRouter.route('/newUser')
    .get((req, res) => {
        res.render('newUser.ejs');
    })




module.exports = newUserRouter;