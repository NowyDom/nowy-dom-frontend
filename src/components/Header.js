import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="d-flex header-height align-items-center justify-content-between">
          <Link to="/" className="logo">
            <h4>razempiddachem</h4>
          </Link>
          <div className="menu">
            <Link to="find" className="btn btn-danger">
              Znajdź mieszkanie
            </Link>
            <Link to="add" className="btn btn-success" style={{ marginLeft: 20 }}>
              Zapewnij mieszkanie
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
