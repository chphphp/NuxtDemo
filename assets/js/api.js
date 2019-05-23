/**
 * author:lgf
 * des:这个是专门针对post的请求的
 */
import axios from 'axios'    
const post = function(url,data=null){
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url:url,
            data:data
        }).then((res)=>{
            resolve(res.data)
        }).catch((err) => {            
            reject(err);
        })
    })
};
const get = function(url){
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url:url
        }).then((res)=>{
            resolve(res.data)
        }).catch((err) => {            
            reject(err);
        })
    })
}
export {post,get}