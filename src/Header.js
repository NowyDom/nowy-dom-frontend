import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex header-height align-items-center justify-content-between">
          <div className="logo">Logo</div>
          <div className="menu">
            <div className="btn btn-danger">Znajdź mieszkanie</div>
            <div className="btn btn-success" style={{ marginLeft: 20 }}>
              Zapewnij mieszkanie
            </div>
            <div className="btn btn-primary" style={{ marginLeft: 20 }}>
              Zaloguj
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
