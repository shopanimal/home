import React from "react";
import PropTypes from "prop-types";
import Header from "./components/Header";
import Blog from "./components/Blog";
import AboutUs from "./components/AboutUs";
import OurTrainers from "./components/OurTrainers";
import Product from "./components/Product";
import PricingTable from "./components/PricingTable";
import HappyCustomers from "./components/HappyCustomers";
import PhotoGallery from "./components/PhotoGallery";
import OurServices from "./components/OurServices";
import ContactUs from "./components/ContactUs";
import Main from "../../layout/Main/Main";

const Home = (props) => {
  return (
    <Main stateFooter = {true}>
      <Header />
      <Blog />
      <AboutUs />
      <OurTrainers />
      <Product />
      <PricingTable />
      <HappyCustomers />
      <PhotoGallery />
      <OurServices />
      <ContactUs />
    </Main>
  );
};

Home.propTypes = {};

export default Home;
