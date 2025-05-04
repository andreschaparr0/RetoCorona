import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './ProductCard.css';

function ProductCard({ product }) {
  return (
    <Card className="product-card h-100 rounded-0 border">
      <div className="product-image-wrapper position-relative"> {/* Wrapper para el hover de la imagen */}
        <Card.Img variant="top" src={product.image} alt={product.name} className="product-card-img rounded-0" />
        <div className="product-overlay d-flex flex-column justify-content-center align-items-center"> {/* Overlay para botones */}
            <Button variant="light" size="sm" className="mb-2 quick-view-button">Ver Producto</Button>
            <Button variant="primary" size="sm" className="add-to-cart-button">Añadir al Carrito</Button>
        </div>
      </div>
      <Card.Body className="d-flex flex-column justify-content-end p-2">
        <Card.Text className="text-muted product-ref text-center">{product.ref}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;