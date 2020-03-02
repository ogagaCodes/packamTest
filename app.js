const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const port = 3000 || process.env.PORT;

app.set("view engine", "ejs");

// configuring external packages
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

//configuring routes
const aboutUsRouter = require('./routes/aboutUsRoute');
const adminRouter = require('./routes/adminRoute');
const userRouter = require('./routes/userRoute');
const vendorRouter = require('./routes/vendorRoute');
const loginRouter = require('./routes/loginRoute');
const productRouter = require('./routes/productRoute');
const cartRouter = require('./routes/cartRoute');
const checkOutRouter = require('./routes/checkOutRoute');
const searchRouter = require('./routes/searchRoute');
const contactRouter = require('./routes/contactRoute');
const registerRouter = require('./routes/registerRoute');


app.use('/about', aboutUsRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);
app.use('/vendor', vendorRouter);
app.use('/product', loginRouter);
app.use('/cart', productRouter);
app.use('/blog', cartRouter);
app.use('/checkout', checkOutRouter);
app.use('/login', loginRouter);
app.use('/contact', contactRouter);
app.use('/register', registerRouter);
app.use('/search', searchRouter);

app.get('/', (req, res)=>{
     res.render("index");
})



app.listen(port, function(){
    console.log('listening on port' +  port);
})