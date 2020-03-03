const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const passport = require('passport');
const app = express();


const port = 3000 || process.env.PORT;

app.set("view engine", "ejs");


// datatbase integration 
const connection = mysql.createConnection({
    host:"localhost",
    userName : "ogaga",
    password:"ogaga"
});

connection.on( 'connection', function(error){
    if(error) throw error;
        console.log("connected");
        connection.query( "CREATE DATABASE test_db", function(error){
        if(error) throw error;
        console.log("database created");
    })
})

// configuring external packages
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

//configuring routes
const aboutUsRouter = require('./routes/aboutUsRoute');
const shopRouter = require('./routes/shopRoute.js');
const cartRouter = require('./routes/cartRoute');
const checkOutRouter = require('./routes/checkOutRoute');
const searchRouter = require('./routes/searchRoute');
const contactRouter = require('./routes/contactRoute');
const blogRouter = require('./routes/blogRoute.js');

// user registration login and authentication
const loginRouter = require('./routes/loginRoute');
const registerRouter = require('./routes/registerRoute');
const authRouter = require('./routes/authRoutes.js');

// protected routews
const adminRouter = require('./routes/adminRoute');
const userRouter = require('./routes/userRoute');
const vendorRouter = require('./routes/vendorRoute');

app.use("/auth", authRouter);
app.use("/about", aboutUsRouter);
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/vendor", vendorRouter);
app.use("/shop", shopRouter);
app.use("/cart", cartRouter);
app.use("/blog", blogRouter);
app.use("/checkout", checkOutRouter);
app.use("/login", loginRouter);
app.use("/contact", contactRouter);
app.use("/register", registerRouter);
app.use("/search", searchRouter);

app.get('/', (req, res)=>{
     res.render("index");
})



app.listen(port, function(){
    console.log('listening on port' +  port);
})