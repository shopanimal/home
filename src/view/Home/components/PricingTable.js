import React from 'react';
import PropTypes from 'prop-types';

const PricingTable = props => {
    return (
        <section id="pricingTable" className="site-section">
          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
            >
              <div className="col-lg-6 text-center heading mb-3">
                <h2 className="text-black">PRICING TABLE</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-4 col-12 bg-info p-md-5"
                data-aos="zoom-in-up"
                data-aos-delay={50}
                data-aos-duration={1500}
              >
                <div className="height-table-body">
                  <h3 className="text-center">Basic</h3>
                  <div className="text-center mb-3">
                    <span>47$</span>
                    <span>/month</span>
                  </div>
                  <ul className="list">
                    <li>Officia quaerat eaque neque</li>
                    <li>Possimus aut consequuntur incidunt</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipisicing elit</li>
                    <li>Dolorum esse odio quas architecto sint</li>
                  </ul>
                </div>
                <div className="height-table-footer">
                  <button
                    type="button"
                    className="btn btn-primary justify-content-center"
                  >
                    Buy It
                  </button>
                </div>
              </div>
              <div
                className="col-lg-4 col-12 bg-dark p-md-5 text-white"
                data-aos="zoom-in-up"
                data-aos-delay={250}
                data-aos-duration={1500}
              >
                <div className="height-table-body">
                  <h3 className="text-center">Basic</h3>
                  <div className="text-center mb-3">
                    <span>47$</span>
                    <span>/month</span>
                  </div>
                  <ul className="list">
                    <li>Officia quaerat eaque neque</li>
                    <li>Possimus aut consequuntur incidunt</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipisicing elit</li>
                    <li>Dolorum esse odio quas architecto sint</li>
                  </ul>
                </div>
                <div className="height-table-footer">
                  <button
                    type="button"
                    className="btn btn-primary justify-content-center"
                  >
                    Buy It
                  </button>
                </div>
              </div>
              <div
                className="col-lg-4 col-12 bg-info p-md-5"
                data-aos="zoom-in-up"
                data-aos-delay={450}
                data-aos-duration={1500}
              >
                <div className="height-table-body">
                  <h3 className="text-center">Basic</h3>
                  <div className="text-center mb-3">
                    <span>47$</span>
                    <span>/month</span>
                  </div>
                  <ul className="list">
                    <li>Officia quaerat eaque neque</li>
                    <li>Possimus aut consequuntur incidunt</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Consectetur adipisicing elit</li>
                    <li>Dolorum esse odio quas architecto sint</li>
                  </ul>
                </div>
                <div className="height-table-footer">
                  <button
                    type="button"
                    className="btn btn-primary justify-content-center"
                  >
                    Buy It
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

PricingTable.propTypes = {
    
};

export default PricingTable;