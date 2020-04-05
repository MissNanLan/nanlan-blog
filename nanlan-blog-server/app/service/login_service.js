const loginDao = require("../models/user");
const fs = require("fs");
const path = require("path");
const cert = fs.readFileSync(path.join(__dirname, "../rsa-prv.pem"));
const pubCert = fs.readFileSync(path.join(__dirname, "../rsa-pub.pem"));
const jwt = require("jsonwebtoken");

async function loginService(params) {
  let token;
  return new Promise((resolve, reject) => {
    loginDao.find({ name: params.username }).exec(function(err, res) {
      var dbUser = res[0];
      if (err) {
        reject(err);
      } else {
        if (res.length <= 0) {
          resolve({ data: "", msg: "该用户不存在" });
        } else {
          if (dbUser.pwd != params.password) {
            resolve({ data: "", msg: "用户名或密码错误" });
          }
          token = tokenGen(dbUser._id, dbUser.name);
          resolve({ data: token, msg: "登录成功" });
        }
      }
    });
  });
}

function tokenGen(userId, userName) {
  let date = Math.floor(Date.now() / 1000);
  let data = {
    userId: userId,
    userName: userName
  };
  let token = jwt.sign({ data: data, exp: date + 3600 * 24 }, cert, {
    algorithm: "RS256"
  });
  return token;
}

async function verifyToken(token) {
  let res;
  try {
    res = await jwt.verify(token, pubCert);
    let { exp = 0 } = res,
      current = Math.floor(Date.now() / 1000);
    if (current <= exp) {
      res = res.data || "";
    }
  } catch (e) {
    res = "";
  }
  return res;
}

module.exports = {
  loginService,
  verifyToken
};
