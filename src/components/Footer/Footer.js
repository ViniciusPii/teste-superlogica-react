import React from "react";
import "../Footer/Footer.css";
import footerLogo from "../../assets/images/footer-logo.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content row">
          <div className="col-2">
            <img src={footerLogo} alt="footer-logo" />
          </div>
          <div className="col-9 row justify-content-between">
            <div className="footer-nav">
              <h6 className="footer-title">Superlógica</h6>
              <div className="d-flex flex-column footer-nav-menu">
                <a href="/">Página</a>
                <a href="/">Inicial</a>
                <a href="/">Blog</a>
                <a href="/">Desenvolvedores</a>
              </div>
            </div>
            <div className="footer-nav">
              <h6 className="footer-title">Softwares</h6>
              <div className="d-flex flex-column footer-nav-menu">
                <a href="/">Assinaturas</a>
                <a href="/">Condomínios</a>
                <a href="/">Educacional</a>
                <a href="/">Imobiliárias</a>
              </div>
            </div>
            <div className="footer-nav">
              <h6 className="footer-title">Eventos</h6>
              <div className="d-flex flex-column footer-nav-menu">
                <a href="/">Superlógica Xperience</a>
                <a href="/">Superlógica Next</a>
              </div>
            </div>
            <div className="footer-nav">
              <h6 className="footer-title">Contato</h6>
              <div className="d-flex flex-column footer-nav-menu">
                <a href="/">0800 709 6800</a>
                <a href="/">(19) 4009 6800</a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-info">
          <span>
            Para mais informações entre em contato no{" "}
            <strong>0800 709 6800</strong> ou <strong>(19) 4009 6800</strong> em
            horário comercial das 8:00 às 18:00 ou entre em contato com nossa
            assessoria de imprensa: <strong>imprensa@superlogica.com</strong>.
            Rua Joaquim Vilac nº 501, Vila Teixeira - CEP. 13.032-385 -
            Campinas/SP.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
