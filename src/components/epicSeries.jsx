import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import outpost from '../assets/outpost.jpg';
import witcher from '../assets/witcher.jpeg';
import see from '../assets/see.jpg';
import legendsofmonkey from '../assets/legenndsofmonkey.jpg';
import grisse from '../assets/grisse.jpg';


const EpicSeries = () => {
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
                <a href="/"><h3>Epic Series</h3></a>
                <Slider {...settings}>
                    <div>
                        <img src={outpost} width="250px" height="350px" alt="outpost"/>
                    </div>
                    <div>
                        <img src={witcher} width="250px" height="350px" alt="witcher"/>
                    </div>
                    <div>
                        <img src={see} width="250px" height="350px" alt="see"/>
                    </div>
                    <div>
                        <img src={legendsofmonkey} width="250px" height="350px" alt="legendsofmonkey"/>
                    </div>
                    <div>
                        <img src={grisse} width="250px" height="350px" alt="grisse"/>
                    </div>
                </Slider><br/><br/>
            </div>
        </div>
    )
};

export default EpicSeries;