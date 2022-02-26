import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="blur">&nbsp;</div>
      <div className="container main-content">
        <div className="col-12">
          <div className="text-center justify-content-center d-flex flex-column flex-md-row mb-4">
            <Link
              to="/find"
              className="btn w-100 btn-danger btn-lg"
              style={{margin: 15}}
            >
              Znajdź mieszkanie
            </Link>
            <Link
              to="add"
              className="btn w-100 btn-success btn-lg"
              style={{margin: 15}}
            >
              Zapewnij mieszkanie
            </Link>
          </div>
          <div className="text-wrapper text-center">
            <h1 className="text-center">
              Rosja wypowiedziała wojnę Ukrainie i nikczemnie ostrzeliwuje spokojne
              miasta.
            </h1>
            <h5>Tysiące osób przechodzą poprzez granicy codziennie.</h5>
            <h5 className="mb-4">
              Jeśli posiadasz mieszkanie lub pokój który mógłbyś bezplatnie zaoferować ukraincom, wciśnij "Zapewnij
              mieszkanie".
            </h5>
            <h5>
              Baaaardzo inspirowane ukraińską platformą <a href="https://prykhystok.in.ua/">Прихрысток</a>
            </h5>
            <h5>
              Próbujemy skontaktować się z nimi.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
