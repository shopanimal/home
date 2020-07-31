import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import * as firebase from "firebase";
import { FirebaseConnect } from "../../FirebaseConnect";
const Contacts = (props) => {
  const [contact, setContact] = useState([]);
  useEffect(() => {
    const connectData = firebase.database().ref("contacts");
    connectData.on("value", (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.key,
          content: e.val().content,
          date: e.val().date,
          email: e.val().email,
          firthname: e.val().firthname,
          lastname: e.val().lastname,
          title: e.val().title,
        });
      });
      setContact(arr);
    });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-2">
          <div className="list-group" id="myList" role="tablist">
            {contact.map((value) => {
              return (
                <a
                  className="list-group-item list-group-item-action"
                  data-toggle="list"
                  href={"#" + value.id}
                  role="tab"
                >
                  {value.firthname + value.lastname}
                </a>
              );
            })}
          </div>
        </div>
        <div className="col-lg-10">
          {/* Tab panes */}
          <div className="tab-content">
            {contact.map((value) => {
              return (
                <div className="tab-pane" id={value.id} role="tabpanel">
                  <ul class="list-group">
                    <li class="list-group-item">
                      <h6>Họ Tên: {value.firthname + " " + value.lastname}</h6>
                    </li>
                    <li class="list-group-item">
                      <h6>Email: {value.email}</h6>
                    </li>
                    <li class="list-group-item">
                      <h6>Tiêu đề: {value.title}</h6>
                    </li>
                    <li class="list-group-item">
                      <h6>Nội dung: </h6>
                      {value.content}
                    </li>
                    <li class="list-group-item">
                      <h6>Ngày: {value.date}</h6>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

Contacts.propTypes = {};

export default Contacts;
