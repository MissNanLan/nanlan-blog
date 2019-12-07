import axios from './axios';
import host from './host';

const baseUrl = host;

export const get = function(url,params){
    return new Promise((resolve,reject) =>{
        axios.get(baseUrl+url,params).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err);
        })
    })
}

export const post = function(url,params){
    return new Promise((resolve,reject) =>{
        axios.post(baseUrl+url,params).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err);
        })
    })
}

