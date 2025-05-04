import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap';
import Slider from "react-slick"; // Si usas react-slick para el carrusel
import RecommendationProductCard from './RecommendationProductCard'; // Importamos la nueva tarjeta
import './RecommendedProductsSection.css'; // Crea este archivo CSS

function RecommendedProductsSection() {
  const [productName, setProductName] = useState('');
  const [   recommendedProducts, setRecommendedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const fetchRecommendations = async (name) => {
    setLoading(true);
    setError(null);
    setRecommendedProducts([]);
    setHasSearched(true);

    try {
      const response = await fetch('http://127.0.0.1:5000/recommend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ product_name: name }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setRecommendedProducts(data);
    } catch (err) {
      setError(`Error al obtener recomendaciones: ${err.message}. Asegúrate de que el servicio de Python esté corriendo y el nombre del producto sea válido.`);
      console.error("Error fetching recommendations:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (event) => {
    setProductName(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (productName.trim()) {
      fetchRecommendations(productName.trim());
    } else {
      setError("Por favor, ingresa el nombre de un producto.");
      setRecommendedProducts([]);
      setHasSearched(false);
    }
  };

  // Configuración para el carrusel de recomendaciones (puedes ajustar estos valores)
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Un poco más lento que los destacados
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
  };

  return (
    <section className="recommended-products-section text-center py-5">
      <Container>
        <h2>Encuentra Productos Similares o Relacionados</h2>

        <Row className="justify-content-center mb-4">
          <Col md={6}>
            <Form onSubmit={handleSearch}>
              <Form.Group className="d-flex">
                <Form.Control
                  type="text"
                  placeholder="Ingresa el nombre de un producto (ej: Producto_1)"
                  value={productName}
                  onChange={handleInputChange}
                  className="me-2 rounded-0"
                />
                <Button variant="primary" type="submit" className="rounded-0">
                  Obtener Recomendaciones
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        {loading && (
          <div className="text-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
            <p>Buscando recomendaciones...</p>
          </div>
        )}

        {error && <Alert variant="danger">{error}</Alert>}

        {!loading && !error && hasSearched && recommendedProducts.length === 0 && (
          <p>No se encontraron recomendaciones para "{productName}". Intenta con otro producto o verifica el nombre.</p>
        )}

        {!loading && !error && recommendedProducts.length > 0 && (
           <>
             <h3>Recomendaciones para "{productName}":</h3>
             {/* Mostrar recomendaciones en un carrusel */}
             <div className="recommendations-carousel-container">
                 <Slider {...carouselSettings}>
                     {recommendedProducts.map((product, index) => (
                         <div key={index} className="px-2">
                              <RecommendationProductCard product={product} />
                         </div>
                     ))}
                 </Slider>
             </div>
           </>
        )}
      </Container>
    </section>
  );
}

export default RecommendedProductsSection;