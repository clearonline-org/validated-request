"use strict";
var request_1 = require("request");
function getRequest(url, options) {
    return new Promise(function (resolve, reject) {
        return request_1.get(url, options, function (error, response, body) {
            if (!error) {
                return resolve({ body: body, response: response });
            }
            return reject({ error: error, response: response });
        });
    });
}
exports.getRequest = getRequest;
