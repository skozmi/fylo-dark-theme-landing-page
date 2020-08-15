const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
app.use(express.static('public'));

//const apiRouter = require('./server/api');
//app.use('/api', apiRouter); 

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`);
});