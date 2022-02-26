import { useEffect, useCallback, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Filters from './Filters';
import ResultView from './ResultView';
import { api } from '../services';
import { REGIONS_LIST } from '../consts';

const FindApartmentScreen = () => {
  const [selectedRegion, setSelectedRegion] = useState(REGIONS_LIST[0]);
  const [queryStatus, setQueryStatus] = useState('idle');
  const [results, setResults] = useState();

  const handleRegionSelect = useCallback(region => {
    setSelectedRegion(region);
  });

  const handleSearch = useCallback(async () => {
    setQueryStatus('pending');
    try {
      const results = await api.getOffers({ region: selectedRegion?.value });
      console.log('results', results);
      setResults(results);
    } catch {
      setQueryStatus('error');
    } finally {
      setQueryStatus('idle');
    }
  });

  return (
    <div className="find-apartment mt-4">
      <div className="container">
        <h1 className="mb-4">Znajdź ogłoszenie</h1>
        <Filters
          selectedRegion={selectedRegion}
          onRegionSelect={handleRegionSelect}
          onSearch={handleSearch}
          loading={queryStatus === 'pending'}
        />
        {results?.length === 0 && <Alert variant="warning">Brak wyników</Alert>}
        {results?.map(offer => (
          <ResultView key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default FindApartmentScreen;
