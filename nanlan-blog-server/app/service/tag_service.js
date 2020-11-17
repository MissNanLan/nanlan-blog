const { resolve } = require("path");
const tagDao = require("../models/tag");

async function tagService() {
    return new Promise((resolve, reject) => { 
        tagDao.find({}).exec(function (err, res) { 
            console.log("res",res);
            if (err) { 
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}
module.exports = {
    tagService
  };
  