import React from 'react';
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { history } from './utils/history';
import MovieDetails from "./components/movieDetails";

const App = () => {
  return (
    <div className="App">
      <Router history={history} >
        <Switch>
            <Route path="/detailview" component={MovieDetails}/>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
