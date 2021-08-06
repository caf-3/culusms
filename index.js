const AddressBook = require('./src/actions/addressBook');
const Message = require('./src/actions/messages')
const Device = require('./src/actions/devices');

class Culusms {
    constructor(key){
        if(!key){
            let error = new Error('Provide your api key');
            throw error;
        }else if(key.length !== 40){
            let error = new Error('Invalid key provided');
            throw error;
        }
        this.messages = new Message(key);
        this.devices = new Device(key);
        this.addressBook = new AddressBook(key)
    }
}

module.exports = Culusms;