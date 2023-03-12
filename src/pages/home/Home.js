import React from "react";
import "./Home.css";
import Header from "./../../components/header/Header";
import WelcomeImperialTax from "./../../components/welcomeImperialTax/WelcomeImperialTax";
import Customer from "./../../components/customer/Customer";
import Contact from "./../../components/contact/Contact";
import Footer from "./../../components/footer/Footer";
import About from "../../components/about/About";
import Service from "../../components/service/Service";

const Home = () => {
  return (
    <>
      <Header />
      <WelcomeImperialTax />
      <About />
      <Service />
      <Customer />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
