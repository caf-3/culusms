module.exports = function ObjectConverter(obj){
    let params = '';
    for(let key in obj){
        if(params.length == 0) params = '&'
        params += key+'='+obj[key]+"&";
    }

    let andLastIndex = params.lastIndexOf('&');
    params = params.substr(0, andLastIndex);
    return params;
}