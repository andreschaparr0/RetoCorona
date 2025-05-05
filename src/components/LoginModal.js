import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

function LoginModal({ show, handleClose, onLoginSuccess }) {
  const [userType, setUserType] = useState('person'); // Default to 'person'
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');

    // Basic validation (you'd replace this with actual authentication)
    if (!username || !password) {
      setError('Por favor, ingresa usuario y contraseña.');
      return;
    }

    // Simulate successful login based on user type selection
    onLoginSuccess(userType);

    // Reset form (optional)
    setUsername('');
    setPassword('');
    setUserType('person'); // Reset type
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Ingresar a Corona</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Soy un:</Form.Label>
            <Row>
              <Col>
                <Form.Check
                  type="radio"
                  label="Persona (B2C)"
                  name="userType"
                  id="userTypePerson"
                  value="person"
                  checked={userType === 'person'}
                  onChange={(e) => setUserType(e.target.value)}
                />
              </Col>
              <Col>
                <Form.Check
                  type="radio"
                  label="Empresa (B2B)"
                  name="userType"
                  id="userTypeCompany"
                  value="company"
                  checked={userType === 'company'}
                  onChange={(e) => setUserType(e.target.value)}
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          {error && <p className="text-danger">{error}</p>}

          <Button variant="primary" type="submit" className="w-100">
            Ingresar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default LoginModal;