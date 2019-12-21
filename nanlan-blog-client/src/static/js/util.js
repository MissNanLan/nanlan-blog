function judgeIsLogin() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const TOKEN = userInfo && userInfo.token;
    return !!TOKEN;
}
const isLogin = judgeIsLogin();
export {
     isLogin as default
};
