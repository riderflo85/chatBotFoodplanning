const { serverMatched } = require('../utils/get_server');
const request = require('request');


function myDish(day, amOrPm, psid) {
    /* Send a request to the API FoodPlanning for getting the user's dish  of the day */

    const promiseDatabaseReq = serverMatched(psid);

    const onSuccess = rep => {
        return new Promise ((resolve, reject) => {
    
            request({
                "uri": `${rep.url_server}/api/v1/today`,
                "method": "POST",
                "json": {
                    "username": rep.username,
                    "day": day,
                    "amOrPm": amOrPm
                }
            }, (err, resp) => {
                if (!err) {
                    resolve(resp);
                } else {
                    reject(err);
                    console.log(err);
                }
            });
        });
    };

    const onFailure = err => {
        return `Une erreur c'est produite: ${err}`;
    };

    promiseDatabaseReq.then(onSuccess).catch(onFailure);
}

module.exports = { myDish };
