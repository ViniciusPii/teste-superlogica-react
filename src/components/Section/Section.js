import React, { useState, useEffect } from "react";
import "./Section.css";
import axios from "axios";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import url from "../../config/baseApi";

const Section = () => {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(4);

  useEffect(() => {
    axios.get(url).then(res => {
      setData(res.data);
    });
  }, []);

  window.addEventListener("resize", function() {
    if (window.innerWidth >= 1024) {
      setSlide(4);
    } else if (window.innerWidth >= 885) {
      setSlide(3);
    } else if (window.innerWidth >= 700) {
      setSlide(2);
    } else {
      setSlide(1);
    }
  });

  const renderCard = card => {
    return (
      <div className="section-card d-flex flex-column align-items-center m-3">
        <img src={card.icon} alt="" className="section-card-image" />
        <div className="section-card-title">{card.title}</div>
        <div className="section-card-sub">{card.headline}</div>
        {card.features.map(feature => (
          <div className="section-card-desc">{feature}</div>
        ))}
        <button className="btn btn-primary section-btn-card">Saiba mais</button>
      </div>
    );
  };

  return (
    <section className="section container-fluid">
      <div className="content d-flex flex-column align-items-center">
        <h6 className="section-info">Software</h6>
        <h4 className="section-title">
          Transformamos
          <strong className="strong-color"> 4 grandes mercados</strong>
        </h4>
        <p className="section-p text-center">
          Os softwares da Superlógica oferecem um sistema financeiro completo
          para atender as necessidades dos mercados condominial, imobiliário,
          educacional e de empresas que trabalham no modelo de pagamento
          recorrente ou assinaturas. Neles, é possível gerenciar inadimplência,
          emitir notas fiscais, receber com boleto e cartão de crédito, criar
          uma régua de cobrança eficiente e integrar diversas soluções via API.
        </p>

        <p className="section-sub-p">
          Existem ainda recursos especializados para cada segmento
        </p>
        <div className="container col-md-8 width">
          <Carousel
            addArrowClickHandler
            arrowLeft={<i className="fas fa-chevron-left section-card-icon"></i>}
            arrowRight={<i className="fas fa-chevron-right section-card-icon"></i>}
            arrows
            infinite
            slidesPerPage={slide}
          >
            {data.map(renderCard)}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Section;
