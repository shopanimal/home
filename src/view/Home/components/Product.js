import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";

const Product = props => {
    return (
        <section id="product" className="site-section">
          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
            >
              <div className="col-lg-5 text-center heading-section mb-4">
                <h2 className="mb-2 heading">PRODUCTS</h2>
                <p>mô tả vài dòng về sản phẩm</p>
              </div>
            </div>
            <div className="row max-width-img">
              <div
                className="col-lg-4"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={1500}
              >
                <div className="text-center">
                  <h4 className="mb-2">Chuồng Pet</h4>
                  <div className="mb-3">
                    <img
                      src="./image/product/chuong.jpg"
                      className="img-fluid"
                      alt="image here"
                    />
                  </div>
                  <NavLink to="/product/cage">
                  <button type="button" className="btn btn-primary">
                    See More
                  </button>
                  </NavLink>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
              >
                <div className="text-center">
                  <h4 className="mb-2">Thức Ăn Pet</h4>
                  <div className="mb-3">
                    <img
                      src="./image/product/thuc-an-cho-cho-poodle-moshm.jpg"
                      className="img-fluid"
                      alt="image here"
                    />
                  </div>
                  <NavLink to="/product/food">
                  <button type="button" className="btn btn-primary">
                    See More
                  </button>
                  </NavLink>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration={1500}
              >
                <div className="text-center">
                  <h4 className="mb-2">Phụ Kiện Pet</h4>
                  <div className="mb-3">
                    <img
                      src="./image/product/phukien.jpg"
                      className="img-fluid"
                      alt="image here"
                    />
                  </div>
                  <NavLink to="/product/accessories">
                  <button type="button" className="btn btn-primary">
                    See More
                  </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

Product.propTypes = {
    
};

export default Product;