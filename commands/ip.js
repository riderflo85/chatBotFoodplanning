const request = require('request');

exports.checkIp = () => {
    
    return new Promise ((resolve, reject) => {

        request({
            "uri": "https://api.ipify.org/",
            "method": "GET"
            },
            (err, res, body) => {
                if (!err) {
                    resolve(body);
                } else {
                    reject(err);
                }
            }
        );
    });
}