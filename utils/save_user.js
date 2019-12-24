const { DatabaseManager } = require('../database/models');

function saveUserInDb(psid, username, url) {
    /* Save username and url server in the database */

    let db = new DatabaseManager('./database/chat-bot.db');
    const responseDatabase = db.injectData(psid, username, url);

    return responseDatabase;
}

module.exports = { saveUserInDb };