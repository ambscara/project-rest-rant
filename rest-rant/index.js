const express = require('express');

const app = express();


// middleware




//routes
app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(3000)