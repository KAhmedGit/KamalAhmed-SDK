const axios = require('axios');

class LOTRApi {
    constructor(authToken) {
        this.api = axios.create({
            baseURL: 'https://the-one-api.dev/v2',
            timeout: 10000,
            headers: {'Authorization': `Bearer ${authToken}`}
        });
    }


    getMovies() {
        return this.api.get('/movie');
    }

    getQuotes() {
        return this.api.get('/quote');
    }
}

module.exports = LOTRApi;