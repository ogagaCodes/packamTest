const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const authRouter = express.Router();


authRouter.route('/login')
    .post((req, res) => {
        res.send(req.body.userName  + " "+ "welcome");
        console.log(req.body.password);
    });


authRouter.route('/register')
    .post((req, res) => {
        res.send(req.body + "welcome");
    });




module.exports = authRouter;