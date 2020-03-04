import React from "react";
import logo from "../../assets/logo.svg";
import user from "../../assets/user-icon.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg">
        <div className="container">
          <a class="navbar-brand" href="/">
            <img src={logo} alt="logo" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="flex">
              <ul class="navbar-nav flex">
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Software
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link" href="/">
                    Serviços
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Eventos
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
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
