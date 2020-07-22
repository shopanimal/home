import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <div className="container" id="home">
            <div className="row">
              <div className="col-7 mt-5 text-center">
                <div>
                  <h1>WE CARE FOR YOUR DOG</h1>
                </div>
                <p className="mb-4">
                  We always try to provide your dog the best services.
                </p>
              </div>
              <div className="col-5">
                <img
                  src="./image/dogger_img_1.png"
                  className="img-fluid float-right"
                  alt=""
                />
              </div>
            </div>
          </div>
    );
};

Header.propTypes = {
    
};

export default Header;