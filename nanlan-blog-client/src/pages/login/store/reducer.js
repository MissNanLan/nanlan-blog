import { fromJS } from 'immutable';

const defaultState = fromJS({
  token: '',
  account: ''
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'login/commit_login':
      return state.merge({
        token: action.token,
        account: action.account
      });
    default:
      return state;
  }
};
