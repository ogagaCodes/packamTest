// const express = require('express');
// const bodyParser = require('body-parser');
// const attributeRouter = express.Router();
// const mysql = require('mysql');

// attributeRouter.route('/attributes')
//     .get((req, res) => {
//         const connection = mysql.createConnection({
//             host: "localhost",
//             user: "okolie",
//             password: "root",
//             database: "test_db"
//         });

//         connection.connect(function(error, results, next) {
//             if (error) throw error;
//             connection.query("SELECT attribute_group_id, Details FROM oc_attribute_group;", function(errror, results, fields) {
//                 if (error) throw error;
//                 console.log(results);
//                 var group = results[0].attribute_group_id;
//                 var cat = results[0].Details;
//                 let category = {
//                     id: group,
//                     detail: cat
//                 }
//                 res.render('admin/attributes', category);
//             })


//         });
//     })


// module.exports = attributeRouter;