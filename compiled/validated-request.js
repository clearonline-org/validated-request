/**
 * @lisence
 * Copyright 2017 Clearonline, Org.
 *
 * @Author: mars
 * @Date:   2017-02-15T01:19:14-05:00
 * @Last modified by:   mars
 * @Last modified time: 2017-02-15T01:40:57-05:00
*/
"use strict";
var get_1 = require("./validated/get");
var ValidatedRequest = (function () {
    function ValidatedRequest(protocol) {
        var _this = this;
        this.protocol = protocol;
        protocol.forEach(function (_a) {
            var method = _a.method, param = _a.param, query = _a.query, body = _a.body;
            switch (method) {
                case 'GET':
                    _this.validatedGet = new get_1.ValidatedGet(method, param, query, body);
                    break;
                default:
                    break;
            }
        });
    }
    ValidatedRequest.staticGet = function (url, headers) {
        return Promise.reject({ message: 'NOT Implemented' });
    };
    ValidatedRequest.staticPost = function (url, headers) {
        return Promise.reject({ message: 'NOT Implemented' });
    };
    ValidatedRequest.staticPut = function (url, headers) {
        return Promise.reject({ message: 'NOT Implemented' });
    };
    ValidatedRequest.prototype.get = function (url, headers) {
        return this.validatedGet.get(url, headers);
    };
    return ValidatedRequest;
}());
exports.ValidatedRequest = ValidatedRequest;
