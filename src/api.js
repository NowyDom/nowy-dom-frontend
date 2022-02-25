import axios from 'axios';

const Endpoint = {
  offers: 'offersURL'
};

export default class ApiClient {
  constructor() {
    this.API = axios.create({
      baseURL: 'https://backend.endpoint'
    });
  }

  async getOffers(params) {
    try {
      console.log('get offers');
      console.log(params);
      // await this.API.get(Endpoint.regions);
      return [{test: 'test'}];
    } catch (e) {
      throw e;
    }
  }
}
