// const express = require('express');
// const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
// const session = require('express-session');
// const mysql = require('mysql');
// const passport = require('passport');
// const app = express();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bcrypt = require('bcrypt-nodejs');
const flash = require('connect-flash');
const mysql = require('mysql');
const passport = require('passport');
app.use(flash());


// development usage 
//const debug = require('debug')('app');


//const port = 3000 || process.env.PORT;

app.set("view engine", "ejs");


// datatbase integration 
require('./dbConfig/dbConnection.js');

// passport configurtion 

require('./config/passport.js');

//querying database just a test
const connection = mysql.createConnection({
    host: "localhost",
    user: "okolie",
    password: "root",
    database: "test_db"
});

// configuring external packages
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'secpackam' }));
app.use(express.static(__dirname + '/public'));

//configuring routes
const aboutUsRouter = require('./routes/aboutUsRoute');
const shopRouter = require('./routes/shopRoute.js');
const okShopRouter = require('./routes/okshop.js');
const threeShopRouter = require('./routes/3kshop.js');
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
const brandRouter = require('./routes/brand');
const categoryRouter = require('./routes/category');
const attributeRouter = require('./routes/attributes');
const mainAttributeRouter = require('./routes/mainAttributes');

const newUserRouter = require('./routes/newUser');

app.use("/auth", authRouter);
app.use("/admin", attributeRouter);
app.use("/admin", mainAttributeRouter);

app.use("/about", aboutUsRouter);
app.use("/admin", adminRouter);
app.use("/admin", brandRouter);
app.use("/admin", categoryRouter);


app.use("/admin", newUserRouter);

app.use("/user", userRouter);
app.use("/vendor", vendorRouter);
app.use("/shop", shopRouter);
app.use("/okshop", okShopRouter);

app.use("/3kshop", threeShopRouter);
app.use("/cart", cartRouter);
app.use("/blog", blogRouter);
app.use("/checkout", checkOutRouter);
app.use("/login", loginRouter);
app.use("/contact", contactRouter);
app.use("/register", registerRouter);
app.use("/search", searchRouter);


app.get('/', (req, res) => {
    res.render("index");
})



app.listen(proces.env.PORT)