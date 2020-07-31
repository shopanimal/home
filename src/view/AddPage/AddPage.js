import React from 'react';
import PropTypes from 'prop-types';
import AddProduct from '../../components/AddProduct/AddProduct';
import LayoutAdmin from '../../layout/LayoutAdmin/LayoutAdmin';
const AddPage = props => {
    return (
        <LayoutAdmin productOrAdmin={false}>
            <AddProduct />
        </LayoutAdmin>
    );
};

AddPage.propTypes = {
    
};

export default AddPage;