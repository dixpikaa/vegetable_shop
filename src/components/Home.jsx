import React from 'react'
import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import FeatureProducts from "./FeatureProducts";
import Discounts from "./Discounts";
import Blogs from "./Blogs";
import Footer from "./Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <FeatureProducts />
      <Discounts />
      <Footer />
    </main>
  )
}

export default Home