import React from 'react';
import PropTypes from 'prop-types';
import LayoutAdmin from '../../layout/LayoutAdmin/LayoutAdmin';
import Food from '../../components/Food/Food';

const FoodOfProducts = props => {
    return (
        <LayoutAdmin productOrAdmin={true}>
            <Food />
        </LayoutAdmin>
    );
};

FoodOfProducts.propTypes = {
    
};

export default FoodOfProducts;