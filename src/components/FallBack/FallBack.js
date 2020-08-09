import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase";
import { FirebaseConnect } from "../../FirebaseConnect";
const FallBack = (props) => {
  const [fallback, setFallback] = useState([]);
  useEffect(() => {
    const connectData = firebase.database().ref("fallback");
    connectData.on("value", (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.key,
          image: e.val().image,
          name: e.val().name,
          text: e.val().text,
        });
      });
      setFallback(arr);
    });
  }, []);
  const deleteContact = (id)=>{
    const connectData = firebase.database().ref("fallback");
    connectData.child(id).remove();
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="list-group" id="myList" role="tablist">
            {fallback.map((value) => {
              return (
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href={"#" + value.id}
                  role="tab"
                >
                  { value.name }
                </a>
              );
            })}
          </div>
        </div>
        <div className="col-lg-8">
          {/* Tab panes */}
          <div className="tab-content">
            {fallback.map((value) => {
              return (
                <div className="tab-pane" id={value.id} role="tabpanel">
                  <ul class="list-group">
                    <li class="list-group-item">
                       <img src={value.image} class="img-fluid" alt="" style={{maxHeight:"300px"}} />
                    </li>
                    <li class="list-group-item">
                      <h6>Tên: {value.name}</h6>
                      
                    </li>
                    <li class="list-group-item">
                      <h6>Nội dung:</h6>
                      {value.text}
                    </li>
                  </ul>
                  <button type="button" class="btn btn-danger mt-3" onClick={()=>{deleteContact(value.id)}}>Xóa</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

FallBack.propTypes = {};

export default FallBack;
