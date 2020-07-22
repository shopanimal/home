import React from 'react';
import PropTypes from 'prop-types';

const Blog = props => {
    return (
        <section className="site-section">
          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
            >
              <div className="col-lg-6 text-center heading-section mb-5">
                <div className="paws">
                  <span className="icon-paw" />
                </div>
                <h2 className="text-black mb-2">Welcome to Dogger Pet Care</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div className="row mb-5 mb-lg-0">
              <div className="col-12">
                <div className="row">
                  <div
                    className="mb-4 col-lg-6 mb-lg-0"
                    data-aos="fade-right"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                  >
                    <img
                      src="./image/dogger_img_sm_3.jpg"
                      className="img-fluid"
                      alt="acb"
                    />
                  </div>
                  <div
                    className="col-lg-6 text-lg-right mb-lg-0"
                    data-aos="fade-left"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                  >
                    <h2>Love &amp; Care</h2>
                    <p className="mb-4">
                      Far far away, behind the word mountains, Separated they
                      live in Bookmarksgrove right at the coast of the
                      Semantics, a large language ocean.
                    </p>
                    <a href="#" className="btn btn-info">
                      See More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div
                    className="col-lg-6 text-lg-right mb-lg-0"
                    data-aos="fade-left"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                  >
                    <h2>Love &amp; Care</h2>
                    <p className="mb-4">
                      Far far away, behind the word mountains, Separated they
                      live in Bookmarksgrove right at the coast of the
                      Semantics, a large language ocean.
                    </p>
                    <a href="#" className="btn btn-info">
                      See More
                    </a>
                  </div>
                  <div
                    className="mb-4 col-lg-6 mb-lg-0"
                    data-aos="fade-right"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                  >
                    <img
                      src="./image/dogger_img_sm_2.jpg"
                      className="img-fluid"
                      alt="acb"
                    />
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  <div
                    className="mb-4 col-lg-6 mb-lg-0"
                    data-aos="fade-right"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                  >
                    <img
                      src="./image/dogger_img_sm_1.jpg"
                      className="img-fluid"
                      alt="acb"
                    />
                  </div>
                  <div
                    className="col-lg-6 text-lg-right mb-lg-0"
                    data-aos="fade-left"
                    data-aos-delay={50}
                    data-aos-duration={1500}
                  >
                    <h2>Love &amp; Care</h2>
                    <p className="mb-4">
                      Far far away, behind the word mountains, Separated they
                      live in Bookmarksgrove right at the coast of the
                      Semantics, a large language ocean.
                    </p>
                    <a href="#" className="btn btn-info">
                      See More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    );
};

Blog.propTypes = {
    
};

export default Blog;