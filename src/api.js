import axios from 'axios';

const BASE_URL = 'https://frozen-peak-70499.herokuapp.com/';

const Endpoint = {
  offers: 'api/v1/offer'
};

export default class ApiClient {
  constructor() {
    this.API = axios.create({
      baseURL: BASE_URL
    });
  }

  async getOffers(params) {
    try {
      console.log('get offers');
      console.log(params);
      // await this.API.get(Endpoint.regions);
      return [{ test: 'test' }];
    } catch (e) {
      throw e;
    }
  }

  async setOffer(params) {
    try {
      console.log('set offer');
      console.log(params);
      await this.API.post(Endpoint.regions, params);
    } catch (e) {
      throw e;
    }
  }
}
