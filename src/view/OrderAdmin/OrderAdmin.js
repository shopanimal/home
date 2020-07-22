import React from 'react';
import PropTypes from 'prop-types';
import LayoutAdmin from '../../layout/LayoutAdmin/LayoutAdmin';
import Order from '../../components/Order/Order';

const OrderAdmin = props => {
    return (
        <LayoutAdmin productOrAdmin={false}>
            <Order />
        </LayoutAdmin>
    );
};

OrderAdmin.propTypes = {
    
};

export default OrderAdmin;