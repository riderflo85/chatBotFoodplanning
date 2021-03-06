// import the 'callSendApi' function that into the 'send_api.js'
const sendApi = require('../utils/send_message');

// Handles messaging_postbacks events
exports.handlePostback = (sender_psid, received_postback) => {
    let response;

    // Get the payload for the postback
    let payload = received_postback.payload;

    // Set the response based on the postback payload
    if (payload === 'yes') {
        response = { "text": "Thanks!" }
    } else if (payload === 'no') {
        response = { "text": "Oops, try sending another image." }
    }
    // Send the message to acknowledge the postback
    sendApi.callSendAPI(sender_psid, response);
}