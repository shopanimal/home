import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import * as firebase from 'firebase';
import { FirebaseConnect } from '../../../FirebaseConnect';

const PricingTable = props => {
  const [combo, setCombo] = useState([]);
  useEffect(() => {
    const connectData = firebase.database().ref('combo');
    connectData.on('value', (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.val().id,
          name: e.val().name,
          price: e.val().price,
          service: e.val().service,
        });
      });
      setCombo(arr);
    });
  }, []);
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
                <h2 className="text-black">Bảng Combo</h2>
                <p>
                  Combo dịch vụ được sinh ra để tạo sự tiện dụng và chăm sóc thú cưng một cách tốt nhất với giá thành hợp lý
                </p>
              </div>
            </div>
            <div className="row">
              {combo.map((value,key)=>{
                
                return(
                  <div
                className={key%2==0?"col-lg-4 col-12 bg-info p-md-5":"col-lg-4 col-12 bg-dark p-md-5"}
                data-aos="zoom-in-up"
                data-aos-delay={50}
                data-aos-duration={1500}
              >
                <div className="height-table-body text-white">
                <h3 className="text-center">{value.name}</h3>
                  <div className="text-center mb-3">
                <span>{value.price}</span>
                    <span>/month</span>
                  </div>
                  <ul className="list">
                    {value.service.map((index, key)=>{
                      return(
                      <li>{index}</li>
                      )
                    })}
                  </ul>
                </div>
                <div className="height-table-footer">
                <NavLink to={"/confirm/" + value.id} >
                  <button
                    type="button"
                    className="btn btn-primary justify-content-center"
                  >
                    Mua
                  </button>
                </NavLink>
                </div>
              </div>
                )
              })}
              
              
              
            </div>
          </div>
        </section>
    );
};

PricingTable.propTypes = {
    
};

export default PricingTable;