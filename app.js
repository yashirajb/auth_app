// const express = require('express');

// const app = express();

// app.listen(3000); 


const express = require('express');

const app = express();

// route

app.get('/', (req, res, next) => {
    res.send(`<h1>Hello World</h1>`)
}); 

app.listen(3000); 

//****** basic server ******