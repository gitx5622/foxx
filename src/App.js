import React from 'react';
import Skeleton from "react-loading-skeleton";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
        {<Home/> || <Skeleton delay={3}/>}
    </div>
  );
}

export default App;
