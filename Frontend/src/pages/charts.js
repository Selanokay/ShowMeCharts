import React from 'react';
import getCharts from '../components/getcharts.js';

const Charts = () => {
    const { topSongs, topArtists } = getCharts();

    return (
        <div className="header">
            <h1>ProJect GraPhiNg</h1>

            <h2>Top Songs</h2>
            <ul>
                {topSongs.map(song => (
                    <li key={song.id}>
                        <table>
                            <tr>
                                <td><img src={song.image} alt="Song"/></td>
                                <td>{song.artistName}</td>
                                <td>{song.songTitle}</td>
                            </tr>
                        </table>
                    </li>
                ))}
            </ul>

            <h2>Top Artists</h2>
            <ul>
                {topArtists.map(artist => (
                    <li key={artist.id}>
                        <table>
                            <tr>
                                <td><img src={artist.image} alt="Album"/></td>
                                <td>{artist.artistName}</td>
                                <td>{artist.albumTitle}</td>
                            </tr>
                        </table>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Charts;