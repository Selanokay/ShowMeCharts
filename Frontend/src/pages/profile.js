import React from 'react';
import logoImage from '../images/logo.png';

export default function Profile() { 
    return (
       //Profile Info
        <div className="header">
            <br></br>
            <br></br>
            <br></br>
            <div className="profile-header">
                <img src={logoImage} alt="Profile Logo" width="150" height="150"/>
                    <div className="profile-info">
                        <h1>Name: </h1>
                        <h1>School: </h1>
                    </div>
            </div>
            <br></br>
            <div>
                <h2>Your Top Songs</h2>
                <ul>
                    <li>
                        <table>
                            <tr>
                                <td><img src={logoImage} alt="Top Song" /></td>
                                <td>Artist Name</td>
                                <td>Song Title</td>
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
                                <td><img src={logoImage} alt="Top Artist" /></td>
                                <td>Artist Name</td>
                                <td>Song Title</td>
                            </tr>
                        </table>
                    </li>
                </ul>
            </div>
        </div>
    )
}