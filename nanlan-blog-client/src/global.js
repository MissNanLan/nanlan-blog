const userInfo = JSON.parse(localStorage.getItem('userInfo'));
const TOKEN = userInfo && userInfo.token;

export default TOKEN;
