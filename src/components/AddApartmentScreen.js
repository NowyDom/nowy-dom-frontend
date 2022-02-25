import React, { useState } from 'react';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MAX_NUMBER_OF_PEOPLE, REGIONS_LIST, REQUIRED_INFO } from '../consts';
import { useDispatch } from 'react-redux';
import { setOffer } from '../actions';

const createSelectValuesWithNumbers = number => {
  return [...Array(number).keys()].map(item => {
    return { value: `${item + 1}`, label: `${item + 1}` };
  });
};

const REQUIRED_FIELDS = ['region', 'phone', 'email', 'location', 'numberOfPeople'];

const AddApartmentScreen = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const validateRequired = value => !!value && !!value.length;
  const isRequired = value => REQUIRED_FIELDS.includes(value);

  const validateAll = data => {
    let actualErrors = {};
    Object.keys(data).forEach(item => {
      if (!isRequired(item) || validateRequired(data[item])) {
        actualErrors = {
          ...actualErrors,
          [item]: null
        };
      } else {
        actualErrors = {
          ...actualErrors,
          [item]: REQUIRED_INFO
        };
      }
    });
    return actualErrors;
  };

  const showErrors = item => {
    return errors[item] && <Form.Text className="text-danger">{errors[item]}</Form.Text>;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    setErrors(validateAll(formDataObj));
    dispatch(setOffer(formDataObj));
  };

  const numberOfPeopleValue = createSelectValuesWithNumbers(MAX_NUMBER_OF_PEOPLE);

  return (
    <div className="add-apartment-wrapper pt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <Form className="form-wrapper" onSubmit={handleSubmit}>
              <h1>Dodaj ogłoszenie</h1>
              <Form.Group className="form-input pt-3">
                <Form.Label>Wybierz region</Form.Label>
                <Select
                  name="region"
                  defaultValue={REGIONS_LIST[0]}
                  options={REGIONS_LIST}
                  isSearchable
                  placeholder="Wybierz region"
                />
                {showErrors('region')}
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Telefon kontaktowy</Form.Label>
                <Form.Control
                  isInvalid={errors.phone}
                  name="phone"
                  type="text"
                  placeholder="Numer telefonu"
                />
                {showErrors('phone')}
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  isInvalid={errors.email}
                  name="email"
                  type="email"
                  placeholder="Email"
                />
                {showErrors('email')}
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Określ lokalizację</Form.Label>
                <Form.Control
                  isInvalid={errors.location}
                  name="location"
                  type="text"
                  placeholder="Lokalizacja"
                />
                {showErrors('location')}
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Link do lokalizacji na mapie google</Form.Label>
                <Form.Control
                  isInvalid={errors.mapLink}
                  name="mapLink"
                  type="text"
                  placeholder="Link"
                />
                {showErrors('mapLink')}
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Liczba osób, którą możesz przyjąć</Form.Label>
                <Select
                  name="numberOfPeople"
                  options={numberOfPeopleValue}
                  defaultValue={numberOfPeopleValue[0]}
                  placeholder="Podaj liczbę osób"
                />
                {showErrors('numberOfPeople')}
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Dodatkowe uwagi lub ostrzeżenia</Form.Label>
                <Form.Control
                  isInvalid={errors.info}
                  name="info"
                  as="textarea"
                  rows={3}
                  placeholder="Dodatkowe uwagi"
                />
                {showErrors('info')}
              </Form.Group>
              <Button
                className="btn btn-primary btn-large centerButton mt-4"
                type="submit"
              >
                Wyślij
              </Button>
            </Form>
          </div>
          <div className="col-12 col-md-5">
            <div className="alert alert-info">
              <p>
                Rosja strzela do pokojowych miast Ukrainy. Z powodu zbrojnej agresji wiele
                osób w trybie pilnym opuszcza swoje domy i szuka schronienia w
                bezpieczniejszych rejonach. Niektórzy z nich idą „donikąd”, ratując własne
                życie i rodziny. Jeśli masz możliwość tymczasowego schronienia osób
                przymusowo ewakuowanych z terenu działań wojennych - wypełnij wniosek.
              </p>
              <p>
                Sięgnij po pomoc w tym trudnym czasie. Dziś Ukraina potrzebuje jedności i
                wzajemnego wsparcia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddApartmentScreen;
