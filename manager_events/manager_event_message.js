// import the 'callSendApi' function that into the 'send_api.js'
const sendApi = require('../utils/send_message');
const parser = require('../utils/parser');

// Handles messages events
exports.handleMessage = (sender_psid, received_message) => {
    let response;

    // Check if the message contains text
    if (received_message.text) {

        let parsed = parser.parser(received_message.text, sender_psid);

        /*----------------------Reaction of the promise----------------------*/
        const onSucess = rep => {
            let data = {"text": `L'url du serveur est: ${rep.username}`};
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
            parsed.then(onSucess).catch(onFailure); // A remplacer par la requete vers FoodPlanning

        } else {
            // Create the payload for a basic text message
            response = {"text": parsed};
            sendApi.callSendAPI(sender_psid, response);
        }
    }
}