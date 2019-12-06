// import the 'callSendApi' function that into the 'send_api.js'
const sendApi = require('../send_message');
const parser = require('../parser');

// Handles messages events
exports.handleMessage = (sender_psid, received_message, req) => {
    let response;

    // Check if the message contains text
    if (received_message.text) {

        // Create the payload for a basic text message
        // response = {
        //     "text": parser.parser(received_message.text)
        // };
        response = {
            "text": req
        }
    } else if (received_message.attachments) {

        // Gets the URL of the message attachment
        let attachment_url = received_message.attachments[0].payload.url;
        response = {
            "attachment": {
                "type": "template",
                "payload": {
                    "template_type": "generic",
                    "elements": [{
                        "title": "Is this the right picture?",
                        "subtitle": "Tap a button to answer.",
                        "image_url": attachment_url,
                        "buttons": [
                            {
                                "type": "postback",
                                "title": "Yes!",
                                "payload": "yes",
                            },
                            {
                                "type": "postback",
                                "title": "No!",
                                "payload": "no",
                            }
                        ],
                    }]
                }
            }
        }
    }

    // Sends the response message
    sendApi.callSendAPI(sender_psid, response);
}