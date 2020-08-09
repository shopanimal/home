import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import * as firebase from "firebase";
import { FirebaseConnect } from "../../FirebaseConnect";
import { grey } from "@material-ui/core/colors";
const EditProduct = (props) => {
  const [product, setProduct] = useState([]);
  const [idEdit, setIdEdit] = useState("");
  const [status, setStatus] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  useEffect(() => {
    const connectData = firebase.database().ref("confirm");
    connectData.on("value", (data) => {
      const arr = [];
      data.forEach((e) => {
        if (e.val().type == "sp") {
          arr.push({
            id: e.key,
            image: e.val().image,
            name: e.val().name,
            price: e.val().price,
            type: e.val().type,
            category: e.val().category,
          });
        }
      });
      setProduct(arr);
    });
  }, []);
  const deleteContact = (id) => {
    const deleteProduct = firebase.database().ref("confirm");
    deleteProduct.child(id).remove();
  };
  const handleEdit = (id,name, price, image, type, category) => {
    setStatus(!status);
    setIdEdit(id);
    setName(name);
    setImage(image);
    setType(type);
    setPrice(price);
    setCategory(category);
  };
  console.log(idEdit);
  const saveEdit =() =>{
    const saveProduct = firebase.database().ref("confirm");
    saveProduct.child(idEdit).set({
            image: image,
            name: name,
            price: price,
            type: type,
            category: category,
    });
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="list-group" id="myList" role="tablist">
            {product.map((value) => {
              return (
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href={"#" + value.id}
                  role="tab"
                >
                  {value.name}
                </a>
              );
            })}
          </div>
        </div>
        <div className="col-lg-8">
          {/* Tab panes */}
          <div className="tab-content">
            {product.map((value,key) => {
              return (
                <>
                  <div className="tab-pane" id={value.id} role="tabpanel">
                    <ul class="list-group">
                      <li class="list-group-item">
                        <img
                          src={value.image}
                          class="img-fluid"
                          alt=""
                          style={{ maxHeight: "300px" }}
                        />
                      </li>
                      <li class="list-group-item">
                        <h6>Tên: {value.name}</h6>
                      </li>
                      <li class="list-group-item">
                        <h6>Giá: {value.price}</h6>
                      </li>
                      <li class="list-group-item">
                        <h6>Loại: {value.type}</h6>
                      </li>
                    </ul>
                    <button
                      type="button"
                      class="btn btn-danger mt-3"
                      onClick={() => {
                        deleteContact(value.id, value.category);
                      }}
                    >
                      Xóa
                    </button>
                    <button
                      type="button"
                      class="btn btn-warning mt-3 ml-2"
                      onClick={() => {
                        handleEdit(value.id, value.name, value.price, value.image, value.type, value.category);
                      }}
                    >
                      Sửa
                    </button>
                  </div>
                </>
              );
            })}
          </div>
          {status ? (
            <div
              class="form-group mt-4"
              style={{ padding: "20px", backgroundColor: "grey" }}
            >
              <div className="row mt-2">
                <div className="col-lg-7">
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Tên Sản Phẩm"
                    value={name}
                    onChange={(e)=>{setName(e.target.value)}}
                  />
                </div>
                <div className="col-lg-5">
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Loại"
                    value={type}
                    onChange={(e)=>{setType(e.target.value)}}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-lg-12">
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Link Hình"
                    value={image}
                    onChange={(e)=>{setImage(e.target.value)}}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-lg-5">
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="Giá Sản Phẩm"
                    value={price}
                    onChange={(e)=>{setPrice(e.target.value)}}
                  />
                </div>
              </div>
              <button type="button" class="btn btn-warning mt-1" onClick={()=>{saveEdit()}}>Áp Dụng</button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

EditProduct.propTypes = {};

export default EditProduct;
