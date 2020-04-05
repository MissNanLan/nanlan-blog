const regisiterDao = require("../models/user");


async function regisiterService(params) { 
    const user = await findUser(params.userName);
    if (user) {
        return "存在同名的用户哦"

        
    } else { 
        // 新增用户
         new regisiterDao({
            name: params.userName,
             pwd: params.password
        }).save();
        return "新增成功"
    }

}

async function findUser(name) { 
    return await regisiterDao.findOne({name})
}


module.exports = {
    regisiterService
}