import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // Import the CSS file for styling

const ArtistBillboard = () => {

    const [topArtists, setTopArtists] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {

                const response = await axios.get('/api/top-artists-list');

                if (response.status === 200) {

                    setTopArtists(response.data)

                } else {

                    throw new Error('Failed to fetch top artists');

                }

            } catch (error) {

                console.error('Error fetching top artists:', error);

            }
        };
        fetchData();
    }, []);

    return (
        <div className="artist-billboard">
            <h1>Top 100 Artists</h1>
            <div className="artist-list">
                {topArtists.map((artist, index) => (
                    <div key={index} className="artist">
                        <h3>{artist.artist}</h3>
                        <p>Song Count: {artist.count}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ArtistBillboard;