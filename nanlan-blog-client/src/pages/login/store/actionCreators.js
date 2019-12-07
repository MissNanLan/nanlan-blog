import * as constants from "./constants";
import axios from "axios";
import { withRouter } from "react-router";
import { fromJS } from "immutable";
import { Route, Redirect } from "react-router-dom";

const changeLogin = params => ({
  type: "login/commit_login",
  token: params.token,
  account: params.account
});

export const login = (account, password) => {
  return dispatch => {
    axios
      .post("/api/login", {
        username: account,
        password: password
      })
      .then(
        res => {
          const token = res.data;
          if (token) {
            let resPararms = {
              token,
              account
            };
            dispatch(changeLogin(resPararms));
            localStorage.setItem("userInfo",JSON.stringify(resPararms));
            window.location.href="/";
          }
        },
        err => {
          console.log("login fail...");
        }
      );
  };
};

