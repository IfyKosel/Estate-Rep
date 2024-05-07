import AboutUs from "@/components/AboutUs/AboutUs";
import Faq from "@/components/Faq/Faq";
import FeaturedProperties from "@/components/FeaturedProperties/FeaturedProperties";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import Testimonial from "@/components/Testimonial/Testimonial";
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
      <Testimonial />
      <Faq />
      <Footer />
    </>
  );
};

export default Home;
