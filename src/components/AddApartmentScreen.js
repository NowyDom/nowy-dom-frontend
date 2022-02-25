import Select from 'react-select';
import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MAX_NUMBER_OF_PEOPLE_LIST } from '../consts';

const CITIES_MOCK = [
  { value: 'warszawa', label: 'warszawa' },
  { value: 'poznan', label: 'poznan' },
  { value: 'gdansk', label: 'gdansk' }
];

const createSelectValuesWithNumbers = number => {
  return [...Array(number).keys()].map(item => {
    return { value: `${item}`, label: `${item}` };
  });
};

const AddApartmentScreen = () => {
  return (
    <div className="add-apartment-wrapper pt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            <Form className="form-wrapper">
              <h1>Dodaj ogłoszenie</h1>
              <Form.Group className="form-input pt-3">
                <Form.Label>Wybierz region</Form.Label>
                <Select
                  options={CITIES_MOCK}
                  isSearchable
                  isClearable
                  placeholder="Wybierz region"
                />
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Telefon kontaktowy</Form.Label>
                <Form.Control type="text" placeholder="Numer telefonu" />
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Określ lokalizację</Form.Label>
                <Form.Control type="text" placeholder="Lokalizacja" />
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Link do lokalizacji na mapie google</Form.Label>
                <Form.Control type="text" placeholder="Link" />
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Liczba osób, którą możesz przyjąć</Form.Label>
                <Select
                  options={createSelectValuesWithNumbers(MAX_NUMBER_OF_PEOPLE_LIST)}
                  isSearchable
                  isClearable
                  placeholder="Podaj liczbę osób"
                />
              </Form.Group>
              <Form.Group className="form-input pt-3">
                <Form.Label>Dodatkowe uwagi lub ostrzeżenia</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Dodatkowe uwagi" />
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
