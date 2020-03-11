const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "localhost",
    user: "okolie",
    password: "root",
    database: "test_db"
});

connection.connect(function(error) {
    if (error) throw error;
    console.log("connected");

});