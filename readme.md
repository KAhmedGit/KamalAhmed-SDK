This SDK simplifies the use of the Lord of the Rings API.

To use this:

Run npm install to install dependencies.

Create an instance of the LOTRApi class like so:

const LOTRApi = require('kamalahmed-sdk');
let api = new LOTRApi('your-auth-token-here');

Now you can use these methods:
api.getMovies()
api.getQuotes()

To run tests you can use this command:
npm test

