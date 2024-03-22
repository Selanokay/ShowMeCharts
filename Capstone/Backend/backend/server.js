require('dotenv').config()

const mongoose = require('mongoose')
const musicinfo = require('./musicinfo')
const express = require('express')
const songRoutes = require('./routes/songs')

//express app
const app = express()

//middleware (Use request.render to render pages, if you dont )
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

new musicinfo({ endTime: "Egg", artistName: "Egg", trackName: "Egg", msPlayed: "Egg"})
musicinfo.save().then(() => console.log("Music Info Saved"))