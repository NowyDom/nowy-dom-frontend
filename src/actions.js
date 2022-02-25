import * as CONST from './reducerConsts';

export const setOffersInStore = offers => {
  return { type: CONST.GET_OFFERS, payload: { offers } };
};

export const getOffers = params => {
  return async (dispatch, getState, { api }) => {
    try {
      const offers = await api.getOffers(params);
      dispatch(setOffersInStore(offers));
    } catch (e) {
      console.log('get offers error: ', e);
    }
  };
};

export const setOffer = params => {
  return async (dispatch, getState, { api }) => {
    try {
      const preparedParams = {
        persons: parseInt(params.numberOfPeople, 10),
        region: params.region,
        address: params.location,
        description: params.info,
        phoneNumber: params.phone
      }
      await api.setOffer(preparedParams);
    } catch (e) {
      console.log('set offer error: ', e);
    }
    dispatch(getOffers());
  };
};
