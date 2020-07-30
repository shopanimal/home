import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import { FirebaseConnect } from '../../../FirebaseConnect';

const HappyCustomers = props => {
  const [fallback, setFallback] = useState([]);
  useEffect(() => {
    const connectData = firebase.database().ref('fallback');
    connectData.on('value', (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.key,
          name: e.val().name,
          image: e.val().image,
          text: e.val().text,
        });
      });
      setFallback(arr);
    });
  }, []);
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
                <h2>Cảm Nhận Khách Hàng</h2>
              </div>
            </div>
            <div
              className="row justify-content-center"
              data-aos="zoom-out-up"
              data-aos-delay={50}
              data-aos-duration={1500}
            >
              {fallback.map((value)=>{
                return(
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
                    src={value.image}
                    alt=""
                  />
                  <div className="card-body">
                <h4 className="card-title">{value.name}</h4>
                <p className="card-text">{value.text}</p>
                  </div>
                </div>
              </div>
                )
              })}
            </div>
          </div>
        </section>
    );
};

HappyCustomers.propTypes = {
    
};

export default HappyCustomers;