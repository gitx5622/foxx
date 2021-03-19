import React from 'react';
import NavBar from "./components/navbar";
import Carousel from "./components/carousel";
import TopratedSeries from "./components/topratedseries";
import ComedySeries from "./components/comedySeries";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Carousel/>
        <TopratedSeries/>
        <ComedySeries/>
    </div>
  );
}

export default App;
