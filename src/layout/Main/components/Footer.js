import React from 'react';
import PropTypes from 'prop-types';

const Footer = props => {
    return (
        <section className="site-section bg-dark">
          <div className="container">
            <div className="row text-white">
              <div className="col-lg-5">
                Built by:
                <h6>Trần Tú Hảo</h6>
                <h6>Hồ Phước Thường</h6>
                <h6>Nguyễn Thành Trưởng</h6>
                <h6>Huỳnh Lê Trọng Nhân</h6>
                <h6 style={{ marginBottom: "2rem" }}>Nguyễn Nhựt Tân</h6>
                Contact:
                <h6>Call: 0373988618 - 0903256022 (hotline)</h6>
                <h6>Email: nguyentan15102000@gmail.com</h6>
                <h6>
                  address: 189 Kinh Dương Vương, Phường 12, Quận 6, TP. Hồ Chí
                  Minh
                </h6>
              </div>
              <div className="col-lg-4">
                Sponsored by:
                <h6>AOS animation</h6>
                <h6>Firebase google</h6>
                <h6>Colorlib</h6>
                <h6>Github</h6>
                <h6>Boostrap 4</h6>
                <h6>Material</h6>
              </div>
              <div className="col-lg-3">
                Moderator:
                <h6>Nguyễn Nhựt Tân</h6>
              </div>
            </div>
          </div>
        </section>
    );
};

Footer.propTypes = {
    
};

export default Footer;