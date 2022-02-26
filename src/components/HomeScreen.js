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
              Próbujemy skontaktować się z nimi oraz skonsolidować siły. Jak ktoś posiada kontakt do twórców platformy -
              prosimy o kontakt:
            </h5>
            <h5 className="d-flex justify-content-center">
              <a href="https://t.me/razempiddachem">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 128 128">
                  <defs>
                    <linearGradient id="tlogo-a" x1="50%" x2="50%" y1="0%" y2="99.258%">
                      <stop offset="0%" stop-color="#2AABEE"/>
                      <stop offset="100%" stop-color="#229ED9"/>
                    </linearGradient>
                  </defs>
                  <g fill="none" fill-rule="evenodd">
                    <circle cx="64" cy="64" r="64" fill="url(#tlogo-a)" fill-rule="nonzero"/>
                    <path fill="#FFF" fill-rule="nonzero"
                          d="M28.9700376,63.3244248 C47.6273373,55.1957357 60.0684594,49.8368063 66.2934036,47.2476366 C84.0668845,39.855031 87.7600616,38.5708563 90.1672227,38.528 C90.6966555,38.5191258 91.8804274,38.6503351 92.6472251,39.2725385 C93.294694,39.7979149 93.4728387,40.5076237 93.5580865,41.0057381 C93.6433345,41.5038525 93.7494885,42.63857 93.6651041,43.5252052 C92.7019529,53.6451182 88.5344133,78.2034783 86.4142057,89.5379542 C85.5170662,94.3339958 83.750571,95.9420841 82.0403991,96.0994568 C78.3237996,96.4414641 75.5015827,93.6432685 71.9018743,91.2836143 C66.2690414,87.5912212 63.0868492,85.2926952 57.6192095,81.6896017 C51.3004058,77.5256038 55.3966232,75.2369981 58.9976911,71.4967761 C59.9401076,70.5179421 76.3155302,55.6232293 76.6324771,54.2720454 C76.6721165,54.1030573 76.7089039,53.4731496 76.3346867,53.1405352 C75.9604695,52.8079208 75.4081573,52.921662 75.0095933,53.0121213 C74.444641,53.1403447 65.4461175,59.0880351 48.0140228,70.8551922 C45.4598218,72.6091037 43.1463059,73.4636682 41.0734751,73.4188859 C38.7883453,73.3695169 34.3926725,72.1268388 31.1249416,71.0646282 C27.1169366,69.7617838 23.931454,69.0729605 24.208838,66.8603276 C24.3533167,65.7078514 25.9403832,64.5292172 28.9700376,63.3244248 Z"/>
                  </g>
                </svg>
              </a>
              <a href="https://github.com/NowyDom">
                <svg width="50" height="50" viewBox="0 0 1024 1024" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                        transform="scale(64)" fill="#1B1F23"/>
                </svg>
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
