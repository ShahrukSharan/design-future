import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Services from "../../Services/Services";
import Reviews from "../../Reviews/Reviews.js";
import Contact from "../../Contact/Contact.js";
import Footer from "../../Footer/Footer.js";
import NavBar from "../NavBar/NavBar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Projects />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
