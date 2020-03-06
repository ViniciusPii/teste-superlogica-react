import React from "react";
import logo from "../../assets/images/logo.svg";
import user from "../../assets/images/user-icon.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header p-0">
      <nav className="navbar navbar-expand-lg col-12">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="flex">
              <ul className="navbar-nav flex">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Software
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="/">
                    Serviços
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Eventos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <a href="/">
                <img src={user} alt="user" />
              </a>
              <span className="pl-2">Acessar sistema</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
