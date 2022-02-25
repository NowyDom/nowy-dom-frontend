import * as CONST from './reducerConsts';

export const setOffersInStore = offers => {
  return { type: CONST.GET_OFFERS, payload: { offers } };
};

export const getOffers = () => {
  return async (dispatch, getState, { api }) => {
    try {
      const offers = await api.getOffers();
      dispatch(setOffersInStore(offers));
    } catch (e) {
      console.log('get offers error: ', e);
    }
  };
};
