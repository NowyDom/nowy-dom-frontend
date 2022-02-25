import Filters from './Filters';
import ResultView from './ResultView';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getOffers } from '../actions';

const FindApartmentScreen = () => {
  const offers = useSelector(state => state.offers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOffers());
  }, []);

  return (
    <div className="find-apartment mt-4">
      <div className="container">
        <h1 className="mb-4">Znajdź ogłoszenie</h1>
        <Filters />
        {offers.map(item => {
          return <ResultView />;
        })}
      </div>
    </div>
  );
};

export default FindApartmentScreen;
