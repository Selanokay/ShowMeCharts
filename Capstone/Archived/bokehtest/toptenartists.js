const fs = require('fs');
const { ChartJSNodeCanvas } = require('chartjs-node-canvas');

// Read JSON file
function readJson(file_path) {
    const data = JSON.parse(fs.readFileSync(file_path, 'utf-8'));
    return data;
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

// Create bar chart
async function createBarChart(topArtists) {
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
                    text: 'Top 10 Most Listened-To Artists'
                }
            }
        }
    };

    const image = await chartCanvas.renderToBuffer(configuration);
    fs.writeFileSync('toptenartistschart.png', image);
}

// Example usage
const file_path = "mymusic.json";
const data = readJson(file_path);
const topArtists = topTenArtists(data);
createBarChart(topArtists);
