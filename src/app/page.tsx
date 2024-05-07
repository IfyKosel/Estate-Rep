import AboutUs from "@/components/AboutUs/AboutUs";
import FeaturedProperties from "@/components/FeaturedProperties/FeaturedProperties";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import React from "react";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HowItWorks />
      <FeaturedProperties />
      <Services />
      <AboutUs />
    </>
  );
};

export default Home;
