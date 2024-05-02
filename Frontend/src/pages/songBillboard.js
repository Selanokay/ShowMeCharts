import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // Import the CSS file for styling

const SongBillboard = () => {
    const [top100Songs, setTop100Songs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTopSongs = async () => {
            try {
                const response = await axios.get('/api/top-songs-list');
                if (response.status === 200) {
                    setTop100Songs(response.data);
                    setLoading(false);
                } else {
                    throw new Error('Failed to fetch top songs');
                }
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchTopSongs();

        // Cleanup function
        return () => {
            // Cleanup logic if needed
        };
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Top 100 Songs</h2>
            <ul>
                {top100Songs.map((song, index) => (
                    <li key={index}>
                        {song.artist} - {song.song} ({song.count})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SongBillboard;