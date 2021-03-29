import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import breakingbad from '../assets/breaking_bad.jpg';
import got from '../assets/got.jpg';
import badland from '../assets/badland.jpg';
import blacklist from '../assets/blacklist.jpg';
import poi from '../assets/poi.jpg';
import vikings from '../assets/vikings.jpg';
import los from '../assets/los.jpg';
import merlin from '../assets/merlin.jpeg';
import dexter from '../assets/dexter.jpg';

const TopratedSeries = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 2,
    };
    return (
        <div>
                <div className="container-fluid">
                    <a href="/"><h3>Top Rated Series</h3></a>
                    <Slider {...settings}>
                        <div>
                            <img src={breakingbad} width="250px" height="350px" alt="breaking_bad"/>
                        </div>
                        <div>
                            <img src={got} width="250px" height="350px" alt="got"/>
                        </div>
                        <div>
                            <img src={badland} width="250px" height="350px" alt="badlands"/>
                        </div>
                        <div>
                            <img src={blacklist} width="250px" height="350px" alt="blacklist"/>
                        </div>
                        <div>
                            <img src={poi} width="250px" height="350px" alt="poi"/>
                        </div>
                        <div>
                            <img src={vikings} width="250px" height="350px" alt="vikings"/>
                        </div>
                        <div>
                            <img src={los} width="250px" height="350px" alt="los"/>
                        </div>
                        <div>
                            <img src={merlin} width="250px" height="350px" alt="merlin"/>
                        </div>
                        <div>
                            <img src={dexter} width="250px" height="350px" alt="dexter"/>
                        </div>
                    </Slider><br/><br/>
                </div>
        </div>
    )
};

export default TopratedSeries;