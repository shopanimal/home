import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Signin from "./view/Signin/Signin";
import Home from "./view/Home/Home";
import Signup from "./view/Signup/Signup";
import OrderAdmin from "./view/OrderAdmin/OrderAdmin";
import DepositsAdmin from "./view/DepositsAdmin/DepositsAdmin";
import FoodOfProducts from "./view/FoodOfProducts/FoodOfProducts";
import CageOfProduct from "./view/CageOfProduct/CageOfProduct";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AccessoriesOfProduct from "./view/AccessoriesOfProduct/AccessoriesOfProduct";
import PageBuy from "./view/PageBuy/PageBuy";
import AddPage from "./view/AddPage/AddPage";
import ContactPage from "./view/ContactPage/ContactPage";
import FallBackPage from "./view/FallBackPage/FallBackPage";

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/home">
        <Home />
      </Route>
      <Route exact path="/login">
        <Signin />
      </Route>
      <Route exact path="/signup">
        <Signup />
      </Route>
      {/* page admin */}
      <PrivateRoute exact path="/deposits">
        <DepositsAdmin />
      </PrivateRoute>
      <PrivateRoute path="/order">
        <OrderAdmin />
      </PrivateRoute>
      <PrivateRoute exact path="/addproduct">
        <AddPage />
      </PrivateRoute>
      <Route exact path="/contact">
        <ContactPage />
      </Route>
      <Route exact path="/fallback">
        <FallBackPage />
      </Route>
      {/* page product */}
      <Route exact path="/product/food">
        <FoodOfProducts />
      </Route>
      <Route exact path="/product/cage">
        <CageOfProduct />
      </Route>
      <Route exact path="/product/accessories">
        <AccessoriesOfProduct />
      </Route>
      {/* pagebuy */}
      <Route exact path="/confirm/:id">
        <PageBuy />
      </Route>
    </Switch>
  );
};

Routes.propTypes = {};

export default Routes;
