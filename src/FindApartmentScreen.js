import Filters from './Filters';

const FindApartmentScreen = () => {
  return (
    <div className="find-apartment mt-4">
      <div className="container">
        <h1 className="mb-4">Znajdź ogłoszenie</h1>
        <h4 className="mb-2">
          Pokazuje: <strong>48</strong> z <strong>1059</strong>
        </h4>
        <Filters />
      </div>
    </div>
  );
};

export default FindApartmentScreen;
