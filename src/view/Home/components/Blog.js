import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import { FirebaseConnect } from '../../../FirebaseConnect';

const Blog = props => {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    const connectData = firebase.database().ref('blog');
    connectData.on('value', (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.key,
          title: e.val().title,
          image: e.val().image,
          content: e.val().content,
        });
      });
      setBlog(arr);
    });
  }, []);
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
                <h2 className="text-black mb-2">Blog Dog</h2>
                <p>
                  Bạn đã sở hữu được một trong số những bạn này chưa ?
                </p>
              </div>
            </div>
            <div className="row mb-5 mb-lg-0">
              {blog.map((value, key)=>{
                if(key%2==0){
                  return(
                    <div className="col-12">
                  <div className="row">
                    <div
                      className="mb-4 col-lg-6 mb-lg-0"
                      data-aos="fade-right"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                    >
                      <img
                        src={value.image}
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
                      <h2>{value.title}</h2>
                      <p className="mb-4">
                        {value.content}
                      </p>
                      <a href="#" className="btn btn-info">
                        Xem Thêm
                      </a>
                    </div>
                  </div>
                </div>
                  )
                }else{
                  return(
                    <div className="col-12">
                  <div className="row">
                    <div
                      className="col-lg-6 text-lg-right mb-lg-0"
                      data-aos="fade-left"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                    >
                      <h2>{value.title}</h2>
                      <p className="mb-4">
                        {value.content}
                      </p>
                      <a href="#" className="btn btn-info">
                        Xem Thêm
                      </a>
                    </div>
                    <div
                      className="mb-4 col-lg-6 mb-lg-0"
                      data-aos="fade-right"
                      data-aos-delay={50}
                      data-aos-duration={1500}
                    >
                      <img
                        src={value.image}
                        className="img-fluid"
                        alt="acb"
                      />
                    </div>
                  </div>
                </div>
                  )
                }
                
              })}
            </div>
          </div>
        </section>
    );
};

Blog.propTypes = {
    
};

export default Blog;