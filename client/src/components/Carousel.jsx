import React, { useState } from 'react';

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        'https://via.placeholder.com/600x300?text=Image+1',
        'https://via.placeholder.com/600x300?text=Image+2',
        'https://via.placeholder.com/600x300?text=Image+3',
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="carousel">
            <button onClick={prevSlide}>Previous</button>
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
            <button onClick={nextSlide}>Next</button>
        </div>
    );
};

export default Carousel;
