// import sqlite3
const sq = require('sqlite3').verbose();


/*------------------------For create database and table----------------------*/
var db = new sq.Database('./database/chat-bot.db');

db.serialize(function() {
    db.run("CREATE TABLE user_server (id_user INTEGER PRIMARY KEY, pssid INTEGER NOT NULL, username TEXT NOT NULL, url_server TEXT NOT NULL)");
});

db.close();
/*---------------------------------------------------------------------------*/



/*---------------------For exemple insert and select data--------------------*/
// var setData = db.prepare("INSERT INTO user_server(pssid,username,url_server) VALUES(?,?,?)");
// var pssid = 2526686807400473;
// var username = "riderflo85";
// var url = "https://my_server.com";

// setData.run(pssid, username, url);

// setData.finalize();

// db.each("SELECT * FROM user_server", function(err, row) {
//     console.log(row);
// });
/*---------------------------------------------------------------------------*/