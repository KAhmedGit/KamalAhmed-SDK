This SDK simplifies the use of the Lord of the Rings API.

To use this:

Get access to the Lord of The Ring API through their website and take note of the Bearer token they provide. It will be passed in to all the requests.

Run npm install kamalahmed-sdk

Create an instance of the LOTRApi class like so:

const LOTRApi = require('kamalahmed-sdk');
let api = new LOTRApi('your-auth-token-here');

Now you can use these methods:
api.getMovies()
api.getQuotes()

To run tests you can use this command:
npm test

