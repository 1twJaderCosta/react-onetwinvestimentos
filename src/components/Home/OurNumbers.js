import React from "react";

const OurNumbersComponent = () => (
  <section id="facts" className="wow fadeIn">
    <div className="container">
      <header className="section-header">
        <h3>Nossos números</h3>
        <p>Esses são nossos números desde o início da Startup</p>
      </header>

      <div className="row counters">
        <div className="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">274</span>
          <p>Clientes</p>
        </div>

        <div className="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">421</span>
          <p>Dias úteis</p>
        </div>

        <div className="col-lg-3 col-6 text-center">
          <span data-toggle="counter-up">570</span>
          <p>Dias corridos</p>
        </div>

        <div className="col-lg-3 col-6 text-center">
          <div style={{ paddingLeft: "80px" }} className="row">
            <span data-toggle="counter-up">1364</span>
            <span>%</span>
          </div>

          <p>Rendimentos</p>
        </div>
      </div>

      <div className="facts-img">
        <img
          style={{ height: "400px" }}
          src="img/plans/graph.svg"
          alt=""
          className="img-fluid"
        />
      </div>
    </div>
  </section>
);

export default OurNumbersComponent;
