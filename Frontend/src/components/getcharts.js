import { useEffect, useState } from 'react';
import axios from 'axios';

const GetCharts = () => {
    const [topSongs, setTopSongs] = useState([]);
    const [topArtists, setTopArtists] = useState([]);

    useEffect(() => {
        const fetchChartsData = async () => {
            try {
                // Fetch top songs data
                const songsResponse = await axios.get('/api/top-songs-chart');
                const songsData = await songsResponse.data;

                // Fetch top artists data
                const artistsResponse = await axios.get('/api/top-artists-chart');
                const artistsData = await artistsResponse.data;

                // Update state with fetched data
                setTopSongs(songsData);
                setTopArtists(artistsData);
            } catch (error) {
                console.error('Error fetching charts data:', error);
            }
        };

        fetchChartsData();
    }, []);

    return { topSongs, topArtists };
};

export default GetCharts;
