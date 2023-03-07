import React from "react";
import "./Home.css";
import Header from "./../../components/header/Header";
import WelcomeImperialTax from "./../../components/welcomeImperialTax/WelcomeImperialTax";
import Customer from "./../../components/customer/Customer";
import Contact from "./../../components/contact/Contact";
import Footer from "./../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <WelcomeImperialTax />
      <Customer />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
