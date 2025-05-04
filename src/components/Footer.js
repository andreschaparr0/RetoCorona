import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer bg-light py-4 mt-5">
      <Container>
        <Row>
          <Col className="text-center">
            <p>© 2025 Corona. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;