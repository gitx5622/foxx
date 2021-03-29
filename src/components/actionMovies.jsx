import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import breakingbad from '../assets/breaking_bad.jpg';


const ActionMovies = () => {
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
                <a href="/"><h3>Action Movies</h3></a>
                <Slider {...settings}>
                    <div>
                        <img src={breakingbad} width="250px" height="350px" alt="breaking_bad"/>
                    </div>
                    <div>
                        <h3>2</h3>
                    </div>
                    <div>
                        <h3>3</h3>
                    </div>
                    <div>
                        <h3>4</h3>
                    </div>
                    <div>
                        <h3>5</h3>
                    </div>
                </Slider><br/><br/>
            </div>
        </div>
    )
};

export default ActionMovies;