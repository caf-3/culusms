const CuluSms = require('culusms');

const client = new CuluSms("<API_KEY />")

/**
 * @param id Number:<Required />
 */
client.devices.getDevice(1).then(data => {
    console.log('success', data);
}).catch(err => {
    console.log('error', err)
})

client.devices.getDevices().then(data => {
    console.log('success', data);
}).catch(err => {
    console.log('error', err)
})