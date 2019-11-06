import React from "react";

const CardsSliderComponent = () => (
  <section id="featured-services">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 box">
          <i className="ion-ios-bookmarks-outline"></i>
          <h4 className="title">
            <a href="">Como funciona?</a>
          </h4>
          <p className="description">
            Nós usamos inteligência artificial e robos para ajudar a prever as
            têndencias do mercado, junto com estatísticas e probabilidades para
            te trazer mais segurança e claro alavancar seus lucros
          </p>
        </div>

        <div className="col-lg-4 box box-bg">
          <i className="ion-ios-stopwatch-outline"></i>
          <h4 className="title">
            <a href="">Em quanto tempo tenho lucro?</a>
          </h4>
          <p className="description">
            Nosso foco é gerar estatísticas e prever o mercado junto com nossos
            robôs, nossas métricas são geradas diariamente.
          </p>
        </div>

        <div className="col-lg-4 box">
          <i className="ion-ios-heart-outline"></i>
          <h4 className="title">
            <a href="">É seguro?</a>
          </h4>
          <p className="description">
            Todo investimento tem seu risco, porém com nossas métricas com
            certeza você sai na frente do mercado
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CardsSliderComponent;
