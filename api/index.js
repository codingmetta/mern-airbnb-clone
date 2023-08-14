const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User.js');
require('dotenv').config();
const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);



//MIDDLEWARE
app.use(express.json());

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

//DATABASE
mongoose.connect(process.env.MONGO_URL);


//ENDPOINTS
app.get('/test', (req,res)=> {
    res.json('test succe')
});

app.post('/register', async (req, res)=> {
    const {firstname,lastname,email,password} = req.body;
    //Create a user
    const userDoc = await User.create({
        firstname,
        lastname,
        email,
        password: bcrypt.hashSync(password, bcryptSalt),
    });


    res.json(userDoc);
})

app.listen(4000);