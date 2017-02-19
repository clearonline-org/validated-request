'use strict';
var ValidatedRequest = require('../../lib/index');

describe('validated-request npm package get', function() {
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

describe('validated-request npm package post', function() {
  var validatedRequest = new ValidatedRequest([{ 
    method: 'POST', 
    body: { name: 'string', country: 'string' }
  }]);

  it('sends http post request', () => {
    var url = 'https://www.google.com';
    var headers = { 'Content-Type': 'application/json' };
    var name = 'John Smith';
    var country = 'USA';
    var body = { name, country };

    return validatedRequest.post(url, headers, body)
    .then(result => {
      expect(result.response).toBeDefined();
      expect(result.body).toBeDefined();
    });
  
  });
});