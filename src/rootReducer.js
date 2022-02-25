import * as CONST from './reducerConsts';

const initialState = {
  offers: []
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.GET_OFFERS:
      return {
        ...state,
        offers: payload.offers
      };

    default:
      return state;
  }
};

export default rootReducer;
