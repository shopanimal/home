import React from 'react';
import PropTypes from 'prop-types';
import LayoutAdmin from '../../layout/LayoutAdmin/LayoutAdmin';
import Search from '../../components/Search/Search';

const SearchPage = props => {
    return (
        <LayoutAdmin productOrAdmin={true}>
            <Search />
        </LayoutAdmin>
    );
};

SearchPage.propTypes = {
    
};

export default SearchPage;