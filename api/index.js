const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors({
    credentials: true,
    origin: 'http://localhost:5174',
}));

app.get('/test', (req,res)=> {
    res.json('test success')
});

app.listen(4000);