import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ChartsComponent = () => {
    const [topArtistsChart, setTopArtistsChart] = useState('');
    const [topSongsChart, setTopSongsChart] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const artistsResponse = await axios.get('/api/top-artists-chart');
                const artistsBlob = await artistsResponse.data;

                const artistsObjectURL = URL.createObjectURL(artistsBlob);
                setTopArtistsChart(artistsObjectURL);

                const songsResponse = await axios.get('/api/top-songs-chart');
                const songsBlob = await songsResponse.data;

                const songsObjectURL = URL.createObjectURL(songsBlob);
                setTopSongsChart(songsObjectURL);
            } catch (error) {
                console.error('Error fetching charts:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="chart-container">
                <h2>Top Artists Chart</h2>
                <img src={topArtistsChart} alt="Top Artists Chart" />
            </div>
            <div className="chart-container">
                <h2>Top Songs Chart</h2>
                <img src={topSongsChart} alt="Top Songs Chart" />
            </div>
        </div>
    );
};

export default ChartsComponent;