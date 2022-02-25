import axios from 'axios';

const Endpoint = {
  regions: 'regionsURL'
};

const REGIONS_MOCK = [
  {
    value: 'LUBLIN',
    label: 'Lublin'
  },
  {
    value: 'GDANSK',
    label: 'Gdańsk'
  },
  {
    value: 'OLSZTYN',
    label: 'Olsztyn'
  },
  {
    value: 'BIALYSTOK',
    label: 'Białystok'
  },
  {
    value: 'SZCZECIN',
    label: 'Szczecin'
  },
  {
    value: 'BYDGOSZCZ',
    label: 'Bydgoszcz'
  }
];

export default class ApiClient {
  constructor() {
    this.API = axios.create({
      baseURL: 'https://backend.endpoint'
    });
  }

  async getRegions() {
    try {
      // await this.API.get(Endpoint.regions);
      return REGIONS_MOCK;
    } catch (e) {
      throw e;
    }
  }
}
