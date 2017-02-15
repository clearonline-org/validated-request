'use strict';
var ValidatedRequest = require('../../lib/index');

describe('validated-request npm package', () => {
  var validatedRequest = new ValidatedRequest([{ method: 'GET' }]);

  it('sends http get request', () => {
    var url = 'https://www.google.com';
    var headers = { 'Content-Type': 'application/json' };
    return validatedRequest.get(url, headers)
    .then(result => {
      expect(result.response).toBeDefined();
      expect(result.body).toBeDefined();
    });
  
  });
});