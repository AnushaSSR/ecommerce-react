import React from 'react'
import { Carousel } from 'react-bootstrap'; // to display images in carousel, when viewing the productdetails
import 'bootstrap/dist/css/bootstrap.min.css';

const ImageCarousel = ({ images, product }) => {
    const customCarouselStyle = {
        minWidth: '400px',
        maxWidth: '400px', // Set your desired maximum width here
        margin: '0 auto',  // Center the carousel horizontally
        minHeight: '400px',
        maxHeight: '400px',
    };

    return (
        <div>
            <Carousel className="carousel-container" style={customCarouselStyle}>
                {images?.map((image) => (
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={image}
                            alt={product.title}
                            width={300}
                            height={300}
                        />
                        <Carousel.Caption>
                            <h3>{product.title}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
};

export default ImageCarousel;
