import React from 'react';
import PropTypes from 'prop-types';

const AboutUs = props => {
    return (
        <section className="site-section" id="aboutUs">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 text-left heading-section mb-5"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={1500}
              >
                <h2 className="text-black mb-3">About Us</h2>
                <p className="mb-3">
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <p className="muted mb-3">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
                <ul className="list-unstyled">
                  <li>A small river named Duden flows</li>
                  <li>It is a paradisematic country</li>
                  <li>Roasted parts of sentences fly</li>
                </ul>
              </div>
              <div
                className="col-lg-6 mb-5"
                data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration={1500}
              >
                <img
                  src="./image/dogger_img_big_1.jpg"
                  className="img-fluid"
                  alt="acb"
                />
              </div>
            </div>
          </div>
        </section>
    );
};

AboutUs.propTypes = {
    
};

export default AboutUs;