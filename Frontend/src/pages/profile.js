import React from 'react';
import examplepfp from '../images/examplepfp.jpg';
import gradThumbnail from '../images/grad.jpg';
import currThumbnail from '../images/currents.jpg';
import crueThumbnail from '../images/cru.jpg';
import astroThumbnail from '../images/astro.png';
import d4cThumbnail from '../images/d4c.jpg';
import doomThumbnail from '../images/mfdoom.jpg';
import voidzThumbnail from '../images/voids.png';

import { Container, Row, Col } from 'react-bootstrap';

const Profile = () => {
    return (
      <div className="scrollable-container">
        <Container className="my-4">
          <div className="header">
            <div className="profile-container bg-light p-4 rounded">
              <Row className="align-items-center">
                <Col md={3}>
                  <div className="d-flex justify-content-center">
                    <div className="profile-pic-container">
                      <img src={examplepfp} alt="Profile Logo" width="150" height="150" className="profile-image img-fluid rounded-circle" />
                    </div>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="profile-info-container">
                    <div className="profile-info">
                      <h2 className="fw-bold">Name:</h2>
                      <p>Peter Nielsen</p>
                      <h2 className="fw-bold">School:</h2>
                      <p>University of Missouri-Columbia</p>
                      <h2 className="fw-bold">Bio:</h2>
                      <p>Mizzou Student and music fan!</p>
                    </div>
                  </div>
                </Col>
                <Col md={12}>
                  <br></br>
                  <div class="container h-100 d-flex justify-content-center align-items-center">
                    <div className="upload-button">
                      <form action="/api/upload-json" method="post" encType="multipart/form-data">
                        <input type="file" name="jsonFile" class="form-control mb-3" />
                        <button type="submit" class="btn btn-primary">Upload Your Music!</button>
                      </form>
                    </div>
                  </div>
                  <br></br>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h2 className="section-header fw-bold">Your Top Songs</h2>
                  <div className="prof-header">
                    <ul className="top-list">
                      <li>
                        <table>
                          <tr>
                            <td className="thumbnail-cell"><img src={gradThumbnail} alt="Top Song" /></td>
                            <td>Flashing Lights - Kanye West</td>
                          </tr>
                          <tr>
                            <td className="thumbnail-cell"><img src={currThumbnail} alt="Top Song" /></td>
                            <td>New Person, Same Old Mistakes - Tame Impala</td>
                          </tr>
                          <tr>
                            <td className="thumbnail-cell"><img src={crueThumbnail} alt="Top Song" /></td>
                            <td>Kickstart My Heart - Mötley Crüe</td>
                          </tr>
                          <tr>
                            <td className="thumbnail-cell"><img src={astroThumbnail} alt="Top Song" /></td>
                            <td>Coffee Bean - Travis Scott</td>
                          </tr>
                          <tr>
                            <td className="thumbnail-cell"><img src={d4cThumbnail} alt="Top Song" /></td>
                            <td>Dirty Deeds Done Dirt Cheap - AC/DC</td>
                          </tr>
                        </table>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <h2 className="section-header fw-bold">Your Top Artists</h2>
                  <div className="prof-header">
                    <ul className="top-list">
                      <li>
                        <table>
                          <tr>
                            <td className="thumbnail-cell"><img src={gradThumbnail} alt="Top Song" /></td>
                            <td>Kanye West</td>
                          </tr>
                          <tr>
                            <td className="thumbnail-cell"><img src={astroThumbnail} alt="Top Song" /></td>
                            <td>Travis Scott</td>
                          </tr>
                          <tr>
                            <td className="thumbnail-cell"><img src={currThumbnail} alt="Top Song" /></td>
                            <td>Tame Impala</td>
                          </tr>
                          <tr>
                            <td className="thumbnail-cell"><img src={doomThumbnail} alt="Top Song" /></td>
                            <td>MF DOOM</td>
                          </tr>
                          <tr>
                            <td className="thumbnail-cell"><img src={voidzThumbnail} alt="Top Song" /></td>
                            <td>The Voidz</td>
                          </tr>
                        </table>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    );
  };
  
  export default Profile;
