const { DatabaseManager } = require('../database/models');


function serverMatched(psid) {
    let db = new DatabaseManager('./database/chat-bot.db');
    const reqDb = db.getData(Number(psid));

    return reqDb;
}


module.exports = { serverMatched };