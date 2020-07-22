import React from 'react';
import PropTypes from 'prop-types';
import LayoutAdmin from '../../layout/LayoutAdmin/LayoutAdmin';
import Accessories from '../../components/Accessories/Accessories';

const AccessoriesOfProduct = props => {
    return (
        <LayoutAdmin productOrAdmin={true}>
            <Accessories />
        </LayoutAdmin>
    );
};

AccessoriesOfProduct.propTypes = {
    
};

export default AccessoriesOfProduct;