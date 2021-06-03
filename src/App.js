import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";





const loggedIn = true;


const App = () => {
  return (
    <>
    <NavBar/>
    <Header name="Claire" loggedIn={loggedIn} />
    <Products/>
    <AboutUs/>
    <Footer/>
    
    
    </>
  
  
  );
};

export default App;
