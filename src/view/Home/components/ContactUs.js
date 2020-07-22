import React from 'react';
import PropTypes from 'prop-types';

const ContactUs = props => {
    return (
        <section className="site-section" id="contactUs">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 bg-secondary"
                data-aos="fade-left"
                data-aos-delay={50}
                data-aos-duration={1500}
              >
                <div className="row justify-content-center align-items-center h-100">
                  <div className="col-lg-6 text-center heading-section mb-5 align-self-center">
                    <h2 className="text-white mb-5">Contact Us</h2>
                    <ul className="list-unstyled text-left address">
                      <li>
                        <span className="d-block">Address:</span>
                        <p>Melbourne St,South Birbane 4101 Austraila</p>
                      </li>
                      <li>
                        <span className="d-block">Phone:</span>
                        <p>+(000) 123 4567 89</p>
                      </li>
                      <li>
                        <span className="d-block">Email:</span>
                        <p>email here</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 bg-info"
                data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration={1500}
              >
                <form action="#" className="p-5 contact-form">
                  <h2 className="h4 mb-5 heading">Contact Form</h2>
                  <div className="row form-group">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label htmlFor="fname">First Name</label>
                      <input type="text" id="fname" className="form-control" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lname">Last Name</label>
                      <input type="text" id="lname" className="form-control" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" className="form-control" />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="subject"
                        id="subject"
                        className="form-control"
                      />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={7}
                        className="form-control"
                        placeholder="Write your notes or questions here..."
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <input
                        type="submit"
                        defaultValue="Send Message"
                        className="btn btn-dark btn-md text-white"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    );
};

ContactUs.propTypes = {
    
};

export default ContactUs;