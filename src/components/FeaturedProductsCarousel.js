import React from 'react';
import Slider from "react-slick";
import ProductCard from './ProductCard';
import { featuredProducts } from '../data/mockData';
import './FeaturedProductsCarousel.css'; // Crea este archivo CSS

function FeaturedProductsCarousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
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
        <div className="carousel-container">
            <Slider {...settings}>
                {featuredProducts.map(product => (
                    <div key={product.id} className="px-2"> {}
                         <ProductCard product={product} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default FeaturedProductsCarousel;