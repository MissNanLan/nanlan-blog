import axios from 'axios';


const changeLogin = (params) => ({
  type: 'login/commit_login',
  token: params.token,
  account: params.account
});

export const login = (account, password) => {
  return (dispatch) => {
    axios
      .post('/api/login', {
        username: account,
        password
      })
      .then(
        (res) => {
          const token = res.data;
          if (token) {
            const resPararms = {
              token,
              account
            };
            dispatch(changeLogin(resPararms));
            localStorage.setItem('userInfo', JSON.stringify(resPararms));
            window.location.href = '/';
          }
        },
        () => {
          console.log('login fail...');
        }
      );
  };
};

export {login as defalut };
