import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import BuyProducts from '../../components/BuyProducts/BuyProducts';

const PageBuy = props => {
    return (
        <div>
            <BuyProducts />
        </div>
    );
};

PageBuy.propTypes = {
    
};

export default PageBuy;