import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import jackryan from '../assets/jackryan.jpg';
import lettertotheking from '../assets/lettertotheking.jpg';
import wuassassins from '../assets/wuassasins.jpg';
import taken from '../assets/taken.jpg';
import defenders from '../assets/defenders.jpeg';

const ActionSeries = () => {
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
                <a href="/"><h3>Action Series</h3></a>
                <Slider {...settings}>
                    <div>
                        <img src={wuassassins} width="250px" height="350px" alt="wuassasins"/>
                    </div>
                    <div>
                        <img src={jackryan} width="250px" height="350px" alt="jackryan"/>
                    </div>
                    <div>
                        <img src={taken} width="250px" height="350px" alt="taken"/>
                    </div>
                    <div>
                        <img src={lettertotheking} width="250px" height="350px" alt="lettertotheking"/>
                    </div>
                    <div>
                        <img src={defenders} width="250px" height="350px" alt="defenders"/>
                    </div>
                </Slider><br/><br/>
            </div>
        </div>
    )
};

export default ActionSeries;