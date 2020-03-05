import React from "react";
import "./Main.css";
import main from "../../assets/images/main.svg";

const Main = () => {
  return (
    <main className="d-flex align-items-center main">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="main-info col col-lg-4 ">
            <h1 className="main-title">Empreendendo juntos, todos os dias</h1>
            <h6 className="main-sub-title">
              Softwares de gestão para administração de condomínios,
              imobiliárias, escolas e negócios que cobram assinaturas e
              pagamentos recorrentes.
            </h6>
            <button className="btn btn-primary main-btn">Experimente Grátis</button>
          </div>
          <div className="col col-sm-8 d-flex justify-content-end">
            <img src={main} alt="main" className="main-image img-fluid" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
