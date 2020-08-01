import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { NavLink, useParams } from "react-router-dom";
import * as firebase from "firebase";
import { FirebaseConnect } from "../../FirebaseConnect";

const BuyProducts = (props) => {
  let { id } = useParams();
  const [buy, setBuy] = useState([]);
  //info
  const [firthName, setFirthName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [quan, setQuan] = useState("");
  const [tp, setTp] = useState("");
  const [phuong, setPhuong] = useState("");

  useEffect(() => {
    const connectData = firebase.database().ref("confirm");
    connectData.on("value", (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.val().id,
          name: e.val().name,
          price: e.val().price,
          type: e.val().type,
        });
      });
      setBuy(arr);
    });
  }, []);

  const index = Number(id) - 1;
  const check = ()=>{
    const date = new Date();
    const connectData = firebase.database().ref('order');
    connectData.push({
      firthname: firthName,
      lastname:lastName,
      email: email,
      phone: phone,
      address: address,
      quan: quan,
      tp: tp,
      phuong: phuong,
      product: buy[index],
      date: date.toString()
    });
    
  }
  return (
    <div className="container">
      <div className="text-center">
        <h3 className="display-4">Xác nhận thông tin</h3>
      </div>
      <div class="jumbotron jumbotron-fluid mt-2">
        <div class="container">
          <div className="row">
            {buy.map((value, key) => {
              if (id == value.id) {
                return (
                  <div className="col-lg-5">
                    <h2>Xác nhận dịch vụ</h2>
                    <h5>
                      Tên dịch vụ/ sản phẩm: <p className="h3">{value.name}</p>{" "}
                    </h5>
                    <p className="h5">
                      thể loại: <h3>{value.type=="sp"?("sản phẩm"):("dịch vụ")}</h3>
                    </p>
                    <p className="h5">
                      Giá: <h3>{value.price}</h3>
                    </p>
                    {value.type== "sp"?(
                    <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios1"
                        value="online"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        Mua online
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="exampleRadios"
                        id="exampleRadios2"
                        defaultValue="offline"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios2"
                      >
                        Mua offline
                      </label>
                    </div>
                    </div>
                    ): null}
                  </div>
                );
              }
            })}
            
            <div className="col-lg-7">
              <form>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Họ</label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail4"
                      onChange={(e) => {
                        setFirthName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Tên</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputPassword4"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="abc@gmail.com"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress">Số điện thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="0902356022"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="inputAddress2">Địa chỉ</label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="83 Nguyễn Tất Thành"
                    onChange={(e) => {
                      setAddress(e.target.value);
                    }}
                  />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputCity">Thành Phố</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      onChange={(e) => {
                        setQuan(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputState">Quận</label>
                    <select id="inputState" className="form-control" onClick={(e) => {
                        setTp(e.target.value);
                      }}>
                      <option selected>Choose...</option>
                      <option>...</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <label htmlFor="inputZip">Phường</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputZip"
                        onChange={(e) => {
                          setPhuong(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" htmlFor="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <hr class="my-2" />
          <p>vui lòng xác nhận sử dụng dịch vụ tại cửa hàng</p>
          <div className="row">
            <div className="col-lg-5">
            <NavLink to="/home">
              <button type="button" class="btn btn-primary mr-3" onClick={() => {
                check();
              }}>
                
                Xác nhận
              </button>
            </NavLink>
                <button type="button" class="btn btn-danger">
                  Hủy bỏ
                </button>
            </div>
            <div className="col-lg-7">
              <h6>
                mọi chi tiết vui lòng liên hệ: 0902356022 (nhân viên tư vấn)
              </h6>
              <h6>thời gian làm việc: 8h - 16h </h6>
              <h6>
                địa chỉ cửa hàng: 83 Nguyễn Tất Thành, Phường 6, Quận 4, TP.HCM
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BuyProducts.propTypes = {};

export default BuyProducts;
