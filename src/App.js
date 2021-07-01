import React from "react";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Products from "./components/Products";
// import CardList from "./components/CardList";
// import {cards} from "./components/cards"; 
import ProductCard from "./components/ProductCard";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import "./App.css";





const loggedIn = true;


const App = () => {
  return (
    <>
    <NavBar/>
    <Header name="Claire" loggedIn={loggedIn} />
    <Products/>
    {/* <CardList cards={cards}/> */}
    <ProductCard/>
    <AboutUs/>
    <Footer/>

    </>
  
  
  );
};

export default App;
