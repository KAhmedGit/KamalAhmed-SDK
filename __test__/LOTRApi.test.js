const LOTRApi = require('../src/LOTRApi');
const axios = require('axios');

jest.mock('axios');

describe('LOTRApi', () => {
  let api;

  beforeEach(() => {
    api = new LOTRApi('fake-token');
  });

  test('getMovies calls correct endpoint', async () => {
    axios.get.mockResolvedValue({ data: {} });

    await api.getMovies();

    expect(axios.get).toHaveBeenCalledWith('/movie', expect.anything());
  });

  test('getQuotes calls correct endpoint', async () => {
    axios.get.mockResolvedValue({ data: {} });

    await api.getQuotes();

    expect(axios.get).toHaveBeenCalledWith('/quote', expect.anything());
  });
});