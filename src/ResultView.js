const ResultView = () => {
  return (
    <div className="result-wrapper mb-4">
      <div className="card">
        <div className="card-body">
          <h3 className="mb-4">REGION WINNICY, Wapniarka22</h3>
          <h6>
            Miejsca: <strong>2</strong>
          </h6>
          <h6>
            Dodano: <strong>Dzisiaj o 18:27</strong>
          </h6>
          <hr />
          <div className="controls d-flex flex-column flex-md-row">
            <a href={`tel:+48 888 888 888`} className="btn btn-success btn-sm">
              <strong>Zadzwoń</strong>
            </a>
            <a
              href={`https://wp.pl`}
              target="_blank"
              className="btn btn-warning btn-sm"
              style={{ marginLeft: 10 }}
            >
              <strong>Pokaż na mapie</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultView;
