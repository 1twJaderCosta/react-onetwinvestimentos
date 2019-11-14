import React from "react";
import MenuComponent from "../../components/Menu";
import SliderComponent from "../../components/Home/Slider";
import CardsSliderComponent from "../../components/Home/CardsSliderComponent";
import SkillsComponent from "../../components/Home/Skills";
import TestimonialsComponent from "../../components/Home/Testimonials";
import AboutComponent from "../../components/Home/About";
import PlansComponent from "../../components/Home/Plans";
import ServicesComponent from "../../components/Home/Services";
import TeamComponent from "../../components/Home/Team";
import GeneralFooter from "../../components/Footer/GeneralFooter";
import ContactComponent from "../../components/Home/Contact";
import OurNumbersComponent from "../../components/Home/OurNumbers";

const HomePage = () => (
  <div>
    <MenuComponent />
    <SliderComponent />
    <CardsSliderComponent />

    <main id="main">
      <AboutComponent />
      <ServicesComponent />
      <section id="call-to-action" className="wow fadeIn">
        <div className="container text-center">
          <h3>Analisamos por você</h3>
          <p>
            {" "}
            Nossos algoritmos de inteligência artificial preve e gera as
            estatísticas para você se preocupar apenas com o quanto investir.
          </p>
          <a className="cta-btn" href="#portfolio">
            Conheças nossos planos
          </a>
        </div>
      </section>

      <SkillsComponent />

      <OurNumbersComponent />

      <PlansComponent />

      {/* <TestimonialsComponent /> */}

      <TeamComponent />

      <ContactComponent />
    </main>

    <GeneralFooter />

    <a href="#" className="back-to-top">
      <i className="fa fa-chevron-up"></i>
    </a>
  </div>
);

export default HomePage;
