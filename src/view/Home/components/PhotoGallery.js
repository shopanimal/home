import React from 'react';
import PropTypes from 'prop-types';

const PhotoGallery = props => {
    return (
        <section id="image" className="site-section">
          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
            >
              <div className="col-lg-6 mb-4 text-center heading-section">
                <h2>PHOTO GALLERY</h2>
              </div>
            </div>
            <div
              className="row mb-3"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-cues="slideInLeft"
              data-group="images"
            >
              <div className="col-lg-3">
                <img
                  src="./image/ListImageAnimal/dogger_img_sm_1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  src="./image/ListImageAnimal/dogger_img_sm_2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  src="./image/ListImageAnimal/dogger_img_sm_4.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  src="./image/ListImageAnimal/dogger_img_sm_6.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            <div
              className="row mb-3"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
            >
              <div className="col-lg-3">
                <img
                  src="./image/ListImageAnimal/dogger_img_sm_1.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  src="./image/ListImageAnimal/dogger_img_sm_2.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  src="./image/ListImageAnimal/dogger_img_sm_4.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-3">
                <img
                  src="./image/ListImageAnimal/dogger_img_sm_6.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
    );
};

PhotoGallery.propTypes = {
    
};

export default PhotoGallery;