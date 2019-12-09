// import sqlite3
const sq = require('sqlite3').verbose();


class DatabaseManager {

    constructor(dbPathFile) {
        this.db = new sq.Database(dbPathFile, (err) => {
            if (!err) {
                console.log("Connection à la base de données");
            } else {
                console.warn("Impossible de se connecter à la base de données", err);
            }
        });
    }

    getData(pssid) {
        let sqlReq = `SELECT username, url_server FROM user_server WHERE pssid=${pssid}`;

        return new Promise((resolve, reject) => {
            this.db.get(sqlReq, function(err, rep) {
                if (!err) {
                    resolve(rep);
                } else {
                    reject(err);
                }
            });
        });
    }

    injectData(pssid, username, url) {
        try {
            let prepareReq = this.db.prepare("INSERT INTO user_server(pssid,username,url_server) VALUES(?,?,?)");
            prepareReq.run(pssid, username, url);

            return true;

        } catch (error) {
            return error;
        }
    }
}


// export class
module.exports = DatabaseManager;



/*-------------------------For test--------------------------------------------
let conn = new DatabaseManager('./database/chat-bot.db');

// console.log(conn.injectData(1458333, "test4", "url_du_server458.com"));
// conn.db.each("SELECT * FROM user_server", function(err, row) {
//     console.log(row);
// });

const onSuccess = rep => {
    console.log(rep.username);
    // code pour traiter la réponse de la requete
}

const onFailure = err => {
    console.log(err);
}

const dbReq = conn.getData(2526686807400473);
dbReq.then(onSuccess).catch(onFailure);

conn.db.close();
-----------------------------------------------------------------------------*/