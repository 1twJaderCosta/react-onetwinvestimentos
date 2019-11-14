import React from "react";

const GeneralFooter = () => (
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-info">
            <h3 style={{ fontSize: 22 }}>1TWInvestimentos</h3>
            <p>
              Nós usamos inteligência artificial e robos para ajudar a prever as
              têndencias do mercado, junto com estatísticas e probabilidades
              para te trazer mais segurança e claro alavancar seus lucros
            </p>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="ion-ios-arrow-right"></i> <a href="#">Home</a>
              </li>
              <li>
                <i className="ion-ios-arrow-right"></i>
                <a href="#about">Sobre Nós</a>
              </li>
              <li>
                <i className="ion-ios-arrow-right"></i>{" "}
                <a href="#services">Serviços</a>
              </li>
              <li>
                <i className="ion-ios-arrow-right"></i>{" "}
                <a href="#">Termos de serviços</a>
              </li>
              <li>
                <i className="ion-ios-arrow-right"></i>{" "}
                <a href="#">Politíca de privacidade</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-contact">
            <h4>Contato</h4>
            <p>
              Maximiliano Trevisan, 28<br></br>
              Morada do Sol, Americana<br></br>
              São Paulo<br></br>
              <strong>Telefone:</strong>+55 19 98969-3357<br></br>
              <strong>Email:</strong>contato@1twinvestimentos.com.br<br></br>
            </p>

            <div className="social-links">
              <a href="#" className="twitter">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="facebook">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="instagram">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="#" className="google-plus">
                <i className="fa fa-google-plus"></i>
              </a>
              <a href="#" className="linkedin">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 footer-newsletter">
            <h4>Últimas notícias</h4>
            <p>Inscreva-se com seu email para receber as últimas notícias</p>
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" value="Inscrever" />
            </form>
          </div>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong>1TWInvestimentos</strong>. Todos os direitos
        reservados
      </div>
      <div className="credits"></div>
    </div>
  </footer>
);

export default GeneralFooter;
