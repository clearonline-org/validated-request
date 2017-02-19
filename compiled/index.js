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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require("./validated-request"));
var validated_request_1 = require("./validated-request");
module.exports = validated_request_1.ValidatedRequest;
module.exports.ValidatedRequest = validated_request_1.ValidatedRequest;
module.exports.get = validated_request_1.ValidatedRequest.staticGet;
module.exports.post = validated_request_1.ValidatedRequest.staticPost;
module.exports.put = validated_request_1.ValidatedRequest.staticPut;
