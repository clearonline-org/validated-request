"use strict";
var request_1 = require("request");
function getRequest(url, options) {
    return new Promise(function (resolve, reject) {
        return request_1.get(url, options, function (error, response, body) {
            if (error || response.statusCode !== 200) {
                error = error || body; // some api's send error message in the body
                return reject({ error: error, response: response });
            }
            return resolve({ body: body, response: response });
        });
    });
}
exports.getRequest = getRequest;
