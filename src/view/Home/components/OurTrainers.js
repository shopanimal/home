import React from 'react';
import PropTypes from 'prop-types';

const OurTrainers = props => {
    return (
        <section id="ourStaff" className="site-section bg-info">
          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
            >
              <div className="col-lg-7 text-center heading-section mb-5">
                <h2 className="mb-2 heading">OUR TRAINERS</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="row">
              <div
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
              >
                <div className="mb-4">
                  <img
                    src="./image/dogger_trainer_1.jpg"
                    className="img-fluid"
                    alt="acb"
                  />
                </div>
                <div className="px-md-3">
                  <h3>Jessica White</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={550}
                data-aos-duration={1500}
              >
                <div className="mb-4">
                  <img
                    src="./image/dogger_trainer_2.jpg"
                    className="img-fluid"
                    alt="acb"
                  />
                </div>
                <div className="px-md-3">
                  <h3>Jessica White</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 mb-4"
                data-aos="fade-up"
                data-aos-delay={1050}
                data-aos-duration={1500}
              >
                <div className="mb-4">
                  <img
                    src="./image/dogger_trainer_3.jpg"
                    className="img-fluid"
                    alt="acb"
                  />
                </div>
                <div className="px-md-3">
                  <h3>Jessica White</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

OurTrainers.propTypes = {
    
};

export default OurTrainers;