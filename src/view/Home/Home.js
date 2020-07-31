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
import ReactDOM from 'react-dom';
import LazyLoad from 'react-lazyload';

const Home = (props) => {
  return (
    <Main stateFooter = {true}>
      <LazyLoad height={400} offset={1000} debounce={300} once>
      <Header />
      </LazyLoad>
      <LazyLoad height={500} offset={1000} debounce={300} once>
      <Blog />
      </LazyLoad>
      <LazyLoad height={400} offset={1000} debounce={300} once>
      <AboutUs />
      </LazyLoad>
      {/* <OurTrainers /> */}
      <LazyLoad height={400} offset={1000} debounce={300} once>
      <Product />
      </LazyLoad>
      <LazyLoad height={500} offset={1000} debounce={300} once>
      <PricingTable />
      </LazyLoad>
      <LazyLoad height={500} offset={1000} debounce={300} once>
      <OurServices />
      </LazyLoad>
      <LazyLoad height={300} offset={1000} debounce={300} once>
      <PhotoGallery />
      </LazyLoad>
      <LazyLoad height={500} offset={1000} debounce={300} once>
      <HappyCustomers />
      </LazyLoad>
      <LazyLoad height={500} offset={1000} debounce={300} once>
      <ContactUs />
      </LazyLoad>
    </Main>
  );
};

Home.propTypes = {};

export default Home;
