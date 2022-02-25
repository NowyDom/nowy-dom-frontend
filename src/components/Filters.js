import React, { useState } from 'react';
import Select from 'react-select';
import { REGIONS_LIST } from '../consts';
import { useDispatch } from 'react-redux';
import { getOffers } from '../actions';

const Filters = () => {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  return (
    <div className="filters-wrapper flex-wrap d-flex align-items-center pt-3 mb-4">
      <div className="col-12 col-md-6 form-input">
        <h6 className="mb-4">Filtruj wg regionu</h6>
        <Select
          options={REGIONS_LIST}
          isSearchable
          isClearable
          placeholder="Wybierz region"
          defaultValue={selected}
          onChange={setSelected}
        />
      </div>
      <div className="col-12 form-input" onClick={() => dispatch(getOffers(selected))}>
        <div className="btn btn-primary mt-4">Filtruj</div>
      </div>
    </div>
  );
};

export default Filters;
