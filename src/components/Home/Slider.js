import React from "react";
import { Link } from "react-router-dom";

import ROUTES from "../../data/routes";

const SliderComponent = () => (
  <section id="intro">
    <div className="intro-container">
      <div
        id="introCarousel"
        className="carousel  slide carousel-fade"
        data-ride="carousel"
      >
        <ol className="carousel-indicators"></ol>

        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <div className="carousel-background">
              <img src="img/intro-carousel/5.jpg" alt="" />
            </div>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2>Análise com inteligência artificial</h2>
                <p>
                  A 1TWInvestimentos usa inteligência artificial junto com
                  algoritmos automatizados na plataforma Smart para análise de
                  mercados na bolsa de valores brasileira BOVESPA, uma tendência
                  que cresce no mundo todo. E não precisa ser especialista em
                  economia e nem em tecnologia.
                </p>
                <a href="/register" className="btn-get-started scrollto">
                  Começar agora
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-background">
              <img src="img/intro-carousel/2.jpg" alt="" />
            </div>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2>Quem é a 1TWInvestimentos</h2>
                <p>
                  1TWInvestimentos é uma empresa voltada em inteligência
                  artificial e ferramentas estatísticas para automatização de
                  suas operações na Bolsa de Valores. Você poderá contar com a
                  melhor estratégia disponível no mercado e inúmeras ferramentas
                  estatísticas com informações relevantes e essenciais para sua
                  tomada de decisão. Eleve seu patamar no trade, converse
                  conosco e entre para o time de vencedores, venha operar com as
                  ferramentas da 1TWInvestimentos.
                </p>
                <a href="/registe" className="btn-get-started scrollto">
                  Começar agora
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-background">
              <img src="img/intro-carousel/3.jpg" alt="" />
            </div>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2>Como funciona a 1TWInvestimentos</h2>
                <p>
                  A 1TWInvestimentos é uma plataforma para traders operarem na
                  bolsa de valores de forma automatizada. O investidor configura
                  sua estratégia em nossos robôs (algoritmo online), que enviam
                  as ordens diretamente para as principais corretoras do país.
                </p>
                <a href="/registe" className="btn-get-started scrollto">
                  Começar agora
                </a>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-background">
              <img src="img/intro-carousel/4.jpg" alt="" />
            </div>
            <div className="carousel-container">
              <div className="carousel-content">
                <h2>Conheça nosso curso e comece a ganhar dinheiro</h2>
                <p>
                  Para você que deseja ingressar no mercado de ações, mercado
                  futuro entre outros, nós preparamos cursos do básico ao
                  avançado para você alavancar de vez!
                </p>
                <a href="/registe" className="btn-get-started scrollto">
                  Conhecer
                </a>
              </div>
            </div>
          </div>
        </div>

        <a
          className="carousel-control-prev"
          href="#introCarousel"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon ion-chevron-left"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Anterior</span>
        </a>

        <a
          className="carousel-control-next"
          href="#introCarousel"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon ion-chevron-right"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Próximo</span>
        </a>
      </div>
    </div>
  </section>
);

export default SliderComponent;
