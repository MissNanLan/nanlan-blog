
function success(data,msg="成功"){
    return {
        status:200,
        msg:msg,
        data:data
    }
}

function error(msg,status=400){
    return {
        status:status,
        msg:msg,
        data:{}
    }
}

module.exports = {
    success,
    error
}