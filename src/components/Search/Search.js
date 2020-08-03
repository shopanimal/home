import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import * as firebase from "firebase";
import { FirebaseConnect } from "../../FirebaseConnect";
import { NavLink } from "react-router-dom";

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

const Search = (props) => {
  const classes = useStyles();
  const [search, setSearch] = useState([]);
  const [find, setFind] = useState("");

  useEffect(() => {
    const connectData = firebase.database().ref("confirm");
    connectData.on("value", (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.val().id,
          name: e.val().name,
          image: e.val().image,
          price: e.val().price,
          type: e.val().type,
        });
      });
      setSearch(arr);
    });
  }, []);
  const resultFind = search.filter(e => e.name.toLowerCase().startsWith(find.toLowerCase()));
  return (
    <>
      <div className="container">
        <div className="row bg-info mb-3">
          <div className="col-lg-12 ">
            <nav className="navbar navbar-light ">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e)=>{setFind(e.target.value)}}
                />
                <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>
              </form>
            </nav>
          </div>
        </div>
        <div className="row row-cols-3">
          {resultFind.map((value) => {
            if (value.type == "sp") {
              return (
                <Grid item xs={4}>
                  <div className="mb-2">
                    <img
                      style={{ maxWidth: "250px" }}
                      src={value.image}
                      class="img-fluid "
                      alt=""
                    />
                  </div>
                  <div className="mb-2">
                    <h4>{value.name}</h4>
                  </div>
                  <div className="mb-4">{value.price}</div>
                  <NavLink to={"/confirm/" + value.id}>
                    <button
                      type="button"
                      className="btn btn-primary justify-content-center mb-5"
                    >
                      Mua
                    </button>
                  </NavLink>
                </Grid>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

Search.propTypes = {};

export default Search;
