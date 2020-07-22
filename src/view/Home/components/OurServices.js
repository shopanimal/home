import React from 'react';
import PropTypes from 'prop-types';

const OurServices = props => {
    return (
        <section id="services" className="site-section">
          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
            >
              <div className="col-lg-7 mb-5 text-center heading-section">
                <h2>OUR SERVICES</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div
              className="row mb-4 max-width-img"
              data-aos="zoom-out-down"
              data-aos-delay={50}
              data-aos-duration={1000}
            >
              <div className="col-lg-4 mb-3">
                <img
                  src="./image/service/dogger_checkup.svg"
                  className="img-fluid mb-2"
                  alt=""
                />
                <h4 className="mb-2">Dog Checkup</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="col-lg-4 mb-3">
                <img
                  src="./image/service/dogger_dermatology.svg"
                  className="img-fluid mb-2"
                  alt=""
                />
                <h4 className="mb-2">Dog Dermatology</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="col-lg-4 mb-3">
                <img
                  src="./image/service/dogger_bones.svg"
                  className="img-fluid mb-2"
                  alt=""
                />
                <h4 className="mb-2">For Strong Teeth</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div
              className="row mb-4 max-width-img"
              data-aos="zoom-out-down"
              data-aos-delay={50}
              data-aos-duration={1000}
            >
              <div className="col-lg-4 mb-3">
                <img
                  src="./image/service/dogger_veterinarian.svg"
                  className="img-fluid mb-2"
                  alt=""
                />
                <h4 className="mb-2">Dog First Aid</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="col-lg-4 mb-3">
                <img
                  src="./image/service/dogger_dryer.svg"
                  className="img-fluid mb-2"
                  alt=""
                />
                <h4 className="mb-2">Dog Dryer</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
              <div className="col-lg-4 mb-3">
                <img
                  src="./image/service/dogger_veterinary.svg"
                  className="img-fluid mb-2"
                  alt=""
                />
                <h4 className="mb-2">Expert Veterinarian</h4>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </section>
    );
};

OurServices.propTypes = {
    
};

export default OurServices;