require('dotenv').config();

const { ChartJSNodeCanvas } = require('chartjs-node-canvas');
const mongoose = require('mongoose');
const express = require('express');
const musicinfo = require('./musicinfo');

// Read JSON file
function readJson(file_path) {
    const data = JSON.parse(fs.readFileSync(file_path, 'utf-8'));
    return data;
}

// Extract top ten most listened-to songs
function topTenSongs(data) {
    const songCounts = {};

    // Count occurrences of each song
    data.forEach(entry => {
        const key = `${entry.artistName} - ${entry.trackName}`;
        songCounts[key] = (songCounts[key] || 0) + 1;
    });

    // Sort by song counts
    const sortedSongs = Object.entries(songCounts)
                              .sort(([,countA], [,countB]) => countB - countA)
                              .slice(0, 10);

    return sortedSongs;
}

// Create top songs bar chart
async function createSongsBarChart(topSongs) {
    const width = 800;
    const height = 600;

    const chartCallback = (ChartJS) => {
        ChartJS.defaults.font.family = 'Arial';
        ChartJS.defaults.font.size = 18;
    };

    const chartCanvas = new ChartJSNodeCanvas({ width, height, chartCallback });

    const configuration = {
        type: 'bar',
        data: {
            labels: topSongs.map(([song, _]) => song),
            datasets: [{
                label: 'Number of Plays',
                data: topSongs.map(([_, count]) => count),
                backgroundColor: 'rgba(255, 215, 0, 0.2)',
                borderColor: 'rgba(255, 215, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Top 10 Most Played Songs'
                }
            }
        }
    };

    const image = await chartCanvas.renderToBuffer(configuration);
    return image; // Return the image buffer
}

// Extract top ten most listened-to artists
function topTenArtists(data) {
    const artistCounts = {};

    // Count occurrences of each artist
    data.forEach(entry => {
        const artist = entry.artistName;
        artistCounts[artist] = (artistCounts[artist] || 0) + 1;
    });

    // Sort by artist counts
    const sortedArtists = Object.entries(artistCounts)
                                  .sort(([,countA], [,countB]) => countB - countA)
                                  .slice(0, 10);

    return sortedArtists;
}

// Create top artists bar chart
async function createArtistsBarChart(topArtists) {
    const width = 800;
    const height = 600;

    const chartCallback = (ChartJS) => {
        ChartJS.defaults.font.family = 'Arial';
        ChartJS.defaults.font.size = 18;
    };

    const chartCanvas = new ChartJSNodeCanvas({ width, height, chartCallback });

    const configuration = {
        type: 'bar',
        data: {
            labels: topArtists.map(([artist, _]) => artist),
            datasets: [{
                label: 'Number of Plays',
                data: topArtists.map(([_, count]) => count),
                backgroundColor: 'rgba(255, 215, 0, 0.2)', 
                borderColor: 'rgba(255, 215, 0, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                title: {
                    display: true,
                    text: 'Top 10 Artists By Plays'
                }
            }
        }
    };

    const image = await chartCanvas.renderToBuffer(configuration);
    return image; // Return the image buffer
}

// Express app
const app = express();

// Middleware
app.use(express.json());

// Middleware for logging requests
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// Route to fetch all music info from MongoDB listed by most minutes played
app.get('/api/allsongs', async (req, res) => {
    try {
        const allMusicInfo = await musicinfo.find().sort({ msPlayed: -1 });
        res.status(200).json(allMusicInfo);
    } catch (error) {
        console.error('Error fetching all music info:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to generate and send top artists chart
app.get('/api/top-artists-chart', async (req, res) => {
    try {
        // Get top artists directly from MongoDB
        const topArtists = await musicinfo.aggregate([
            { $group: { _id: "$artistName", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 }
        ]);

        // Extract artist names and counts
        const topArtistsData = topArtists.map(artist => [artist._id, artist.count]);

        // Generate bar chart image
        const chartImage = await createArtistsBarChart(topArtistsData);

        // Send the image as response
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': chartImage.length
        });
        res.end(chartImage);
    } catch (error) {
        console.error('Error generating top artists chart:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Route to generate and send top songs chart
app.get('/api/top-songs-chart', async (req, res) => {
    try {
        // Get top songs directly from MongoDB
        const topSongs = await musicinfo.aggregate([
            { $group: { _id: { artist: "$artistName", song: "$trackName" }, count: { $sum: 1 } } },
            { $sort: { count: -1 } },
            { $limit: 10 }
        ]);

        // Extract song names and counts
        const topSongsData = topSongs.map(song => [`${song._id.artist} - ${song._id.song}`, song.count]);

        // Generate bar chart image
        const chartImage = await createSongsBarChart(topSongsData);

        // Send the image as response
        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': chartImage.length
        });
        res.end(chartImage);
    } catch (error) {
        console.error('Error generating top songs chart:', error);
        res.status(500).send('Internal Server Error');
    }
});

// Connect to MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(process.env.PORT, () => {
            console.log('Listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error);
    });
