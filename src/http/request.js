const fetch = require('node-fetch');
const ObjectConverter = require('./params');
const FormData = require('form-data');
const form = new FormData();

/**
 * @param route:string<required>
 * @param params:object<not required>
 */
module.exports.getRequestHandler = (route, params) => {
    let _params = '';
    if(!route){
        let error = new Error('Route param is required')
        throw error;
    }
    if(typeof(params) == 'object'){
        _params = ObjectConverter(params);
    }
    return new Promise( async (resolve, reject) => {
        const res = await fetch(route+_params);
        const data = await res.json();
        if(data.status == 200){
            resolve(data)
        }else{
            reject(data)
        }
    });
}

module.exports.postRequestHandler = (route, data) => {
    const _data = data;
    if(!route){
        let error = new Error('Route param is required')
        throw error;
    }

    return new Promise( async (resolve, reject) => {
        const res = await fetch(route, {
            method: 'POST',
            body: _data ,
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json();
        if(data.status == 200){
            resolve(data)
        }else{
            reject(data)
        }
    });
}

module.exports.multipart = (route, params) => {
    const data = params;
    if(!route){
        let error = new Error('Route param is required')
        throw error;
    }
    for(let key in data ){
        form.append(key, data[key]);
    }

    return new Promise( async (resolve, reject) => {
        const res = await fetch(route, {
            method: 'POST',
            body: form 
        })
        const data = await res.json();
        if(data.status == 200){
            resolve(data)
        }else{
            reject(data)
        }
    });
}