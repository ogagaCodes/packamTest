const express = require('express');
const bodyParser = require('body-parser');
const adminRouter = express.Router();


adminRouter.route('/')
    .get((req, res) => {
        res.render('adminLogin.ejs');
    });

adminRouter.route('/adminDashboard.ejs')
    .get((req, res) => {
        res.render('admin/adminDashboard.ejs');
    });

adminRouter.route('/newproduct')
    .get((req, res) => {
        res.render('./admin/newproduct.ejs');
    });

adminRouter.route('/products')
    .get((req, res) => {
        res.render('./admin/products.ejs');
    });

adminRouter.route('/neworder')
    .get((req, res) => {
        res.render('./admin/neworder.ejs');
    });

adminRouter.route('/allOrder')
    .get((req, res) => {
        res.render('./admin/allOrder.ejs');
    });

adminRouter.route('/newUser')
    .get((req, res) => {
        res.render('./admin/newUser.ejs');
    });
module.exports = adminRouter;