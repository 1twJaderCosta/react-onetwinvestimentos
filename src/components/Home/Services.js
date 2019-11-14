import React from "react";

const ServicesComponent = () => (
  <section id="services">
    <div className="container">
      <header className="section-header wow fadeInUp">
        <h3>Serviços</h3>
        <p>
          Nossos serviços estão voltados no momento para o mercado futuro dos
          seguintes índices:
        </p>
      </header>

      <div className="row">
        <div
          className="col-lg-4 col-md-6 box wow bounceInUp"
          data-wow-duration="1.4s"
        >
          <div className="icon">
            <i className="ion-ios-analytics-outline"></i>
          </div>
          <h4 className="title">
            <a href="">Dólar</a>
          </h4>
          <p className="description">DOL</p>
        </div>
        <div
          className="col-lg-4 col-md-6 box wow bounceInUp"
          data-wow-duration="1.4s"
        >
          <div className="icon">
            <i className="ion-ios-bookmarks-outline"></i>
          </div>
          <h4 className="title">
            <a href="">Minidólar</a>
          </h4>
          <p className="description">WDO</p>
        </div>
        <div
          className="col-lg-4 col-md-6 box wow bounceInUp"
          data-wow-duration="1.4s"
        >
          <div className="icon">
            <i className="ion-ios-paper-outline"></i>
          </div>
          <h4 className="title">
            <a href="">índice Bovespa</a>
          </h4>
          <p className="description">IND</p>
        </div>
        <div
          className="col-lg-4 col-md-6 box wow bounceInUp"
          data-wow-delay="0.1s"
          data-wow-duration="1.4s"
        >
          <div className="icon">
            <i className="ion-ios-speedometer-outline"></i>
          </div>
          <h4 className="title">
            <a href="">Mini-índice/ Bovespa</a>
          </h4>
          <p className="description">WIN</p>
        </div>
        <div
          className="col-lg-4 col-md-6 box wow bounceInUp"
          data-wow-delay="0.1s"
          data-wow-duration="1.4s"
        >
          <div className="icon">
            <i className="ion-ios-barcode-outline"></i>
          </div>
          <h4 className="title">
            <a href="">Juros DI</a>
          </h4>
          <p className="description">DI1</p>
        </div>
        <div
          className="col-lg-4 col-md-6 box wow bounceInUp"
          data-wow-delay="0.1s"
          data-wow-duration="1.4s"
        >
          <div className="icon">
            <i className="ion-ios-people-outline"></i>
          </div>
          <h4 className="title">
            <a href="">Boi Gordo</a>
          </h4>
          <p className="description">BGI</p>
        </div>
        <div
          className="col-lg-4 col-md-6 box wow bounceInUp"
          data-wow-delay="0.1s"
          data-wow-duration="1.4s"
        >
          <div className="icon">
            <i className="ion-ios-people-outline"></i>
          </div>
          <h4 className="title">
            <a href="">Índice S&P 500</a>
          </h4>
          <p className="description">ISP</p>
        </div>
        <div
          className="col-lg-4 col-md-6 box wow bounceInUp"
          data-wow-delay="0.1s"
          data-wow-duration="1.4s"
        >
          <div className="icon">
            <i className="ion-ios-people-outline"></i>
          </div>
          <h4 className="title">
            <a href="">Café Arábica</a>
          </h4>
          <p className="description">ICF</p>
        </div>
      </div>
    </div>
  </section>
);

export default ServicesComponent;
