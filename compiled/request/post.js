"use strict";
var request_1 = require("request");
function postRequest(url, options) {
    return new Promise(function (resolve, reject) {
        return request_1.post(url, options, function (error, response, body) {
            // console.log(' START post ');
            // console.log(error, response.statusCode);
            // console.log(' END post ');
            if (error || response.statusCode !== 200) {
                error = error || body; // some api's send error message in the body
                return reject({ error: error, response: response });
            }
            return resolve({ body: body, response: response });
        });
    });
}
exports.postRequest = postRequest;
