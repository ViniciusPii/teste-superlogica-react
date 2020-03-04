import React from "react";
import "./Main.css";
import main from "../../assets/main.svg";

const Main = () => {
  return (
    <main className="d-flex align-items-center">
      <div className="container col-sm-8">
        <div className="row d-flex align-items-center">
          <div className="main-info col col-sm-4">
            <h1 className="title">Empreendendo juntos, todos os dias</h1>
            <h6 className="sub-title">
              Softwares de gestão para administração de condomínios,
              imobiliárias, escolas e negócios que cobram assinaturas e
              pagamentos recorrentes.
            </h6>
            <button className="btn btn-primary">Experimente Grátis</button>
          </div>
          <div className="main-image col col-sm-8 d-flex justify-content-end">
            <img src={main} alt="main" className="image" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
