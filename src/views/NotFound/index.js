import React from "react";
import { Link } from "react-router-dom";

import ROUTES from "../../data/routes";

const NotFoundPage = () => (
  <div>
    <h3>Página não encontrada!</h3>
    <p>
      <Link to={ROUTES.HOME}>Voltar para home</Link>
    </p>
  </div>
);

export default NotFoundPage;
