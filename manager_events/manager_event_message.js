// import the 'callSendApi' function that into the 'send_api.js'
const sendApi = require('../utils/send_message');
const parser = require('../utils/parser');

// Handles messages events
exports.handleMessage = (sender_psid, received_message) => {
    let response;

    // Check if the message contains text
    if (received_message.text) {

        let parsed = parser.parser(received_message.text);

        /*----------------------Reaction of the promise----------------------*/
        const onSucess = body => {
            let data = {"text": `L'ip du serveur est: ${body}`};
            sendApi.callSendAPI(sender_psid, data);
        }

        const onFailure = err => {
            response = {
                "text": `Impossible de trouver l'ip du serveur\n${err}`
            };
        }
        /*-------------------------------------------------------------------*/

        // Checks if the message should be requested
        if (typeof parsed != 'string') {
            parsed.then(onSucess).catch(onFailure);

        } else {
            // Create the payload for a basic text message
            response = {"text": parsed};
            sendApi.callSendAPI(sender_psid, response);
        }
    }
}