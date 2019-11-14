import React from "react";

const MenuComponent = () => (
  <header id="header">
    <div className="container-fluid">
      <div id="logo" className="pull-left">
        <h1>
          <a href="#intro" className="scrollto">
            1T<span style={{ color: "#18d26e" }}>WIn</span>vestimentos
          </a>
        </h1>
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li className="menu-active">
            <a href="#intro">Home</a>
          </li>
          <li>
            <a href="#about">Sobre nós</a>
          </li>
          <li>
            <a href="#services">Serviços</a>
          </li>
          <li>
            <a href="#portfolio">Planos</a>
          </li>
          <li>
            <a href="#team">Time</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          {/* <li className="menu-has-children">
            <a href="">Drop Down</a>
            <ul>
              <li>
                <a href="#">Drop Down 1</a>
              </li>
              <li>
                <a href="#">Drop Down 3</a>
              </li>
              <li>
                <a href="#">Drop Down 4</a>
              </li>
              <li>
                <a href="#">Drop Down 5</a>
              </li>
            </ul>
          </li> */}
        </ul>
      </nav>
    </div>
  </header>
);

export default MenuComponent;
