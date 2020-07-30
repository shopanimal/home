import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import { FirebaseConnect } from '../../../FirebaseConnect';
import { NavLink } from "react-router-dom";


const OurServices = props => {
  const [service, setService] = useState([]);
  useEffect(() => {
    const connectData = firebase.database().ref('service');
    connectData.on('value', (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.val().id,
          title: e.val().title,
          image: e.val().image,
          text: e.val().text,
          price: e.val().price,
        });
      });
      setService(arr);
    });
  }, []);

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
                <h2>Dịch Vụ</h2>
                <p>
                  Đây là những dịch vụ được cửa hàng chọn lọc và đầu tư một cách hợp lý với giá thành nhưng vẫn đảm bảo chất lượng 
                </p>
              </div>
            </div>
            <div
              className="row row-cols-3 mb-4 max-width-img-sv"
              data-aos="zoom-out-down"
              data-aos-delay={50}
              data-aos-duration={1000}
            >
              {service.map((value,key)=>{
                return(
                  <div className="col-lg-4 mb-5" key = {key}>
                <img
                  src={value.image}
                  className="img-fluid mb-1"
                  alt=""
                />
                <h4 >{value.title}</h4>
                <p>
                  {value.text}
                </p>
                <h3>{value.price}</h3>
                <NavLink to={"/confirm/" + value.id}>
                  <button
                    type="button"
                    className="btn btn-primary justify-content-center"
                  >
                    Mua
                  </button>
                </NavLink>
              </div>
                )
              })}
              
              

            </div>
          </div>
        </section>
    );
};

OurServices.propTypes = {
    
};

export default OurServices;