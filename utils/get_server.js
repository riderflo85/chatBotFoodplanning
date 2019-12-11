const { DatabaseManager } = require('../database/models');


function serverMatched(psid) {
    /* Search a user informations in the database with PSID */

    let db = new DatabaseManager('./database/chat-bot.db');
    const reqDb = db.getData(Number(psid));

    // return promise
    return reqDb;
}

module.exports = { serverMatched };
