import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import abominable from '../assets/abominable.jpeg';
import raya from '../assets/raya.jpg';
import tom from '../assets/tom.jpg';
import capturetheflag from '../assets/captureflag.jpg';
import peter from '../assets/peterrabbit.jpg';
import frozen from '../assets/frozen.jpg';

const AnimationMovies = () => {
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
                <a href="/"><h3>Animation Movies</h3></a>
                <Slider {...settings}>
                    <div>
                        <img src={abominable} width="250px" height="350px" alt="abominable"/>
                    </div>
                    <div>
                        <img src={raya} width="250px" height="350px" alt="raya"/>
                    </div>
                    <div>
                        <img src={tom} width="250px" height="350px" alt="tom"/>
                    </div>
                    <div>
                        <img src={capturetheflag} width="250px" height="350px" alt="capturetheflag"/>
                    </div>
                    <div>
                        <img src={peter} width="250px" height="350px" alt="peter"/>
                    </div>
                    <div>
                        <img src={frozen} width="250px" height="350px" alt="frozen"/>
                    </div>
                </Slider><br/><br/>
            </div>
        </div>
    )
};

export default AnimationMovies;