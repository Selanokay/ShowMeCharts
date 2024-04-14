require('dotenv').config()

const mongoose = require('mongoose')
const musicinfo = require('./musicinfo')
const fs = require('fs')
const express = require('express')
const songRoutes = require('./routes/songs')
//const { top_n_songs } = require('./toptensongs')

//express app
const app = express()

//middleware (Use request.render to render pages, if you dont )
app.use(express.json())

//Multer middleware setup for handling file uploads. Uploads/ is temporary, actual destination will need to be included.
//const upload = multer({ dest: 'uploads/' }) 

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// fetch all music info from MongoDB listed by Most minutes playes
app.get('/api/allsongs', async (req, res) => {
    try {
        const allMusicInfo = await musicinfo.find().sort({ msPlayed: -1 });
        res.status(200).json(allMusicInfo);
    } catch (error) {
        console.error('Error fetching all music info:', error);
        res.status(500).send('Internal Server Error');
    }
});


app.get('/api/parse-json', async (req, res) => {
    try {
        // Read JSON file
        const jsonData = fs.readFileSync('/Users/grr16/Pictures/Capstone-Folder/Capstone-4.0/Capstone/Backend/src/parsing/StreamingHistory_music_0.json', 'utf8') 

        // Parse JSON data
        const parsedData = JSON.parse(jsonData)

        //Save parsed data into MongoDB
        await musicinfo.insertMany(parsedData)

        //Respond with success message
        res.status(201).send('JSON file parsed and data saved to mongoDB.')
    } catch (error) {
        console.error('Error parsing JSON file and saving data to MongoDB:', error)
        res.status(500).send('Internal Server Error')
    }
});

//routes
app.use('/api/songs', songRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB')
        app.listen(process.env.PORT, () => {
            console.log('Listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error)
    })
