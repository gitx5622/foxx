import React from 'react';
import NavBar from "./navbar";
import Carousel from "./carousel";
import TopratedSeries from "./topratedseries";
import ComedySeries from "./comedySeries";
import AnimationMovies from "./animationMovies";
import EpicSeries from "./epicSeries";
import HorrorMovies from "./horrorMovies";
import ActionSeries from "./actionSeries";

const Home = () => {
    return (
        <div>
            <NavBar/>
            <Carousel/>
            <TopratedSeries/>
            <ComedySeries/>
            <AnimationMovies/>
            <EpicSeries/>
            <HorrorMovies/>
            <ActionSeries/>
        </div>
    )
};

export default Home;