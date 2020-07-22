import React from 'react';
import PropTypes from 'prop-types';
import LayoutAdmin from '../../layout/LayoutAdmin/LayoutAdmin';
import Cage from '../../components/Cage/Cage';

const CageOfProduct = props => {
    return (
        <LayoutAdmin productOrAdmin={true}>
            <Cage />
        </LayoutAdmin>
    );
};

CageOfProduct.propTypes = {
    
};

export default CageOfProduct;