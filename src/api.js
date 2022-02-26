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

  async getOffers(params = {}) {
    try {
      const response = await this.API.get(Endpoint.offers, {
        params: { region: params?.region }
      });
      return response.data;
    } catch (e) {
      throw e;
    }
  }

  async setOffer(params) {
    try {
      await this.API.post(Endpoint.offers, params);
    } catch (e) {
      throw e;
    }
  }
}
