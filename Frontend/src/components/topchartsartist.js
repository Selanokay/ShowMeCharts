import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopChartsArtist = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/top-artists-chart');
        const { data } = response;
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    return () => {
      // Cleanup function if needed
    };
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          {/* Render data here */}
        </div>
      ))}
    </div>
  );
};

export default TopChartsArtist;