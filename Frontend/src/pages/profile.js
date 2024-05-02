import React from 'react';
import examplepfp from '../images/examplepfp.jpg';
import gradThumbnail from '../images/grad.jpg';
import currThumbnail from '../images/currents.jpg';
import crueThumbnail from '../images/cru.jpg';
import astroThumbnail from '../images/astro.png';
import d4cThumbnail from '../images/d4c.jpg';
import doomThumbnail from '../images/mfdoom.jpg';
import voidzThumbnail from '../images/voids.png';

export default function Profile() {
    return (
        <div className="header">
            <div className="profile-header">
                <div className="profile-image-container">
                    <img src={examplepfp} alt="Profile Logo" width="150" height="150" className="profile-image"/>
                </div>
                <div className="profile-info">
                    <h1>Name: Peter Nielsen</h1>
                    <h1>School: University of Missouri-Columbia</h1>
                </div>
            </div>
            <div>
                <h2 className="section-header">Your Top Songs</h2>
                <ul className="top-list">
                    <li>
                        <table>
                            <tr>
                                <td className="thumbnail-cell"><img src={gradThumbnail} alt="Top Song"/></td>
                                <td>Flashing Lights - Kanye West</td>
                            </tr>
                        </table>
                    </li>
                    <li>
                        <table>
                            <tr>
                                <td className="thumbnail-cell"><img src={currThumbnail} alt="Top Song"/></td>
                                <td>New Person, Same Old Mistakes - Tame Impala</td>
                            </tr>
                        </table>
                    </li>
                    <li>
                        <table>
                            <tr>
                                <td className="thumbnail-cell"><img src={crueThumbnail} alt="Top Song"/></td>
                                <td>Kickstart My Heart - Mötley Crüe</td>
                            </tr>
                        </table>
                    </li>
                    <li>
                        <table>
                            <tr>
                                <td className="thumbnail-cell"><img src={astroThumbnail} alt="Top Song"/></td>
                                <td>Coffee Bean - Travis Scott</td>
                            </tr>
                        </table>
                    </li>
                    <li>
                        <table>
                            <tr>
                                <td className="thumbnail-cell"><img src={d4cThumbnail} alt="Top Song"/></td>
                                <td>Dirty Deeds Done Dirt Cheap - AC/DC</td>
                            </tr>
                        </table>
                    </li>
                </ul>
                <br/>
                <h2 className="section-header">Your Top Artists</h2>
                <ul className="top-list">
                    <li>
                        <table>
                            <tr>
                                <td className="thumbnail-cell"><img src={gradThumbnail} alt="Top Song"/></td>
                                <td>Kanye West</td>
                            </tr>
                        </table>
                    </li>
                    <li>
                        <table>
                            <tr>
                                <td className="thumbnail-cell"><img src={astroThumbnail} alt="Top Song"/></td>
                                <td>Travis Scott</td>
                            </tr>
                        </table>
                    </li>
                    <li>
                        <table>
                            <tr>
                                <td className="thumbnail-cell"><img src={currThumbnail} alt="Top Song"/></td>
                                <td>Tame Impala</td>
                            </tr>
                        </table>
                    </li>
                    <li>
                        <table>
                            <tr>
                                <td className="thumbnail-cell"><img src={doomThumbnail} alt="Top Song"/></td>
                                <td>MF DOOM</td>
                            </tr>
                        </table>
                    </li>
                    <li>
                        <table>
                            <tr>
                                <td className="thumbnail-cell"><img src={voidzThumbnail} alt="Top Song"/></td>
                                <td>The Voidz</td>
                            </tr>
                        </table>
                    </li>
                </ul>
            </div>
        </div>
    )
}
