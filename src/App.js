import React, { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import CategorySection from './components/CategorySection';
import FeaturedProductsCarousel from './components/FeaturedProductsCarousel';
import RecommendedProductsSection from './components/RecommendedProductsSection';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal'; // Import the new LoginModal
import { Container } from 'react-bootstrap';
import './styles/App.css';

function App() {
  const [showLogin, setShowLogin] = useState(true); // Show login initially
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null); // 'person' or 'company'

  const handleLoginSuccess = (type) => {
    setIsLoggedIn(true);
    setUserType(type);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserType(null);
    setShowLogin(true); // Show login again on logout
  };

  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} onShowLogin={() => setShowLogin(true)} />
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} onLoginSuccess={handleLoginSuccess} />

      {isLoggedIn && ( // Only show main content if logged in
        <>
          <Banner />
          <main>
            <CategorySection />
            <section className="featured-products text-center py-5">
              <Container>
                <h2>Productos más vendidos</h2>
                <FeaturedProductsCarousel />
              </Container>
            </section>
            <RecommendedProductsSection userType={userType} /> {/* Pass userType */}
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;