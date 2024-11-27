
// import Head from "./Header/Head";
// import "./Header/head.css";




// import Products from "./Api/Products";
// import { Data } from "./Api/Data";


import Navbar from "./Components/Navbar";

import Slider from "./Components/Slider";
import ProductsList from "./Components/ProductsList";
import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";

import About from "./Components/About";

import Team from "./Components/Team";
import Contact from "./Components/Contact";

import ProductDetails from "./Components/ProductDetails";





export default function App() {

  return (
    <div >

      {/* <Head /> */}
      {/* <Products /> */}
      <Navbar />

      <Switch>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />

            </>

          }

        />

        <Route path="about" element={<About />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact/>} />


        <Route path="product/:productId" element={<ProductDetails />} />

      </Switch>


    </div >



  )
}