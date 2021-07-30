require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT
const app = express()
const catRoutes = require('./routes/catRoutes')

app.set('view engine', 'ejs')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(result => app.listen(PORT, () => console.log(`http://localhost:${PORT}`)))
    .catch(err => console.log(err))


app.get('/', (req, res) => {
    res.render('index')
})

// MVC
// ModelViewControler
// optional, bei größeren Projekten sehr sinnvoll!
// Ziel: Code modularer / übersichtlicher zu gestalten


// Cat Routes
// erster Parameter definiert, wo es sein soll
app.use('/cats', catRoutes)

app.get('/about', (req, res) => {
    res.render('about')
})