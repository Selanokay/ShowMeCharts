import React from 'react';
import logoImage from '../images/logo.png';
import { Link } from 'react-router-dom';

export default function Profile() { 
    return (
       //Profile Info
        <div class="header">
            <h1>ProJect GraPhiNg</h1>

            <br></br>
            <div class="profile-header">
                <img src="images/logo.png" width="150" height="150"/>
                    <div class="profile-info">
                        <h1>Name</h1>
                        <h1>School</h1>
                    </div>
            </div>
            <br></br>
            <div>
                <h2>Your Top Songs</h2>
                <ul>
                    <li>
                        <table>
                            <tr>
                                <td><img src="images/logo.png" alt="Song"/></td>
                                <td>Artist Name</td>
                                <td>Songs Title</td>
                            </tr>
                        </table>
                    </li>
                </ul>
                <br></br>
                <h2>Your Top Artists</h2>
                <ul>
                    <li>
                        <table>
                            <tr>
                                <td><img src="images/logo.png" alt="Song"/></td>
                                <td>Artist Name</td>
                                <td>Songs Title</td>
                            </tr>
                        </table>
                    </li>
                </ul>
            </div>
        </div>
    )
}