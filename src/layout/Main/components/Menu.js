import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
const Menu = props => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-info">
              <NavLink to="/">
              <a className="navbar-brand text-dark" href="#">
                <strong>Shop Animal</strong>
              </a>
              </NavLink>
              <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-toggle="collapse"
                data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
              />
              <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#home">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#services">
                      Services
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="dropdownId"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      About
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownId">
                      <a className="dropdown-item" href="#aboutUs">
                        About Us
                      </a>
                      <a className="dropdown-item" href="#pricingTable">
                        Bảng Giá
                      </a>
                      <a className="dropdown-item" href="#comment">
                        Đánh Giá
                      </a>
                      <a className="dropdown-item" href="#image">
                        Hình Ảnh
                      </a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#ourStaff">
                      Our Staff
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#product">
                      Product
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#contactUs">
                      Contact Us
                    </a>
                  </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                  />
                  <button
                    className="btn btn-outline-success my-2 my-sm-0"
                    type="button"
                  >
                    Search
                  </button>
                </form>
                <div style={{ marginLeft: "10px" }}>
                  <NavLink to="/login">
                  <button type="button" class="btn btn-warning">Login</button>
                  </NavLink>
                </div>
              </div>
            </nav>
          </div>
    );
};

Menu.propTypes = {
    
};

export default Menu;