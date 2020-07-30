import React, {useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import * as firebase from 'firebase';
import { FirebaseConnect } from '../../FirebaseConnect';

function preventDefault(event) {
  event.preventDefault();
}

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

const Cage = (props) => {
  const classes = useStyles();
  const [cage, setCage] = useState([]);

  useEffect(() => {
    const connectData = firebase.database().ref('products/cage');
    connectData.on('value', (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.val().id,
          name: e.val().name,
          image: e.val().image,
          price: e.val().price,
        });
      });
      setCage(arr);
    });
  }, []);

  return (
    <Grid item xs={12}>
        <Paper className={classes.paper}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            {cage.map((value, key)=>{
              return(
                <Grid item xs={4}>
                  <div className="mb-2"><img style={{maxWidth: "250px"}} src={value.image} class="img-fluid " alt=""/></div>
              <div className="mb-2"><h4>{value.name}</h4></div>
              <div className="mb-4">{value.price}</div>
              <NavLink to={"/confirm/" + value.id} >
                  <button
                    type="button"
                    className="btn btn-primary justify-content-center"
                  >
                    Mua
                  </button>
                </NavLink>
            </Grid>
              )
            })}
            

          </Grid>
        </div>
        </Paper>
    </Grid>
  );
};

Cage.propTypes = {};

export default Cage;