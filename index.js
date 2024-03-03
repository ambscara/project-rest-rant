require('dotenv').config()
const express = require('express')

const app = express()

app.use('/places', require('./controllers/places'))


// middleware




//routes
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('*', (req, res) => {
    res.status(404) .send('<h1>404 Page</h1>')
})
const PORT = process.env.PORT 
app.listen(PORT, console.log(`listening on port ${PORT}`))