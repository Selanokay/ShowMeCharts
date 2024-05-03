import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


export default function SignUpLogIn() {
  return (

    <Container fluid>
      <Row className="align-items-center">

      <Col xs={6} className="d-flex align-items-center justify-content-center">
          <div className="text-center">
            <div className="text-center header-text">ShowMeCharts</div>
          </div>
        </Col>

        <Col xs={6} className="d-flex justify-content-end">
          <div className="signup-login">
            <Link to="/signup"><button className='button me-2'>Sign Up</button></Link>
            <Link to="/login"><button className='button'>Log In</button></Link>
          </div>
        </Col>
      </Row>
    </Container>
    
  );
}