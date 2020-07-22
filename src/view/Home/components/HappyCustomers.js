import React from 'react';
import PropTypes from 'prop-types';

const HappyCustomers = props => {
    return (
        <section id="comment" className="site-section">
          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
            >
              <div className="col-lg-7 text-center mb-5 heading-section">
                <h2>HAPPY CUSTOMERS</h2>
              </div>
            </div>
            <div
              className="row justify-content-center"
              data-aos="zoom-out-up"
              data-aos-delay={50}
              data-aos-duration={1500}
            >
              <div className="col-lg-4 mb-3">
                <div
                  className="card"
                  style={{
                    backgroundColor: "cadetblue",
                    borderColor: "darkblue",
                  }}
                >
                  <img
                    className="card-img-top"
                    src="./image/avatar/person_1.webp"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div
                  className="card"
                  style={{
                    backgroundColor: "cadetblue",
                    borderColor: "darkblue",
                  }}
                >
                  <img
                    className="card-img-top"
                    src="./image/avatar/person_2.webp"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-3">
                <div
                  className="card"
                  style={{
                    backgroundColor: "cadetblue",
                    borderColor: "darkblue",
                  }}
                >
                  <img
                    className="card-img-top"
                    src="./image/avatar/person_4.webp"
                    alt=""
                  />
                  <div className="card-body">
                    <h4 className="card-title">Title</h4>
                    <p className="card-text">Text</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

HappyCustomers.propTypes = {
    
};

export default HappyCustomers;