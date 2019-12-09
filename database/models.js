// use SQLite3
// import sqlite3
const sq = require('sqlite3').verbose();


// class table user_infos
class DatabaseManage {

    constructor(dbPathFile) {
        this.db = 
    }

}
    // Attributs

    // constructor :args => nom BDD
        // variable db => connection avec la BDD

    // get données
        // return données

    // set données
        // return message de status


// export classe



/*-------------For create database and table---------------------------------*/

// var db = new sq.Database('chat-bot.db');

// db.serialize(function() {
//     db.run("CREATE TABLE user_server (id_user INTEGER PRIMARY KEY, username TEXT NOT NULL, url_server TEXT NOT NULL)");

//     var injectData = db.prepare("INSERT INTO user_server(username,url_server) VALUES(?,?)");
//     var username = "riderflo85";
//     var url = "https://my_server.com";

//     injectData.run(username, url);

//     injectData.finalize();

//     db.each("SELECT * FROM user_server", function(err, row) {
//         console.log(row);
//     });
// });

// db.close();

/*---------------------------------------------------------------------------*/