import React from 'react';
import carouselimage from '../assets/lostpiratekingdom.jpg';

const Carousel = () => {
    return (
        <div>
            <img src={carouselimage} width="100%" height="500px" alt="carouselimage"/>
        </div>
    )
};

export default Carousel;