import React from "react";

const TeamComponent = () => (
  <section id="team">
    <div className="container">
      <div className="section-header wow fadeInUp">
        <h3>Time</h3>
        <p>
          Nossa equipe trabalhar para te proporcionar os melhores resultados no
          mercado, conheça nosso CEO.
        </p>
      </div>

      <div className="row">
        <div
          className="col-lg-4 col-md-6 wow fadeInUp"
          style={{ marginLeft: "50px" }}
        />
        <div className="col-lg-3 col-md-6 wow fadeInUp">
          <div className="member" style={{ backgroundColor: "white" }}>
            <img src="img/plans/jader.png" className="img-fluid" alt="" />
            <div className="member-info">
              <div className="member-info-content">
                <h4>Jader Costa</h4>
                <span>Chief Executive Officer</span>
                <div className="social">
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="member">
            <img src="img/team-2.jpg" className="img-fluid" alt="" />
            <div className="member-info">
              <div className="member-info-content">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <div className="social">
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </section>
);

export default TeamComponent;
