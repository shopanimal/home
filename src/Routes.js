import React from 'react';
import PropTypes from 'prop-types';
import {
    Switch,
    Route,
  } from "react-router-dom";
import Signin from './view/Signin/Signin';
import Home from './view/Home/Home';
import Signup from './view/Signup/Signup';
import OrderAdmin from './view/OrderAdmin/OrderAdmin';
import DepositsAdmin from './view/DepositsAdmin/DepositsAdmin';
import FoodOfProducts from './view/FoodOfProducts/FoodOfProducts';
import CageOfProduct from './view/CageOfProduct/CageOfProduct';
import AccessoriesOfProduct from './view/AccessoriesOfProduct/AccessoriesOfProduct';


const Routes = props => {
    return (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Signin />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          {/* page admin */}
          <Route exact path="/order">
            <OrderAdmin />
          </Route>
          <Route exact path="/deposits">
            <DepositsAdmin />
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
        </Switch>
        
    );
};

Routes.propTypes = {
    
};

export default Routes;