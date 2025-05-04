import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import CategorySection from './components/CategorySection';
import FeaturedProductsCarousel from './components/FeaturedProductsCarousel';
import RecommendedProductsSection from './components/RecommendedProductsSection'; // Importamos la nueva sección
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <main>
        <CategorySection />
        <section className="featured-products text-center py-5">
          <Container>
            <h2>Productos más vendidos</h2>
            <FeaturedProductsCarousel />
          </Container>
        </section>
        <RecommendedProductsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;