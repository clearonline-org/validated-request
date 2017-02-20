# validated-request

## Goal
Prevent your system from sending request with incorect parameters

## use case
* Sending log data to a logging server that provides analysis tools on the log

```javascript

var ValidatedRequest = require('validated-request');
// protocol says that we can only make GET requests
var validatedRequest = new ValidatedRequest([{ method: 'GET', headers: { 'Content-Type': 'string' } }]);

var url = '<host>/api',
    headers = { 'Content-Type': 'application/json' },
    body = {
        request: 'what can you do',
        response: 'I can tell you a joke!'
    };

validatedRequest.get(url, headers) // this will work!
validatedRequest.post(url, headers, body) // this will NOT work because aggrement is that the system should only make GET requests

```
# api
* Sending post request
```javascript

var ValidatedRequest = require('validated-request');
// protocol says that we can only make GET requests
var validatedRequest = new ValidatedRequest([{
     method: 'POST',
     headers: { 'Content-Type': 'string' },
     body: { request: 'string', response: 'string' }
}]);

var url = '<host>/api',
    headers = { 'Content-Type': 'application/json' },
    body = {
        request: 'what can you do',
        response: 'I can tell you a joke!'
    };

validatedRequest.get(url, headers) // this will NOT work because aggrement is that the system should only make POST requests
validatedRequest.post(url, headers, body) // this will work!

```