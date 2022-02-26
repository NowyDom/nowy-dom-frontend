import React, { useState, useCallback } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Select from 'react-select';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { MAX_NUMBER_OF_PEOPLE, REGIONS_LIST } from '../consts';
import { api } from '../services';

const createSelectValuesWithNumbers = number => {
  return [...Array(number).keys()].map(item => {
    return { value: `${item + 1}`, label: `${item + 1}` };
  });
};

const formSchema = yup
  .object({
    region: yup.object().required(),
    phone: yup.string().min(5).max(15).required(),
    email: yup.string().email().min(5).max(55).required(),
    location: yup.string().min(5).max(200).required(),
    mapLink: yup.string().url().optional(),
    info: yup.string().max(300)
  })
  .required();

const FieldError = ({ show, message }) =>
  show ? <Form.Text className="text-danger">{message}</Form.Text> : null;

const Success = ({ submissionId }) => {
  return (
    <Alert variant="success">
      <strong>Dziękujemy za Twoją pomoc!</strong>
      <br />
      Twoje zgłoszenie zostało dodane. W ciągu najbliższych godzin/dni skontaktujemy się z
      Tobą. Identyfikator Twojego zgłoszenia: {submissionId}.
    </Alert>
  );
};

const AddApartmentScreen = () => {
  const numberOfPeopleValue = createSelectValuesWithNumbers(MAX_NUMBER_OF_PEOPLE);
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      region: REGIONS_LIST[0],
      numberOfPeople: numberOfPeopleValue[0]
    }
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState();
  const [success, setSuccess] = useState(false);

  const onSubmit = useCallback(async data => {
    console.log(data);
    setSubmitting(true);
    try {
      const preparedParams = {
        persons: Number(data.numberOfPeople?.value),
        region: data.region?.value,
        address: data.location,
        description: data.info && data?.info?.length > 0 ? data.info : null,
        phoneNumber: data.phone,
        email: data.email,
        googleMapsLink: data.mapLink ? data.mapLink : null
      };
      await api.setOffer(preparedParams);
      setSuccess(true);
    } catch (e) {
      // TODO: Add logging/Sentry
      console.log('set offer error: ', e);
      setSubmitError(
        'Problem z wysłaniem formularza, spróbuj ponownie za chwilę. Jeśli problem występuje przez dłuższy czas, napisz do nas na support@razempiddachem.org'
      );
    } finally {
      setSubmitting(false);
    }
  });

  return (
    <div className="add-apartment-wrapper pt-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7">
            {success ? (
              <Success submissionId={'TODO'} />
            ) : (
              <Form className="form-wrapper" onSubmit={handleSubmit(onSubmit)}>
                <h1>Dodaj ogłoszenie</h1>
                <Form.Group className="form-input pt-3">
                  <Form.Label>Wybierz region*</Form.Label>
                  <Controller
                    name="region"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        isInvalid={errors.region}
                        isSearchable
                        placeholder="Wybierz region"
                        options={REGIONS_LIST}
                        defaultValue={REGIONS_LIST[0]}
                      />
                    )}
                  />
                  <FieldError show={errors?.region} message="Wymagane" />
                </Form.Group>
                <Form.Group className="form-input pt-3">
                  <Form.Label>Telefon kontaktowy*</Form.Label>
                  <Form.Control
                    isInvalid={errors.phone}
                    type="text"
                    placeholder="Numer telefonu, +48/+380 ..."
                    {...register('phone')}
                  />
                  <FieldError
                    show={errors?.phone}
                    message="Wymagane, min. 5 cyfr, max. 15"
                  />
                </Form.Group>
                <Form.Group className="form-input pt-3">
                  <Form.Label>Email*</Form.Label>
                  <Form.Control
                    isInvalid={errors.email}
                    type="email"
                    placeholder="Email"
                    {...register('email')}
                  />
                  <FieldError
                    show={errors?.email}
                    message="Wymagane, format test@example.com"
                  />
                </Form.Group>
                <Form.Group className="form-input pt-3">
                  <Form.Label>Określ lokalizację*</Form.Label>
                  <Form.Control
                    isInvalid={errors.location}
                    type="text"
                    placeholder="Lokalizacja, np. ul. Kijowska"
                    {...register('location')}
                  />
                  <FieldError show={errors?.location} message="Wymagane" />
                </Form.Group>
                <Form.Group className="form-input pt-3">
                  <Form.Label>
                    Link do lokalizacji na mapie google (opcjonalnie)
                  </Form.Label>
                  <Form.Control
                    isInvalid={errors.mapLink}
                    type="text"
                    placeholder="Link"
                    {...register('mapLink')}
                  />
                  <FieldError
                    show={errors?.mapLink}
                    message="Powinien być w formacie URL"
                  />
                </Form.Group>
                <Form.Group className="form-input pt-3">
                  <Form.Label>Liczba osób, którą możesz przyjąć*</Form.Label>
                  <Controller
                    name="numberOfPeople"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        isInvalid={errors.numberOfPeople}
                        isSearchable
                        placeholder="Podaj liczbę osób"
                        options={numberOfPeopleValue}
                        defaultValue={numberOfPeopleValue[0]}
                      />
                    )}
                  />
                </Form.Group>
                <Form.Group className="form-input pt-3">
                  <Form.Label>Dodatkowe uwagi lub ostrzeżenia (opcjonalnie)</Form.Label>
                  <Form.Control
                    isInvalid={errors.info}
                    as="textarea"
                    rows={3}
                    placeholder="Dodatkowe uwagi"
                    {...register('info')}
                  />
                  <FieldError show={errors?.info} message="Maksymalnie 300 znaków" />
                </Form.Group>
                <Form.Group className="form-input pt-3">
                  <FieldError show={submitError} message={submitError} />
                </Form.Group>
                <Button
                  className="btn btn-primary btn-large centerButton mt-4"
                  type="submit"
                  disabled={submitting}
                >
                  Wyślij
                </Button>
              </Form>
            )}
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
