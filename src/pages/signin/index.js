import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/userActions";
import { Grid, TextField, Typography } from "@material-ui/core";
import { CustomButton } from "../../components";
import "./styles/signin.css";

export default function Signin() {
  const { errors, loading } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const userData = {
      email: email,
      password: password,
    };
    dispatch(loginUser(userData, history));
  };

  return (
    <Grid container className="form">
      <Grid item xs={12} md={6} lg={4}>
        <Typography variant="h2" className="page_title">
          Login
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
          <TextField
            name="email"
            type="email"
            label="Email"
            className="textField"
            helperText={errors.email}
            error={errors.email ? true : false}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            fullWidth
          />

          <TextField
            name="password"
            type="password"
            label="Password"
            className="textField"
            helperText={errors.password}
            error={errors.password ? true : false}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            fullWidth
          />

          {errors.general && (
            <Typography variant="body2" className="customError">
              {errors.general}
            </Typography>
          )}
          <div className="button">
            <CustomButton type={"submit"} text={"Submit"} disabled={loading} />
          </div>

          <br />
          <small className="accountText">
            dont have an account ? sign up{" "}
            <Link to="/signup" style={{ textDecoration: "none" }}>
              here
            </Link>
          </small>
        </form>
      </Grid>
    </Grid>
  );
}
