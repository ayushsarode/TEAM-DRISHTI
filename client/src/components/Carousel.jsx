import React, { useState } from 'react';

const images = [
    "https://storage.googleapis.com/swayam2_central/assets/img/swayam_plus_image.png",
    "https://storage.googleapis.com/swayam2_central/assets/img/student.png",
    "https://storage.googleapis.com/swayam2_central/assets/img/college.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQbmNtdIbgefZIiEKJ4524xKhaaWcn4BZqw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeD6e_eZpdRgQk_iYvzebfFszaKC9BV0J1WA&s"
];

function ImageCarousel() {  // Renamed from Carousel to ImageCarousel
    const [current, setCurrent] = useState(0);

    function nextSlide() {
        setCurrent(current === images.length - 1 ? 0 : current + 1);
    }

    function prevSlide() {
        setCurrent(current === 0 ? images.length - 1 : current - 1);
    }

    return (
        <div>
            <div className="slider flex justify-evenly p-5 items-center h-screen">
                <div className="left-arrow bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer" onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </div>
                {images.map((image, index) => (
                    current === index && (
                        <div key={image} className="slide flex justify-center">
                            <img className='w-[80%] rounded-2xl' src={image} alt={`Slide ${index + 1}`} />
                        </div>
                    )
                ))}
                <div className="right-arrow bg-gray-200 hover:bg-gray-400 hover:text-white p-2 rounded-lg cursor-pointer" onClick={nextSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default ImageCarousel;  // Updated export statement

import { Carousel as BootstrapCarousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const CarouselComponent = () => {
    return (
        <BootstrapCarousel>
            <BootstrapCarousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=First+slide"
                    alt="First slide"
                />
                <BootstrapCarousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </BootstrapCarousel.Caption>
            </BootstrapCarousel.Item>
            <BootstrapCarousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=Second+slide"
                    alt="Second slide"
                />
                <BootstrapCarousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </BootstrapCarousel.Caption>
            </BootstrapCarousel.Item>
            <BootstrapCarousel.Item>
                <img
                    className="d-block w-100"
                    src="https://via.placeholder.com/800x400?text=Third+slide"
                    alt="Third slide"
                />
                <BootstrapCarousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </BootstrapCarousel.Caption>
            </BootstrapCarousel.Item>
        </BootstrapCarousel>
    );
};

export { CarouselComponent };
