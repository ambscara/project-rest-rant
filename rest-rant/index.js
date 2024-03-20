require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const methodOverride = require('method-override')

// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))



//Controllers & Routes
app.use('/places', require('./controllers/places'))

//routes
app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// db connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

  
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`listening on port ${PORT}`))