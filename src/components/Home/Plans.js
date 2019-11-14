import React from "react";

const PlansComponent = () => (
  <section id="portfolio" className="section-bg">
    <div className="container">
      <header className="section-header">
        <h3 className="section-title">Nossos Planos</h3>
      </header>

      <div className="row">
        <div className="col-lg-12">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">
              Todos
            </li>
            <li data-filter=".dolar">Dolar</li>
            <li data-filter=".indice">Índice</li>
            <li data-filter=".commodities">Commodities</li>
            <li data-filter=".full">Completo</li>
          </ul>
        </div>
      </div>

      <div className="row portfolio-container">
        <div className="col-lg-4 col-md-6 portfolio-item dolar filter-app wow fadeInUp">
          <div className="portfolio-wrap">
            <figure style={{ height: "170px" }}>
              <img src="img/plans/dolar.png" className="img-fluid" alt="" />
              <a
                href="img/portfolio/app1.jpg"
                data-lightbox="portfolio"
                data-title="App 1"
                className="link-preview"
                title="Preview"
              >
                <i className="ion ion-eye"></i>
              </a>
              <a href="#" className="link-details" title="More Details">
                <i className="ion ion-android-open"></i>
              </a>
            </figure>

            <div style={{ height: "135px" }} className="portfolio-info">
              <h4>
                <a href="#">DOLAR OP 1</a>
              </h4>
              <p>Dólar + MiniDólar</p>
              <p>R$ 135,90</p>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6 portfolio-item indice filter-web wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="portfolio-wrap">
            <figure style={{ height: "170px" }}>
              <img src="img/plans/2.jpg" className="img-fluid" alt="" />
              <a
                href="img/portfolio/web3.jpg"
                className="link-preview"
                data-lightbox="portfolio"
                data-title="Web 3"
                title="Preview"
              >
                <i className="ion ion-eye"></i>
              </a>
              <a href="#" className="link-details" title="More Details">
                <i className="ion ion-android-open"></i>
              </a>
            </figure>

            <div style={{ height: "135px" }} className="portfolio-info">
              <h4>
                <a href="#">Índice OP 1</a>
              </h4>
              <p>Índice Bovespa + Mini-índice</p>
              <p>R$ 135,90</p>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6 portfolio-item indice filter-app wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="portfolio-wrap">
            <figure style={{ height: "170px" }}>
              <img src="img/plans/3.jpeg" className="img-fluid" alt="" />
              <a
                href="img/portfolio/app2.jpg"
                className="link-preview"
                data-lightbox="portfolio"
                data-title="App 2"
                title="Preview"
              >
                <i className="ion ion-eye"></i>
              </a>
              <a href="#" className="link-details" title="More Details">
                <i className="ion ion-android-open"></i>
              </a>
            </figure>

            <div style={{ height: "135px" }} className="portfolio-info">
              <h4>
                <a href="#">Índice OP 2</a>
              </h4>
              <p>Índice Bovespa + Mini-índice + Índice S&P 500</p>
              <p>R$ 245,90</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 dolar indice portfolio-item filter-card wow fadeInUp">
          <div className="portfolio-wrap">
            <figure style={{ height: "170px" }}>
              <img src="img/plans/4.jpeg" className="img-fluid" alt="" />
              <a
                href="img/portfolio/card2.jpg"
                className="link-preview"
                data-lightbox="portfolio"
                data-title="Card 2"
                title="Preview"
              >
                <i className="ion ion-eye"></i>
              </a>
              <a href="#" className="link-details" title="More Details">
                <i className="ion ion-android-open"></i>
              </a>
            </figure>

            <div style={{ height: "135px" }} className="portfolio-info">
              <h4>
                <a href="#">Dolar-Índice OP 1</a>
              </h4>
              <p>Dólar + MiniDólar + Índice Bovespa + Mini-índice</p>
              <p>R$ 299,90</p>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6 portfolio-item dolar indice filter-web wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="portfolio-wrap">
            <figure style={{ height: "170px" }}>
              <img src="img/plans/5.jpg" className="img-fluid" alt="" />
              <a
                href="img/portfolio/web2.jpg"
                className="link-preview"
                data-lightbox="portfolio"
                data-title="Web 2"
                title="Preview"
              >
                <i className="ion ion-eye"></i>
              </a>
              <a href="#" className="link-details" title="More Details">
                <i className="ion ion-android-open"></i>
              </a>
            </figure>

            <div style={{ height: "135px" }} className="portfolio-info">
              <h4>
                <a href="#">Dolar-Índice OP 2</a>
              </h4>
              <p>
                Dólar + MiniDólar + Índice Bovespa + Mini-índice + Índice S&P
                500
              </p>
              <p>R$ 330,90</p>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6 portfolio-item commodities wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="portfolio-wrap">
            <figure style={{ height: "170px" }}>
              <img src="img/plans/6.jpg" className="img-fluid" alt="" />
              <a
                href="img/portfolio/app3.jpg"
                className="link-preview"
                data-lightbox="portfolio"
                data-title="App 3"
                title="Preview"
              >
                <i className="ion ion-eye"></i>
              </a>
              <a href="#" className="link-details" title="More Details">
                <i className="ion ion-android-open"></i>
              </a>
            </figure>

            <div style={{ height: "135px" }} className="portfolio-info">
              <h4>
                <a href="#">Commodities OP 1</a>
              </h4>
              <p>Café Arábica + Boi Gordo</p>
              <p>R$ 199,90</p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 portfolio-item commodities dolar indice full wow fadeInUp">
          <div className="portfolio-wrap">
            <figure style={{ height: "170px" }}>
              <img src="img/plans/6.jpg" className="img-fluid" alt="" />
              <a
                href="img/portfolio/card1.jpg"
                className="link-preview"
                data-lightbox="portfolio"
                data-title="Card 1"
                title="Preview"
              >
                <i className="ion ion-eye"></i>
              </a>
              <a href="#" className="link-details" title="More Details">
                <i className="ion ion-android-open"></i>
              </a>
            </figure>

            <div style={{ height: "135px" }} className="portfolio-info">
              <h4>
                <a href="#">Master</a>
              </h4>
              <p>Dólar + Índices + commodities + Juros DI - COMPLETO</p>
              <p>R$ 499,90</p>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6 portfolio-item commodities dolar wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="portfolio-wrap">
            <figure style={{ height: "170px" }}>
              <img src="img/plans/7.jpeg" className="img-fluid" alt="" />
              <a
                href="img/portfolio/card3.jpg"
                className="link-preview"
                data-lightbox="portfolio"
                data-title="Card 3"
                title="Preview"
              >
                <i className="ion ion-eye"></i>
              </a>
              <a href="#" className="link-details" title="More Details">
                <i className="ion ion-android-open"></i>
              </a>
            </figure>

            <div style={{ height: "135px" }} className="portfolio-info">
              <h4>
                <a href="#">Commodities + Dolar OP 2</a>
              </h4>
              <p>Dólar + MiniDólar + Café Arábica + Boi Gordo</p>
              <p>R$ 267,90</p>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 col-md-6 portfolio-item commodities indice wow fadeInUp"
          data-wow-delay="0.2s"
        >
          <div className="portfolio-wrap">
            <figure style={{ height: "170px" }}>
              <img src="img/plans/8.jpg" className="img-fluid" alt="" />
              <a
                href="img/portfolio/web1.jpg"
                className="link-preview"
                data-lightbox="portfolio"
                data-title="Web 1"
                title="Preview"
              >
                <i className="ion ion-eye"></i>
              </a>
              <a href="#" className="link-details" title="More Details">
                <i className="ion ion-android-open"></i>
              </a>
            </figure>

            <div style={{ height: "135px" }} className="portfolio-info">
              <h4>
                <a href="#">Commodities + Índices OP 3</a>
              </h4>
              <p>
                Café Arábica + Boi Gordo + Índice Bovespa + Mini-índice + Índice
                S&P 500
              </p>
              <p>R$ 359,90</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PlansComponent;
