import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './RecommendationProductCard.css';

function RecommendationProductCard({ product }) {
  return (
    <Card className="recommendation-product-card h-100 rounded-0 border">
      <Card.Body className="d-flex flex-column justify-content-start p-3">
         <Card.Title className="recommendation-product-name text-center mb-2">{product.producto}</Card.Title>
         <Card.Text className="mb-1"><small><strong>Municipio:</strong> {product.municipio}</small></Card.Text>
         <Card.Text className="mb-1"><small><strong>Zona:</strong> {product.zona}</small></Card.Text>
         <Card.Text className="mb-1"><small><strong>Categoría Macro:</strong> {product.categoria_b2b_macro}</small></Card.Text>
         <Card.Text className="mb-1"><small><strong>Categoría:</strong> {product.categoria_b2b}</small></Card.Text>
         <Card.Text className="mb-1"><small><strong>Subcategoría:</strong> {product.subcategoria_b2b}</small></Card.Text>
         <Card.Text className="mb-1"><small><strong>Valor Total:</strong> {product.valor_total}</small></Card.Text>
         <Card.Text className="mb-1"><small><strong>Alineación B2B:</strong> {product['alineación con portafolio estratégico b2b']}</small></Card.Text>
      </Card.Body>
    </Card>
  );
}

export default RecommendationProductCard;