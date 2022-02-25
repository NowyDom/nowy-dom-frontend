import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const Filters = () => {
  return (
    <div className="filters-wrapper flex-wrap d-flex align-items-center pt-3 mb-4">
      <div className="col-12 col-md-6 form-input">
        <h6 className="mb-4">Filtruj wg regionu</h6>
        <Select options={options} isSearchable isClearable placeholder="Wybierz region" />
      </div>
      <div className="col-12 form-input">
        <div className="btn btn-primary mt-4">Filtruj</div>
      </div>
    </div>
  );
};

export default Filters;
