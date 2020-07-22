import React from "react";
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Title from "../Title/Title";


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
  return (
    <Grid item xs={12}>
        <Paper className={classes.paper}>
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid item xs={4}>
                  <div className="mb-2"><img src="https://www.petmart.vn/wp-content/uploads/2019/06/nha-nhua-cho-cho-dang-vuong-size-s-xinding-09154.jpg" class="img-fluid " alt=""/></div>
                  <div className="mb-2"><h4>Title</h4></div>
                  <div className="mb-4">Price</div>
            </Grid>
            <Grid item xs={4}>
                  <div className="mb-2"><img src="https://www.petmart.vn/wp-content/uploads/2019/06/nha-nhua-cho-cho-dang-vuong-size-s-xinding-09154.jpg" class="img-fluid " alt=""/></div>
                  <div className="mb-2"><h4>Title</h4></div>
                  <div className="mb-4">Price</div>
            </Grid>
            <Grid item xs={4}>
                  <div className="mb-2"><img src="https://www.petmart.vn/wp-content/uploads/2019/06/nha-nhua-cho-cho-dang-vuong-size-s-xinding-09154.jpg" class="img-fluid " alt=""/></div>
                  <div className="mb-2"><h4>Title</h4></div>
                  <div className="mb-4">Price</div>
            </Grid>
            <Grid item xs={4}>
                  <div className="mb-2"><img src="https://www.petmart.vn/wp-content/uploads/2019/06/nha-nhua-cho-cho-dang-vuong-size-s-xinding-09154.jpg" class="img-fluid " alt=""/></div>
                  <div className="mb-2"><h4>Title</h4></div>
                  <div className="mb-4">Price</div>
            </Grid>
            <Grid item xs={4}>
                  <div className="mb-2"><img src="https://www.petmart.vn/wp-content/uploads/2019/06/nha-nhua-cho-cho-dang-vuong-size-s-xinding-09154.jpg" class="img-fluid " alt=""/></div>
                  <div className="mb-2"><h4>Title</h4></div>
                  <div className="mb-4">Price</div>
            </Grid>
            <Grid item xs={4}>
                  <div className="mb-2"><img src="https://www.petmart.vn/wp-content/uploads/2019/06/nha-nhua-cho-cho-dang-vuong-size-s-xinding-09154.jpg" class="img-fluid " alt=""/></div>
                  <div className="mb-2"><h4>Title</h4></div>
                  <div className="mb-4">Price</div>
            </Grid>
          </Grid>
        </div>
        </Paper>
    </Grid>
  );
};

Cage.propTypes = {};

export default Cage;
