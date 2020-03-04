import React, { useState, useEffect } from "react";
import "./Section.css";
import axios from "axios";

const Section = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    axios
      .get(`http://5e5eae96b5c43c0014ef934c.mockapi.io/api/softwares`)
      .then(res => {
        setData(res.data);
      });
  }, []);

  const renderCard = card => {
    return (
      <div className="card-section d-flex flex-column justify-content-center align-items-center margin">
        <img src="" alt="" />
        <div className="card-title">Ola</div>
        <div className="card-sub">sub</div>
        <div className="card-desc">HUDHSUDSDISDISIJDSIJDSIJDIJSD</div>
        <button className="btn btn-primary">Saiba mais</button>
      </div>
    );
  };

  return (
    <section className="section">
      <div className="content d-flex flex-column align-items-center">
        <h6 className="span-info">Software</h6>
        <h4 className="title-section">
          Transformamos <strong className="yellow">4 grandes mercados</strong>
        </h4>
        <p className="p-section text-center">
          Os softwares da Superlógica oferecem um sistema financeiro completo
          para atender as necessidades dos mercados condominial, imobiliário,
          educacional e de empresas que trabalham no modelo de pagamento
          recorrente ou assinaturas. Neles, é possível gerenciar inadimplência,
          emitir notas fiscais, receber com boleto e cartão de crédito, criar
          uma régua de cobrança eficiente e integrar diversas soluções via API.
        </p>

        <p className="p-sub-section">
          Existem ainda recursos especializados para cada segmento
        </p>
        {/* <div className="row">{data.map(renderCard)}</div> */}
        
      </div>
    </section>
  );
};

export default Section;
