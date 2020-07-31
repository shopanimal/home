import React, {useEffect, useState} from "react";
import * as firebase from 'firebase';
import { FirebaseConnect } from '../../FirebaseConnect';
import PropTypes from "prop-types";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Title from '../Title/Title';
import clsx from 'clsx';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme)=>({
  depositContext: {
    flex: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

const Deposits = (props) => {
  const classes = useStyles();
  const [total, setTotal] = useState([]);
  useEffect(() => {
    const connectData = firebase.database().ref('order');
    connectData.on('value', (data) => {
      console.log(data.val());
      const arr = [];
      data.forEach((e) => {
        arr.push({
          id: e.key,
      product: e.val().product,
      date: e.val().date,
        });
      });
      setTotal(arr);
    });
  }, []);
  const t =0;
  const totalmoney = (type)=>{
    const arraysp = []
    const arraydv = []
    total.forEach((value)=>{
      if(value.product.type == "sp"){
        arraysp.push(parseInt(value.product.price))
      }
      else{
        arraydv.push(parseInt(value.product.price))
      }
    })
    console.log(arraysp);
    console.log(arraydv);
    const sp = arraysp.reduce(
      ( accumulator, currentValue ) => accumulator + currentValue,
      0
    );
    const dv = arraydv.reduce(
      ( accumulator, currentValue ) => accumulator + currentValue,
      0
    );
    console.log(sp);
    console.log(dv);
    if(type == "sp"){
      return(sp +",000");
    }
    if(type == "service"){
      return(dv +",000");
    }

    
  }
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <React.Fragment>
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Title>Total Products</Title>
          <Typography component="p" variant="h4">
            {totalmoney("sp")}
          </Typography>
          <Typography color="textSecondary" className={classes.depositContext}>
            To Now
          </Typography>
        </Paper>
      </Grid>
      {/* dịch vụ */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={fixedHeightPaper}>
          <Title>Total Service</Title>
          <Typography component="p" variant="h4">
            {totalmoney("service")}
          </Typography>
          <Typography color="textSecondary" className={classes.depositContext}>
            To Now
          </Typography>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

Deposits.propTypes = {};

export default Deposits;
