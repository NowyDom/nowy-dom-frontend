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
