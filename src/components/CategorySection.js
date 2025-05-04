import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './CategorySection.css';
import { categories } from '../data/mockData';

function CategorySection() {
  return (
    <section className="category-section text-center py-5">
      <Container>
        <h2 className="mb-4">Explora por categoría</h2>
        <Row className="justify-content-center g-4">
          {categories.map(category => (
            <Col key={category.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 text-white category-card rounded-0 border-0">
                <div className="category-image-wrapper">
                  <Card.Img src={category.image} alt={category.name} className="card-img rounded-0" />
                </div>
                <Card.ImgOverlay className="d-flex flex-column justify-content-end align-items-start p-4 category-overlay">
                  <Card.Title className="category-title">{category.name}</Card.Title>
                  <Card.Link href={category.link} className="text-white text-decoration-none ver-mas mt-2">VER MÁS ></Card.Link>
                </Card.ImgOverlay>
              </Card>
            </Col>
          ))}
        </Row>
        <Button variant="outline-dark" className="mt-5 ver-todo-button rounded-0">Ver todo →</Button>
      </Container>
    </section>
  );
}

export default CategorySection;