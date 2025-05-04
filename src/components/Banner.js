import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Banner.css';

function Banner() {
  return (
    <section className="banner position-relative text-white text-center mb-5 d-flex align-items-center justify-content-center">
      <div className="banner-image">
        <img src="https://images.contentstack.io/v3/assets/blt2f8082df109cfbfb/blt2da58c6d5bad65a5/608c80133c9496102751a65b/2-Banner-1900x340.jpg" alt="Banner" className="img-fluid w-100" />
      </div>
      <Container className="banner-content position-absolute z-1">
        <Row className="justify-content-center">
          <Col md={8}>
            <h1 className="display-4 banner-title">ME SUENA MÁS INVERTIR<br/>EN MI CASA Y EN MI BIENESTAR</h1>
            <h2 className="lead banner-subtitle">ME SUENA MÁS CORONA</h2>
            <Button variant="primary" size="lg" className="mt-3 banner-button">VER PRODUCTOS</Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;