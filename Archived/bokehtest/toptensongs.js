const fs = require('fs');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

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

// Create bar chart
async function createBarChart(topSongs) {
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
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
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
    fs.writeFileSync('top10songschart.png', image);
}

// Example usage
const file_path = "mymusic.json";
const data = readJson(file_path);
const topSongs = topTenSongs(data);
createBarChart(topSongs);
