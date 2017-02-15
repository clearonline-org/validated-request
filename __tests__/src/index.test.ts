import { ValidatedRequest } from '../../src/index';

describe('validated-request npm package', () => {
  var validatedRequest = new ValidatedRequest([{ method: 'GET' }]);

  it('sends http get request', () => {
    const url = 'https://www.google.com';
    const headers = { 'Content-Type': 'application/json' };
    return validatedRequest.get(url, headers)
    .then(result => {
      expect(result.response).toBeDefined();
      expect(result.body).toBeDefined();
    });
  
  });
});