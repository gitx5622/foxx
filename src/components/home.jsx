import React from 'react';
import NavBar from "./navbar";
import Carousel from "./carousel";
import TopratedSeries from "./topratedseries";
import ComedySeries from "./comedySeries";
import AnimationMovies from "./animationMovies";
import EpicSeries from "./epicSeries";
import HorrorMovies from "./horrorMovies";
import ActionSeries from "./actionSeries";
import ComedyMovies from "./comedyMovies";
import EpicMovies from "./epicMovies";
import DramaMovies from "./dramaMovies";
import HorrorSeries from "./horrorSeries";
import ActionMovies from "./actionMovies";
import DramaSeries from "./dramaSeries";

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
            <ComedyMovies/>
            <EpicMovies/>
            <DramaMovies/>
            <HorrorSeries/>
            <ActionMovies/>
            <DramaSeries/>
        </div>
    )
};

export default Home;