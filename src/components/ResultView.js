function Result({
  id,
  region,
  address,
  persons,
  description,
  phoneNumber,
  googleMapsLink
}) {
  return (
    <div className="filters-wrapper tw-bg-white tw-shadow tw-overflow-hidden sm:tw-rounded-lg">
      <div className="tw-px-4 tw-py-5 sm:tw-px-6">
        <h3 className="tw-text-lg tw-leading-6 tw-font-medium tw-text-gray-900">
          Region: {region}
        </h3>
        <p className="tw-mt-1 tw-max-w-2xl tw-text-sm tw-text-gray-500">
          {address}, ID zgłoszenia: {id}
        </p>
      </div>
      <div className="tw-border-t tw-border-gray-200 tw-px-4 tw-py-5 sm:tw-p-0">
        <dl className="sm:tw-divide-y sm:tw-divide-gray-200">
          <div className="tw-py-4 sm:py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6">
            <dt className="tw-text-sm tw-font-medium tw-text-gray-500">Liczba miejsc</dt>
            <dd className="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-mt-0 sm:tw-col-span-2">
              {persons}
            </dd>
          </div>
          <div className="tw-py-4 sm:tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6">
            <dt className="tw-text-sm tw-font-medium tw-text-gray-500">Telefon</dt>
            <dd className="tw-mt-1 tw-text-sm tw-text-gray-900 sm:tw-mt-0 sm:tw-col-span-2">
              {phoneNumber}
              <a
                href={`tel:${phoneNumber}`}
                className="tw-ml-2 tw-inline-flex tw-items-center tw-px-2.5 tw-py-1.5 tw-border tw-border-transparent tw-text-xs tw-font-medium tw-rounded tw-shadow-sm tw-text-white hover:tw-text-white tw-no-underline tw-bg-green-600 hover:tw-bg-green-700 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-indigo-500"
              >
                <strong>Zadzwoń</strong>
              </a>
            </dd>
          </div>
          <div className="tw-py-4 sm:tw-py-5 sm:tw-grid sm:tw-grid-cols-3 sm:tw-gap-4 sm:tw-px-6">
            <dt className="tw-text-sm tw-font-medium tw-text-gray-500">E-mail</dt>
            <dd className="tw-mt-1 tw-text-sm tw-text-gray-400 sm:tw-mt-0 sm:tw-col-span-2">
              Wyślij zapytanie (todo)
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

const ResultView = ({ offer }) => {
  return (
    <div className="tw-mb-3 md:tw-mb-5 tw-max-w-lg">
      <Result {...offer} />
    </div>
  );
  /*
  return (
    <div className="result-wrapper mb-4">
      <div className="card">
        <div className="card-body">
          <h3 className="mb-8 mt-2">Region {region}</h3>
          <h3 className="mb-4">Lokalizacja {address}</h3>
          <h6>
            Miejsca: <strong>{persons.toString()}</strong>
          </h6>
          {description && description.lenght ? (
            <p>Dodatkowe informacje: {description}</p>
          ) : null}
          <hr />
          <div className="controls d-flex flex-column flex-md-row">
            <a href={`tel:${phoneNumber}`} className="btn btn-success btn-sm">
              <strong>Zadzwoń</strong>
            </a>
            {googleMapsLink && (
              <a
                href={`${googleMapsLink}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-warning btn-sm"
                style={{ marginLeft: 10 }}
              >
                <strong>Pokaż na mapie</strong>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
  */
};

export default ResultView;
