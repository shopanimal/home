import React from 'react';
import PropTypes from 'prop-types';
import LayoutAdmin from '../../layout/LayoutAdmin/LayoutAdmin';
import FallBack from '../../components/FallBack/FallBack';

const FallBackPage = props => {
    return (
        <LayoutAdmin productOrAdmin={false}>
            <FallBack/>
        </LayoutAdmin>
    );
};

FallBackPage.propTypes = {
    
};

export default FallBackPage;