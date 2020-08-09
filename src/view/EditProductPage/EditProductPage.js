import React from 'react';
import PropTypes from 'prop-types';
import LayoutAdmin from '../../layout/LayoutAdmin/LayoutAdmin';
import EditProduct from '../../components/EditProduct/EditProduct';

const EditProductPage = props => {
    return (
        <LayoutAdmin productOrAdmin={false}>
            <EditProduct />
        </LayoutAdmin>
    );
};

EditProductPage.propTypes = {
    
};

export default EditProductPage;