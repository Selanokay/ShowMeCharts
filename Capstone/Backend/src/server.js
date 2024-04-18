require('dotenv').config()

const mongoose = require('mongoose')
const musicinfo = require('./musicinfo')
const fs = require('fs')
const express = require('express')
const songRoutes = require('./routes/songs')
const multer = require('multer')
const path = require('path')
//const { top_n_songs } = require('./toptensongs')

//express app
const app = express()

//middleware (Use request.render to render pages, if you dont )
app.use(express.json())

//Multer middleware setup for handling file uploads. Uploads/ is temporary, actual destination will need to be included.
// Multer middleware setup for handling file uploads
const upload = multer({ dest: 'uploads/' })


// Route to render the upload form
app.get('/upload', (req, res) => {
   res.send(`
       <h1>Upload JSON File</h1>
       <form action="/api/upload-json" method="post" enctype="multipart/form-data">
           <input type="file" name="jsonFile">
           <button type="submit">Upload</button>
       </form>
   `);
});


// Route to handle file upload
app.post('/api/upload-json', upload.single('jsonFile'), async (req, res) => {
   try {
       // Check if file was uploaded
       if (!req.file) {
           return res.status(400).send('No file uploaded.');
       }


       // Read uploaded JSON file
       const jsonData = fs.readFileSync(req.file.path, 'utf8');
      
       // Parse JSON data
       const parsedData = JSON.parse(jsonData);


       // Save parsed data into MongoDB
       await musicinfo.insertMany(parsedData);


       // Respond with success message
       res.status(201).send('JSON file uploaded and data saved to MongoDB.');
   } catch (error) {
       console.error('Error uploading JSON file and saving data to MongoDB:', error);
       res.status(500).send('Internal Server Error');
   }
});


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
        const jsonData = fs.readFileSync('/Users/grr16/Pictures/Capstone-Folder/Capstone-5.0/Capstone/Capstone/Backend/src/parsing/StreamingHistory_music_0.json', 'utf8') 

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
