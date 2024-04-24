import React from 'react';
import logoImage from '../images/logo.png';

export default function Charts() {
    return (
        // Charts
            <div class ="header">
            <h1>ProJect GraPhiNg</h1>
        
            <h2>Top Songs</h2>
            <ul>
                <li>
                    <table>
                        <tr>
                            <td><img src={logoImage} alt="Song"/></td>
                            <td>Artist Name</td>
                            <td>Songs Title</td>
                        </tr>
                    </table>
                </li>
        </ul>

        <h2>Top Artists</h2>
        <ul>
            <li>
                <table>
                    <tr>
                        <td><img src={logoImage} alt="Album"/></td>
                        <td>Artist Name</td>
                        <td>Album Title</td>
                    </tr>
                </table>
            </li>
        </ul>

    </div>
    )
}