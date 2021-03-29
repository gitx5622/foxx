import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import groundfloor from '../assets/groundfloor.jpg';
import wrecked from '../assets/wrecked.jpg';
import shameless from '../assets/shameless.jpeg';
import babydaddy from '../assets/babbsdaddy.jpg';
import metyourmother from '../assets/metyourmother.jpg';

const ComedySeries = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
    };
    return (
        <div>
            <div className="container-fluid">
                <a href="/"><h3>Comedy Series</h3></a>
                <Slider {...settings}>
                    <div>
                        <img src={groundfloor} width="250px" height="350px" alt="groundfloor"/>
                    </div>
                    <div>
                        <img src={wrecked} width="250px" height="350px" alt="wrecked"/>
                    </div>
                    <div>
                        <img src={shameless} width="250px" height="350px" alt="shameless"/>
                    </div>
                    <div>
                        <img src={babydaddy} width="250px" height="350px" alt="babydaddy"/>
                    </div>
                    <div>
                        <img src={metyourmother} width="250px" height="350px" alt="metyourmother"/>
                    </div>
                </Slider><br/><br/>
            </div>
        </div>
    )
};

export default ComedySeries;