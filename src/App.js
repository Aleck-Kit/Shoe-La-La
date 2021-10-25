import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from './components/Home'
import MyAccount from './components/MyAccount';
import Store from "./components/Store";
import Footer from "./components/Footer";







const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div className="content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/MyAccount" component={MyAccount} />
          <Route path="/Store" component={Store} />
        </Switch>
        </div>
        <Footer/>
      </div>  
    </Router>
    
  
  
  );
};

export default App;
