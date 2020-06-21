const express = require('express');         
const bodyParser = require('body-parser');  
const app = express();                     
const hbs = require('hbs');                
const path = require('path');               


app.use(bodyParser.json())                         
app.use(bodyParser.urlencoded({ extended: true }))  

app.set('views',path.join(__dirname,'views'));             
app.set('view engine', 'hbs');                            
app.use('/assets',express.static(__dirname + '/public'));  

const mongoose = require('mongoose');
require('./app/routes/app.routes.js')(app);

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
