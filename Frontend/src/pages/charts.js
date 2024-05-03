import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // Import the CSS file for styling

const Charts = () => {
    const [topArtistsChart, setTopArtistsChart] = useState('');
    const [topSongsChart, setTopSongsChart] = useState('');
    const [topArtistsPieChart, setTopArtistsPieChart] = useState('');

    useEffect(() => {
        const fetchCharts = async () => {
            try {
                // Fetch top artists chart
                const artistsResponse = await axios.get('/api/top-artists-chart', { responseType: 'blob' });
                if (artistsResponse.status === 200) {
                    const artistsBlob = artistsResponse.data;
                    setTopArtistsChart(URL.createObjectURL(artistsBlob));
                } else {
                    throw new Error('Failed to fetch top artists chart');
                }

                // Fetch top songs chart
                const songsResponse = await axios.get('/api/top-songs-chart', { responseType: 'blob' });
                if (songsResponse.status === 200) {
                    const songsBlob = songsResponse.data;
                    setTopSongsChart(URL.createObjectURL(songsBlob));
                } else {
                    throw new Error('Failed to fetch top songs chart');
                }

                // Fetch top artists pie chart
                const artistsPieResponse = await axios.get('/api/top-artists-pie-chart', { responseType: 'blob' });
                if (artistsPieResponse.status === 200) {
                    const artistsPieBlob = artistsPieResponse.data;
                    setTopArtistsPieChart(URL.createObjectURL(artistsPieBlob));
                } else {
                    throw new Error('Failed to fetch top artists pie chart');
                }

            } catch (error) {
                console.error('Error fetching charts:', error);
            }
        };

        fetchCharts();

        // Cleanup function
        return () => {
            // Cleanup logic if needed
        };
    }, []);

    return (
        <div>
            
            <div className="chart-wrapper">
                <h2>Top Artists Chart</h2>
                <img src={topArtistsChart} alt="Loading Top Artists Chart..." />
            </div>

            <div className="chart-wrapper">
                <h2>Top Songs Chart</h2>
                <img src={topSongsChart} alt="Loading Top Songs Chart..." />
            </div>

            <div className="chart-wrapper">
                <h2>Top Artists Pie Chart</h2>
                <img src={topArtistsPieChart} alt="Loading Top Artists Pie Chart..." />
                <br></br>
            </div>
        </div>
    );
};

    

export default Charts;