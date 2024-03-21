require('dotenv').config()

const mongoose = require('mongoose')
const musicinfo = require('./musicinfo')
const express = require('express')
const songRoutes = require('./routes/songs')

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/songs', songRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

new musicinfo({ endTime: "test", artistName: "test", trackName: "test", msPlayed: "test"})
//musicinfo.save().then(() => console.log("Music Info Saved"))