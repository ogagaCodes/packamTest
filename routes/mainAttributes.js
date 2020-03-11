const express = require('express');
const bodyParser = require('body-parser');
const mainAttributeRouter = express.Router();
const mysql = require('mysql');


mainAttributeRouter.route('/mainAttributes')
    .get((req, res) => {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "okolie",
            password: "root",
            database: "test_db"
        });

        connection.connect(function(error, result, next) {
            if (error) throw error;
            connection.query("SELECT attribute_group_id, Details FROM oc_attribute_group;", function(errror, results, fields) {
                if (error) throw error;
                console.log(results);

                let attribute = JSON.parse(JSON.stringify(results))
                res.render('admin/mainAttributes', attribute[0].Details);

            })

        });
    })


module.exports = mainAttributeRouter;