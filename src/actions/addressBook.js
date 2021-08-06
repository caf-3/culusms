const { getRequestHandler, postRequestHandler, multipart } = require('../http/request');
const paramValidator = require('../http/validator');
const Routes = require('../http/routes');

class AddressBook{
    constructor(key){
        this._routes = new Routes(key);
    }

    createContact(phone = 0, name = '', group = 0){
        paramValidator(phone, 'Phone number');
        paramValidator(name, 'Contact name');
        const params = {
            phone: phone,
            name: name,
            group: group
        }
        const response = multipart(this._routes.addressBook.create_contact, params);
        return response;
    }

    createGroup(name = ''){
        paramValidator(name, 'Group name');
        const params = {
            name: name
        }

        const response = multipart(this._routes.addressBook.create_group, params);
        return response;
    }

    getGroups(){

        const response = getRequestHandler(this._routes.addressBook.get_groups, {});
        return response;
    }

    getContacts(){

        const response = getRequestHandler(this._routes.addressBook.get_contacts, {});
        return response;
    }

    deleteContact(id = 0){
        paramValidator(id, 'Contact id');
        const params = { id : id}
        const response = getRequestHandler(this._routes.addressBook.delete_contact, params);
        return response;
    }

    deleteGroup(id = 0){
        paramValidator(id, 'Group id');
        const params = { id : id}
        const response = getRequestHandler(this._routes.addressBook.delete_group, params);
        return response;
    }

    
}

module.exports = AddressBook