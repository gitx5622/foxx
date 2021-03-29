import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import breakingbad from '../assets/breaking_bad.jpg';
import got from '../assets/got.jpg';
import badland from '../assets/badland.jpg';
import blacklist from '../assets/blacklist.jpg';
import poi from '../assets/poi.jpg';
// import vikings from '../assets/vikings.jpg';
// import los from '../assets/los.jpg';
// import merlin from '../assets/merlin.jpeg';
// import dexter from '../assets/dexter.jpg';

const TopratedSeries = () => {
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
                    <a href="/"><h3>Top Rated Series</h3></a>
                    <Slider {...settings}>
                        <div className="containerx">
                            <a href="/detailview">
                            <img src={breakingbad} width="250px" className="image" height="350px" alt="breaking_bad"/>
                                <div className="middle">
                                    <div className="text">John Doe</div>
                                </div>
                            </a>
                        </div>
                        <div className="containerx">
                            <img src={got} className="image" width="250px" height="350px" alt="got"/>
                            <div className="middle">
                                <div className="text">John Doe</div>
                            </div>
                        </div>
                        <div className="containerx">
                            <img src={badland} className="image" width="250px" height="350px" alt="badlands"/>
                            <div className="middle">
                                <div className="text">John Doe</div>
                            </div>
                        </div>
                        <div className="containerx">
                            <img src={blacklist} className="image" width="250px" height="350px" alt="blacklist"/>
                            <div className="middle">
                                <div className="text">John Doe</div>
                            </div>
                        </div>
                        <div className="containerx">
                            <img src={poi} className="image" width="250px" height="350px" alt="poi"/>
                            <div className="middle">
                                <div className="text">John Doe</div>
                            </div>
                        </div>
                        {/*<div>*/}
                        {/*    <img src={vikings} width="250px" height="350px" alt="vikings"/>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img src={los} width="250px" height="350px" alt="los"/>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img src={merlin} width="250px" height="350px" alt="merlin"/>*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    <img src={dexter} width="250px" height="350px" alt="dexter"/>*/}
                        {/*</div>*/}
                    </Slider><br/><br/>
                </div>
        </div>
    )
};

export default TopratedSeries;