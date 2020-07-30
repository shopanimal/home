import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import { FirebaseConnect } from '../../../FirebaseConnect';

const PhotoGallery = props => {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    const connectData = firebase.database().ref('photo');
    connectData.on('value', (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.key,
          image: e.val().image,
        });
      });
      setPhoto(arr);
    });
  }, []);
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
                <h2>Hình Ảnh</h2>
              </div>
            </div>
            <div
              className="row row-cols-4 mb-3"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
              data-cues="slideInLeft"
              data-group="images"
            >
              {photo.map((value)=>{
                return(
                  <div className="col-lg-3 mb-2">
                <img
                  src={value.image}
                  className="img-fluid"
                  alt=""
                />
              </div>
                )
              })}
              
            </div>

          </div>
        </section>
    );
};

PhotoGallery.propTypes = {
    
};

export default PhotoGallery;