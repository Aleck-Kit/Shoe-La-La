import React from 'react';
// logo
import logo from './logo.png';
//Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'



const Header = (props) => {
  return ( 
    <Jumbotron fluid>
    <header>
  <div className="overlay"></div>
  <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"><source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/></video>
  <div className="container h-100">
    <div className="d-flex h-100 text-center align-items-center App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <div className="w-100 text-white">
        <h1 className="display-3">{props.loggedIn ? `Hello, ${props.name}. What shoes would you like today?` : 'Please log in'}</h1>
        <p className="lead mb-0"><Button className="btn-lg text-dark pinkButton" style={{backgroundColor: '#ffb1b9', border:'3px solid white'}} variant="primary">Let's Go Shopping!</Button></p>
      </div>
    </div>
  </div>
</header>
  
</Jumbotron>
   
    
   );
}
 
export default Header;