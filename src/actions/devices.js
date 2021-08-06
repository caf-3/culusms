const { getRequestHandler } = require('../http/request')
const paramValidator = require('../http/validator')
const Routes = require('../http/routes')
class Device{
    constructor(key){
        this._routes = new Routes(key)
    }

    getDevice(id = 0){
        paramValidator(id, 'device id');
        const params = {id: id};
        const response = getRequestHandler(this._routes.devices.get_device, params);
        return response;
    }
    
    getDevices(){
        const response = getRequestHandler(this._routes.devices.get_devices, {});
        return response;
    }
}

module.exports = Device;