const express = require('express');

const app = express();
const mongoose= require('mongoose');
const bodyParser= require('body-parser');
const postsRoute = require('./routes/posts');

require('dotenv/config');

app.use(bodyParser.json());
//import routes


app.use('/posts',postsRoute);

//ROUTE
app.get('/',(req,res) => {
    res.send('We are on home');
});

//Connect to db
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true },
 () =>  console.log('connected to DB!')
    
);
//How do we start listening to the server
app.listen(9000)



