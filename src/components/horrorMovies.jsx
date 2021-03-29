import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import wrongturn from '../assets/wrongturn.jpg';
import predator from '../assets/predator.jpeg';
import reckoning from '../assets/reckoning.jpg';
import annabelle from '../assets/annabelle.jpg';
import saw from '../assets/saw.jpg';

const HorrorMovies = () => {
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
                <a href="/"><h3>Horror Movies</h3></a>
                <Slider {...settings}>
                    <div>
                        <img src={wrongturn} width="250px" height="350px" alt="breaking_bad"/>
                    </div>
                    <div>
                        <img src={saw} width="250px" height="350px" alt="saw"/>
                    </div>
                    <div>
                        <img src={predator} width="250px" height="350px" alt="predator"/>
                    </div>
                    <div>
                        <img src={reckoning} width="250px" height="350px" alt="reckoning"/>
                    </div>
                    <div>
                        <img src={annabelle} width="250px" height="350px" alt="annabelle"/>
                    </div>
                </Slider><br/><br/>
            </div>
        </div>
    )
};

export default HorrorMovies;