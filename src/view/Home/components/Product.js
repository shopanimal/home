import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import * as firebase from 'firebase';
import { FirebaseConnect } from '../../../FirebaseConnect';

const Product = props => {
  
  const [products, setProducts] = useState([]);
  
  
  useEffect(() => {
    const connectData = firebase.database().ref('products/effect');
    connectData.on('value', (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.key,
          name: e.val().name,
          image: e.val().image,
          eff: e.val().eff,
          linkto: e.val().linkto,
        });
      });
      setProducts(arr);
    });
  }, []);
  
    return (
        <section id="product" className="site-section">
          <div className="container">
            <div
              className="row justify-content-center"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
            >
              <div className="col-lg-5 text-center heading-section mb-4">
                <h2 className="mb-2 heading">Sản Phẩm</h2>
                <p>Sản phẩm được nhập khẩu tại mỹ và các nước châu âu</p>
              </div>
            </div>
            <div className="row max-width-img">
              {products.map((value,key)=>{
                return(
                  <div
                className="col-lg-4"
                data-aos={value.eff}
                data-aos-delay={50}
                data-aos-duration={1500}
              >
                <div className="text-center">
              <h4 className="mb-2">{value.name}</h4>
                  <div className="mb-3">
                    <img
                      src={value.image}
                      className="img-fluid"
                      alt="image here"
                    />
                  </div>
                  <NavLink to={value.linkto}>
                  <button type="button" className="btn btn-primary">
                    Xem Thêm
                  </button>
                  </NavLink>
                </div>
              </div>
                )
              })}
              
              {/* <div
                className="col-lg-4"
                data-aos="fade-up"
                data-aos-delay={50}
                data-aos-duration={1500}
              >
                <div className="text-center">
                  <h4 className="mb-2">Thức Ăn Pet</h4>
                  <div className="mb-3">
                    <img
                      src="./image/product/thuc-an-cho-cho-poodle-moshm.jpg"
                      className="img-fluid"
                      alt="image here"
                    />
                  </div>
                  <NavLink to="/product/food">
                  <button type="button" className="btn btn-primary">
                    See More
                  </button>
                  </NavLink>
                </div>
              </div>
              <div
                className="col-lg-4"
                data-aos="fade-right"
                data-aos-delay={50}
                data-aos-duration={1500}
              >
                <div className="text-center">
                  <h4 className="mb-2">Phụ Kiện Pet</h4>
                  <div className="mb-3">
                    <img
                      src="./image/product/phukien.jpg"
                      className="img-fluid"
                      alt="image here"
                    />
                  </div>
                  <NavLink to="/product/accessories">
                  <button type="button" className="btn btn-primary">
                    See More
                  </button>
                  </NavLink>
                </div>
              </div> */}
            </div>
          </div>
        </section>
    );
};

Product.propTypes = {
    
};

export default Product;