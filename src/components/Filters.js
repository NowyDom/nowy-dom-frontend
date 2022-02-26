import React, { useState } from 'react';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { REGIONS_LIST } from '../consts';
import { useDispatch } from 'react-redux';
import { getOffers } from '../actions';

const Filters = ({ selectedRegion, onRegionSelect, onSearch, loading }) => {
  return (
    <div className="filters-wrapper flex-wrap d-flex align-items-center pt-3 mb-4">
      <div className="col-12 col-md-6 form-input">
        <h6 className="mb-4">Filtruj wg regionu</h6>
        <Select
          options={REGIONS_LIST}
          isSearchable
          isClearable
          placeholder="Wybierz region"
          value={selectedRegion}
          onChange={region => onRegionSelect(region)}
        />
      </div>

      <div className="col-12 form-input">
        <Button
          className="btn btn-primary btn-large centerButton mt-4"
          type="submit"
          disabled={loading}
          onClick={onSearch}
        >
          <span style={{ marginRight: loading ? '12px' : '4px' }}>Wyszukaj</span>
          {loading && (
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
            />
          )}
        </Button>
      </div>
    </div>
  );
};

export default Filters;
