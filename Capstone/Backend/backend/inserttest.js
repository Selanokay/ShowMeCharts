const mongoose = require('mongoose');
const fs = require('fs');

// Function to read and parse JSON file
function readJSONFile(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            callback(null, jsonData);
        } catch (error) {
            callback(error);
        }
    });
}

async function main() {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:4000/your_database', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connected to MongoDB');

    // Read JSON file
    readJSONFile('StreamingHistory_music_0.json', (err, listenData) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return;
        }

        // Parse data and insert into MongoDB
        const tracks = listenData.map(item => ({
            songName: item.trackName,
            artistName: item.artistName,
            endTime: new Date(item.endTime),
            msPlayed: item.msPlayed
        }));

        Track.insertMany(tracks)
            .then(() => {
                console.log('Data inserted successfully');
            })
            .catch(error => {
                console.error('Error inserting data:', error);
            })
            .finally(() => {
                mongoose.disconnect();
            });
    });
}

main();
