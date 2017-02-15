/**
 * @lisence
 * Copyright 2017 Clearonline, Org.
 * 
 * @Author: mars
 * @Date:   2017-02-15T01:19:14-05:00
 * @Last modified by:   mars
 * @Last modified time: 2017-02-15T01:40:57-05:00
*/

export * from './validated-request';
import { ValidatedRequest } from './validated-request';

module.exports = ValidatedRequest;
module.exports.ValidatedRequest = ValidatedRequest;
module.exports.get = ValidatedRequest;
module.exports.post = ValidatedRequest;
module.exports.put = ValidatedRequest;