const CuluSms = require('culusms');

const client = new CuluSms("<API_KEY />")

/**
 * @param name String:<Required />
 */
client.addressBook.createGroup('Test').then(res => {
    console.log('success', res);
}).catch(err => {
    console.log('error', err)
})

client.addressBook.getGroups().then(res => {
    console.log('success', res);
}).catch(err => {
    console.log('error', err)
})

/**
 * @param phone Number:<Required />
 * @param name String:<Required />
 * @param group Number:<Required />
 */
client.addressBook.createContact('+258840000000', 'Pietro Zim', 14).then(res => {
    console.log('success', res);
}).catch(err => {
    console.log('error', err)
})

client.addressBook.getContacts().then(res => {
    console.log('success', res);
}).catch(err => {
    console.log('error', err)
})


/**
 * @param id Number:<Required />
 */
client.addressBook.deleteGroup(15).then(res => {
    console.log('success', res);
}).catch(err => {
    console.log('error', err)
})

/**
 * @param id Number:<Required />
 */
client.addressBook.deleteContact(15).then(res => {
    console.log('success', res);
}).catch(err => {
    console.log('error', err)
})