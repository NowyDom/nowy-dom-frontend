import Select from 'react-select';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MAX_NUMBER_OF_PEOPLE, REGIONS_LIST } from '../consts';
import { useDispatch } from 'react-redux';
import { setOffer } from '../actions';

const createSelectValuesWithNumbers = number => {
  return [...Array(number).keys()].map(item => {
    return { value: `${item}`, label: `${item}` };
  });
};

const AddApartmentScreen = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());
    dispatch(setOffer(formDataObj));
  };
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
                  options={REGIONS_LIST}
                  isSearchable
                  isClearable
                  placeholder="Wybierz region"
                />
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Telefon kontaktowy</Form.Label>
                <Form.Control name="phone" type="text" placeholder="Numer telefonu" />
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Określ lokalizację</Form.Label>
                <Form.Control name="location" type="text" placeholder="Lokalizacja" />
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Link do lokalizacji na mapie google</Form.Label>
                <Form.Control name="mapLink" type="text" placeholder="Link" />
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Liczba osób, którą możesz przyjąć</Form.Label>
                <Select
                  name="numberOfPeople"
                  options={createSelectValuesWithNumbers(MAX_NUMBER_OF_PEOPLE)}
                  isSearchable
                  isClearable
                  placeholder="Podaj liczbę osób"
                />
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Dodatkowe uwagi lub ostrzeżenia</Form.Label>
                <Form.Control
                  name="info"
                  as="textarea"
                  rows={3}
                  placeholder="Dodatkowe uwagi"
                />
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
