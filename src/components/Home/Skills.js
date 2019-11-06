import React from "react";

const SkillsComponent = () => (
  <section id="skills">
    <div className="container">
      <header className="section-header">
        <h3>Nossas previsões</h3>
        <p>Valor em porcentagem referente ao índicês e períodos</p>
      </header>

      <p>Novembro/2019</p>

      <div className="skills-content">
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="76"
            aria-valuemin="0"
            aria-valuemax="122"
          >
            <span className="skill">
              Dolar/R$ <i className="val">122%</i>
            </span>
          </div>
        </div>

        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            aria-valuenow="92"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span className="skill">
              Mini índice Bovespa <i className="val">90%</i>
            </span>
          </div>
        </div>

        <div className="progress">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            aria-valuenow="88"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <span className="skill">
              índice S&P 500 <i className="val">75%</i>
            </span>
          </div>
        </div>
      </div>

      <p style={{ marginTop: "30px" }}>Janeiro-Novembro/2019</p>

      <div className="skills-content">
        <div className="progress">
          <div
            className="progress-bar bg-success"
            role="progressbar"
            aria-valuenow="192"
            aria-valuemin="0"
            aria-valuemax="192"
          >
            <span className="skill">
              Dolar/R$ <i className="val">192%</i>
            </span>
          </div>
        </div>

        <div className="progress">
          <div
            className="progress-bar bg-info"
            role="progressbar"
            aria-valuenow="230"
            aria-valuemin="0"
            aria-valuemax="230"
          >
            <span className="skill">
              Mini índice Bovespa <i className="val">230%</i>
            </span>
          </div>
        </div>

        <div className="progress">
          <div
            className="progress-bar bg-warning"
            role="progressbar"
            aria-valuenow="245"
            aria-valuemin="0"
            aria-valuemax="245"
          >
            <span className="skill">
              índice S&P 500 <i className="val">245%</i>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SkillsComponent;
