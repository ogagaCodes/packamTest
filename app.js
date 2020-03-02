const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();

const port = 3000 || process.env.PORT;

app.set("view engine", "ejs");

// configuring external packages
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

//

app.get('/', (req, res)=>{
     res.render("index");
})



app.listen(port, function(){
    console.log('listening on port' +  port);
})