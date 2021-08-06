const CuluSms = require('culusms');

const client = new CuluSms("<API_KEY />")

/**
 * @param phone Number:<Required />
 * @param message String:<Required />
 * @param device Number<Optional />
 * @param sim Number<Optional />
 * @param priority Number<Optional />
 */
client.messages.send(000000000, 'Sent with culusms').then(res => {
    console.log('success',res)
}).catch(err => {
    console.log('error',err)
})

/**
 * @param device Number:<Optional />
 */
client.messages.getPending().then(res => {
    console.log('pending', res)
}).catch(err => {
    console.log('error', err)
})

/**
 * @param limit Number:<Optional />
 * @param page Number:<Optional />
 * @param api Boolean:<Optional />
 * @param priority Number:<Optional />
 */
client.messages.getSent(22, 0, 22, false, 1).then(res => {
    console.log('semt', res)
}).catch(err => {
    console.log('error', err)
})

/**
 * @param limit Number:<Optional />
 * @param page Number:<Optional />
 * @param device Boolean:<Optional />
 */
client.messages.getReceived(5, 0, 22).then(res => {
    console.log('received', res)
}).catch(err => {
    console.log('error', err)
})