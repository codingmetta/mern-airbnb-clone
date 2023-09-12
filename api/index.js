const express = require('express');
const cors = require('cors');
//OBJECT MODELING TOOL
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User.js');
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret ='iowqjd8923hbf3if';



//MIDDLEWARE

//-JSON parser
app.use(express.json());

//-CORS allowance
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

//DATABASE
mongoose.connect(process.env.MONGO_URL);


//ENDPOINTS
app.get('/test', (req,res)=> {
    res.json('test sus')
});

app.post('/register', async (req, res)=> {
    const {firstname,lastname,email,password} = req.body;

    try {
    //Create a user
        const userDoc = await User.create({
            firstname,
            lastname,
            email,
            password: bcrypt.hashSync(password, bcryptSalt),
        });

        //response auslesen
        res.json(userDoc);

    } catch (e) {

        //409 unsafe for e-mail authentication 
        //'422 Unprocessable Content' or '200 OK' is better
        res.status(422).json(e)
    }

})

app.post('/login', async (req, res)=> {
    const {email,password} = req.body;
    const userDoc = await User.findOne({email});

    if (userDoc){
        const is_pw_valid = bcrypt.compareSync(password, userDoc.password);
        if (is_pw_valid ){
            //JSON Web Token
            jwt.sign({email:userDoc.email, id:userDoc._id}, jwtSecret, {}, (err, token) =>{
                if (err) throw err;
                res.cookie('token', token).json('password is valid')
            });
        } else {
            res.status(422).json('password entered is not valid');
        }
    } else {
        res.json('account does not exist');
    }

})

app.listen(4000);