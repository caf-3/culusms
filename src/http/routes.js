class Routes {
    constructor(key){
        this.messages = {
            send : `https://culusms.com/api/send?key=${key}`,
            get_sent : `https://culusms.com/api/get/sent?key=${key}`,
            get_received : `https://culusms.com/api/get/received?key=${key}`,
            get_pending : `https://culusms.com/api/get/pending?key=${key}`
        },
        this.devices = {
            get_devices: `https://culusms.com/api/get/devices?key=${key}`,
            get_device: `https://culusms.com/api/get/device?key=${key}`
        },
        this.addressBook = {
            create_contact : `https://culusms.com/api/create/contact?key=${key}`,
            create_group : `https://culusms.com/api/create/group?key=${key}`,
            delete_contact : `https://culusms.com/api/delete/contact?key=${key}`,
            delete_group : `https://culusms.com/api/delete/group?key=${key}`,
            get_contacts : `https://culusms.com/api/get/contacts?key=${key}`,
            get_groups : `https://culusms.com/api/get/groups?key=${key}`
        }
    }
}

module.exports = Routes