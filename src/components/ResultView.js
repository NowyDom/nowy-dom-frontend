const ResultView = props => {
  const { region, address, persons, description, phoneNumber, googleMapsLink } =
    props.offer;
  return (
    <div className="result-wrapper mb-4">
      <div className="card">
        <div className="card-body">
          <h3 className="mb-4">Region {region}</h3>
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
};

export default ResultView;
