import React from "react";

const ContactComponent = () => (
  <section id="contact" className="section-bg wow fadeInUp">
    <div className="container">
      <div className="section-header">
        <h3>Contato</h3>
        <p>Entre em contato conosco, estamos aqui para te atender</p>
      </div>

      <div className="row contact-info">
        <div className="col-md-4">
          <div className="contact-address">
            <i className="ion-ios-location-outline"></i>
            <h3>Endereço</h3>
            <address>
              Rua maximiliano Trevisan, 28 - Morada do So, Americana-SP
            </address>
          </div>
        </div>

        <div className="col-md-4">
          <div className="contact-phone">
            <i className="ion-ios-telephone-outline"></i>
            <h3>Telefone</h3>
            <p>
              <a href="tel:+5519989693357">+55 19 98969-3357</a>
            </p>
          </div>
        </div>

        <div className="col-md-4">
          <div className="contact-email">
            <i className="ion-ios-email-outline"></i>
            <h3>Email</h3>
            <p>
              <a href="mailto:contato@1twinvestimentos.com.br">
                contato@1twinvestimentos.com.br
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="form">
        <div id="sendmessage">Sua menssagem foi enviada, obrigado!</div>
        <div id="errormessage"></div>
        <form action="" method="post" role="form" className="contactForm">
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                placeholder="Nome"
                data-rule="minlen:4"
                data-msg="Insira seu nome com no minímo 4 caracteres"
              />
              <div className="validation"></div>
            </div>
            <div className="form-group col-md-6">
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Email"
                data-rule="email"
                data-msg="Insira um email válido"
              />
              <div className="validation"></div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="subject"
              id="subject"
              placeholder="Assunto"
              data-rule="minlen:4"
              data-msg="Insira no minímo 8 caracteres"
            />
            <div className="validation"></div>
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="message"
              rows="5"
              data-rule="required"
              data-msg="Escreva o alguma coisas para nós"
              placeholder="Menssagem"
            ></textarea>
            <div className="validation"></div>
          </div>
          <div className="text-center">
            <button type="submit">Enviar menssagem</button>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default ContactComponent;
