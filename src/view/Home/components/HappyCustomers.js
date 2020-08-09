import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import * as firebase from 'firebase';
import { FirebaseConnect } from '../../../FirebaseConnect';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const HappyCustomers = props => {
  const [fallback, setFallback] = useState([]);
  const [linkImage, setLinkImage] = useState([]);
  const [name, setName] = useState([]);
  const [back, setBack] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const connectData = firebase.database().ref('fallback');
    connectData.on('value', (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.val().id,
          name: e.val().name,
          image: e.val().image,
          text: e.val().text,
        });
      });
      setFallback(arr);
    });
  }, []);

  const check = ()=>{
    const connectData = firebase.database().ref('fallback');
    connectData.push({
      id: null,
      name: name,
      image: linkImage,
      text: back,
    });
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
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
                if( parseInt(value.id) <= 3){
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
                }
              })}
            </div>
            <div
              className="row justify-content-center bg-info"
              data-aos="fade-up"
              data-aos-delay={50}
              data-aos-duration={1500}
            >
              <div className="col-lg-6">
              <form action="#" className="p-5 contact-form">
                  <h2 className="h4 mb-5 heading">Đánh giá từ khách hàng</h2>
                  <div className="row form-group">
                    <div className="col-md-8 mb-3 mb-md-0">
                      <label htmlFor="fname">Họ Tên</label>
                      <input type="text" id="fname" className="form-control" onChange={(e) => {
                        setName(e.target.value);
                      }}/>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12 mb-3 mb-md-0">
                      <label htmlFor="fname">Link Hình</label>
                      <input type="text" id="fname" className="form-control" onChange={(e) => {
                        setLinkImage(e.target.value);
                      }}/>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <label htmlFor="message">Nội Dung</label>
                      <textarea
                        name="message"
                        id="message"
                        cols={30}
                        rows={7}
                        className="form-control"
                        placeholder="viết cảm nhận vào đây nhé..."
                        defaultValue=""
                        onChange={(e) => {
                          setBack(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row form-group">
            <div className="col-md-12">
              <input
                type="button"
                defaultValue="Send Message"
                className="btn btn-dark btn-md text-white"
                onClick={() => {
                  check();
                  setOpen(true);
                }}
              />
              <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          This is a success !
        </Alert>
      </Snackbar>
            </div>
          </div>
                </form>
                </div>
            </div>
          </div>
        </section>
    );
};

HappyCustomers.propTypes = {
    
};

export default HappyCustomers;