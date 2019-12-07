import { fromJS } from "immutable";
import * as constants from "./constants";

const defaultState = fromJS({
  token: "",
  account: ""
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case "login/commit_login":
      return state.merge({
        token: action.token,
        account: action.account
      });
    default:
      return state;
  }
};
