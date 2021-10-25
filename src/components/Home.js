import AboutUs from "./AboutUs";

import Header from "./Header";
import ProductCard from "./ProductCard";
import Products from "./Products";


const loggedIn = true;
const Home = () => {
    return ( 
        <main>
        <Header name="Claire" loggedIn={loggedIn}/>
        <Products />
        <ProductCard/>
        <AboutUs/>
        </main>
    );
}

export default Home;