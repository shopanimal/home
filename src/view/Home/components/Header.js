import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <div className="container" id="home">
            <div className="row">
              <div className="col-7 mt-5 text-center">
                <div>
                  <h1>Chào Mừng Đã Đến Cửa Hàng VoliBear </h1>
                </div>
                <p className="mb-4">
                  thú cưng khỏe mạnh, xinh xắn là trách nhiệm hàng đầu của chúng tôi
                </p>
              </div>
              <div className="col-5">
                <img
                  src="https://colorlib.com/preview/theme/dogger/images/dogger_img_1.png"
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