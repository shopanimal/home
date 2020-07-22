import React from 'react';
import PropTypes from 'prop-types';
import LayoutAdmin from '../../layout/LayoutAdmin/LayoutAdmin';
import Deposits from '../../components/Deposits/Deposits';

const DepositsAdmin = props => {
    return (
        <LayoutAdmin productOrAdmin={false}>
            <Deposits />
        </LayoutAdmin>
    );
};

DepositsAdmin.propTypes = {
    
};

export default DepositsAdmin;