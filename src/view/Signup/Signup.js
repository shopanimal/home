import React, { useEffect, useState } from "react";
import * as firebase from "firebase";
import { FirebaseConnect } from "../../FirebaseConnect";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { NavLink } from "react-router-dom";
import Main from "../../layout/Main/Main";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Signup = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [nameM, setNameM] = useState("");
  const [passM, setPassM] = useState("");
  const [accountN, setAccountN] = useState("");
  const [accountP, setAccountP] = useState("");

  useEffect(() => {
    const connectData = firebase.database().ref("account/moderator");
    connectData.on("value", (data) => {
      setAccountN(data.val().name);
      setAccountP(data.val().pass);
    });
  }, []);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const check = () => {
    if (nameM == accountN && passM == accountP) {
      const connectData = firebase.database().ref("account/admin");
      connectData.push({
        name: name,
        pass: pass,
      });
      alert("đăng ký thành công");
      return true;
    } else {
      alert("sai tài khoản hoặc mật khẩu moderator mời nhập lại ");
    }
  };
  return (
    <Main>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Username"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClickOpen}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <NavLink to="/login">
                  <Link variant="body2">Already have an account? Sign in</Link>
                </NavLink>
              </Grid>
            </Grid>
          </form>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Xác nhận đăng kí</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Xác nhận đăng kí bằng tài khoản Moderator liên hệ nhà điều hành
                để biết thêm chi tiết
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Username"
                type="email"
                fullWidth
                onChange={(e) => {
                  setNameM(e.target.value);
                }}
              />
              <TextField
                margin="dense"
                id="pass"
                label="Password"
                type="password"
                fullWidth
                onChange={(e) => {
                  setPassM(e.target.value);
                }}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Hủy
              </Button>
              <Button
                onClick={() => {
                  check();
                  handleClose();
                }}
                color="primary"
              >
                Xác Nhận
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Main>
  );
};

Signup.propTypes = {};

export default Signup;
