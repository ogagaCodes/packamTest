const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "testdb.cuvsmbekarpw.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "admin2020",
    database: "test_db",
    port: "3306",
    Name: "packam"
});

connection.connect(function(error) {
    if (error) throw error;
    console.log("connected");

});