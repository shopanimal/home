import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Title from "../Title/Title";
import { FirebaseConnect } from "../../FirebaseConnect";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));

const AddProduct = (props) => {
  const classes = useStyles();
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [linkImage, setLinkImage] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");

  const check = () => {
    const connectData = firebase.database().ref("confirm");
    connectData.push({
      id: id,
      name: name,
      price: price,
      type: type,
    });

    const connectProduct = firebase.database().ref("products/" + category);
    connectProduct.push({
      id: id,
      name: name,
      price: price,
      image: linkImage,
    });
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <Grid item xs={12}>
      <Paper className={classes.paper}>
        <form action="#" className="p-5 contact-form">
          <h2 className="h4 mb-5 heading">Thông tin khách hàng</h2>
          <div className="row form-group">
            <div className="col-md-3 mb-3 mb-md-0">
              <label htmlFor="fname">ID</label>
              <input
                type="text"
                id="fname"
                className="form-control"
                onChange={(e) => {
                  setId(e.target.value);
                }}
              />
            </div>
            <div className="col-md-9">
              <label htmlFor="lname">Tên sản phẩm / dịch vụ</label>
              <input
                type="text"
                id="lname"
                className="form-control"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label htmlFor="email">Link Hình</label>
              <input
                type="text"
                id="email"
                className="form-control"
                onChange={(e) => {
                  setLinkImage(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-6">
              <label htmlFor="subject">Giá Tiền</label>
              <input
                type="text"
                id="subject"
                className="form-control"
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="subject">Thể Loại</label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  value="service"
                  defaultChecked
                  onClick={(e) => {
                    setType(e.target.value);
                  }}
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Dịch vụ
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="exampleRadios"
                  id="exampleRadios2"
                  Value="sp"
                  onClick={(e) => {
                    setType(e.target.value);
                  }}
                />
                <label className="form-check-label" htmlFor="exampleRadios2">
                  Sản phẩm
                </label>
              </div>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <label htmlFor="email">Link Image</label>
              <div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox1"
                    value="acc"
                    onClick={(e) => {
                      setCategory(e.target.value);
                    }}
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox1">
                    Phụ kiện
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox2"
                    value="cage"
                    onClick={(e) => {
                      setCategory(e.target.value);
                    }}
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox2">
                    Chuồng
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="inlineCheckbox3"
                    value="food"
                    onClick={(e) => {
                      setCategory(e.target.value);
                    }}
                  />
                  <label className="form-check-label" htmlFor="inlineCheckbox3">
                    Thức ăn
                  </label>
                </div>
              </div>
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
                }}
              />
            </div>
          </div>
        </form>
      </Paper>
    </Grid>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
