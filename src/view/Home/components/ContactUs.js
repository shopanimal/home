import React, { useEffect, useState }  from 'react';
import PropTypes from 'prop-types';
import * as firebase from "firebase";
import { FirebaseConnect } from "../../../FirebaseConnect";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const ContactUs = props => {
  const [firthName, setFirthName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [phone, setPhone] = useState("");
  const [open, setOpen] = useState(false);

  const check = ()=>{
    const date = new Date();
    const connectData = firebase.database().ref('contacts');
    connectData.push({
      firthname: firthName,
      lastname:lastName,
      email: email,
      phone: phone,
      title: title,
      content: content,
      date: date.toString()
    });
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
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
                    <h2 className="text-white mb-5">Liên Hệ Chúng Tôi</h2>
                    <ul className="list-unstyled text-left address">
                      <li>
                        <span className="d-block">Địa chỉ:</span>
                        <p>189 Kinh Dương Vương, Phường 12, Quận 6, TP. Hồ Chí Minh</p>
                      </li>
                      <li>
                        <span className="d-block">Điện Thoại:</span>
                        <p>0903256022</p>
                      </li>
                      <li>
                        <span className="d-block">Email:</span>
                        <p>nguyentan15102000@gmail.com</p>
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
                  <h2 className="h4 mb-5 heading">Thông tin khách hàng</h2>
                  <div className="row form-group">
                    <div className="col-md-6 mb-3 mb-md-0">
                      <label htmlFor="fname">Họ</label>
                      <input type="text" id="fname" className="form-control" onChange={(e) => {
                        setFirthName(e.target.value);
                      }}/>
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="lname">Tên</label>
                      <input type="text" id="lname" className="form-control" onChange={(e) => {
                        setLastName(e.target.value);
                      }}/>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" className="form-control" onChange={(e) => {
                        setEmail(e.target.value);
                      }}/>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <label htmlFor="email">Số Điện Thoại</label>
                      <input type="email" id="email" className="form-control" onChange={(e) => {
                        setPhone(e.target.value);
                      }}/>
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className="col-md-12">
                      <label htmlFor="subject">Tiêu Đề</label>
                      <input
                        type="subject"
                        id="subject"
                        className="form-control"
                        onChange={(e) => {
                          setTitle(e.target.value);
                        }}
                      />
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
                        placeholder="viết những câu hỏi thắc mắc của bạn vào đây nhé...."
                        defaultValue=""
                        onChange={(e) => {
                          setContent(e.target.value);
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

ContactUs.propTypes = {
    
};

export default ContactUs;