import React from 'react';
import PropTypes from 'prop-types';
import LayoutAdmin from '../../layout/LayoutAdmin/LayoutAdmin';
import Contacts from '../../components/Contacts/Contacts';
const ContactPage = props => {
    return (
        <LayoutAdmin productOrAdmin={false}>
            <Contacts/>
        </LayoutAdmin>
    );
};

ContactPage.propTypes = {
    
};

export default ContactPage;