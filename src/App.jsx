import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Home from  './Components/Home/Home';
import Shop from  './Components/Shop/Shop';
import About from  './Components/About/About';
import Player from  './Components/Player/Player';

// Style
import './App.scss';

function App() {
  return (
    <section className="App">
      <Router>
        <Switch>
          <Route exact strict path='/'  component={ Home }/>
          <Route path='/about'  component={ About }/>
          <Route path='/player' component={ Player }/>
          <Route path='/shop'   component={ Shop }/>
        </Switch>
      </Router>
    </section>
  );
}

export default App;
