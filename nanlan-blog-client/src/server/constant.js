let BASEURL = '';
if (process.env.NODE_ENV === 'development') {
  BASEURL = 'http://localhost:3000';
} else if (process.env.NODE_ENV === 'test') {
  BASEURL = 'http://192.168.1.102:8000';
} else {
  BASEURL = 'http://192.168.1.103:8000';
}

export default { BASEURL };
