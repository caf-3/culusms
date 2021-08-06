const { getRequestHandler } = require('../http/request');
const paramValidator = require('../http/validator');
const Routes = require('../http/routes');
class Message {
    constructor(key){
        this._routes = new Routes(key)
    }

    send(phone = 0, message = '', device = 0, sim = 0, priority = 0){
        paramValidator(phone, 'phone');
        paramValidator(message, 'message');
        const params = {
            phone: phone,
            message: message,
        };
        if(device) params.device = device;
        if(sim) params.sim = sim;
        if(priority) params.priority = priority;
        const response = getRequestHandler(this._routes.messages.send, params);
        return response;
        
    }

    getPending(device = 0){
        const params = {};
        if(device) params.device = device;
        const response = getRequestHandler(this._routes.messages.get_pending, params);
        return response;
    }

    getSent(limit = 0, page = 0, device = 0, api = false, priority = 0){
        const params = {};
        if(device) params.device = device;
        if(limit) params.limit = limit;
        if(page) params.page = page;
        if(api == true) params.api = 1;
        if(priority) params.priority = priority;
        const response = getRequestHandler(this._routes.messages.get_sent, params);
        return response;
    }

    getReceived(limit = 0, page = 0, device = 0){
        const params = {};
        if(limit) params.limit = limit;
        if(page) params.page = page;
        if(device) params.device = device;
        const response = getRequestHandler(this._routes.messages.get_received, params);
        return response;
    }
}
module.exports = Message;