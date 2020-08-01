import React from 'react';
import PropTypes from 'prop-types';
import AddProduct from '../../components/AddProduct/AddProduct';
import LayoutAdmin from '../../layout/LayoutAdmin/LayoutAdmin';
import { useParams } from "react-router-dom";
const AddPage = props => {
    let { name } = useParams();
    return (
        <LayoutAdmin productOrAdmin={false}>
            <AddProduct />
        </LayoutAdmin>
    );
};

AddPage.propTypes = {
    
};

export default AddPage;