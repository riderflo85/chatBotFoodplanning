const request = require('request');

exports.checkIp = () => {
    request({
        "uri": "https://api.ipify.org/",
        "method": "GET"
    },
    (err, res, body) => {
        if (!err) {
            return body;
        } else {
            return err;
        }
    });
};