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
                <h2 className="text-black mb-3">Về Chúng Tôi</h2>
                <p className="mb-3">
                  Cửa hàng chúng tôi đã có kinh nghiệm làm việc hơn 4 năm và cho ra những dịch vụ chất lượng bật nhất nhưng vẫn giữ giá thành hợp lý
                </p>
                <p className="muted mb-3">
                  Đội ngũ nhân viên chuyên nghiệp được đào tạo qua nhiều cấp bật
                </p>
                <ul className="list-unstyled">
                  <li>Cửa hàng Volibear được cấp phép hoạt động ngày 15/10/2016</li>
                  <li>Được cấp chứng chỉ về dịch vụ thú cưng đạt chuẩn chất lượng cao</li>
                  <li>Với hơn 3 triệu khách hàng</li>
                </ul>
              </div>
              <div
                className="col-lg-6 mb-5"
                data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration={1500}
              >
                <img
                  src="https://colorlib.com/preview/theme/dogger/images/dogger_img_big_1.jpg"
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