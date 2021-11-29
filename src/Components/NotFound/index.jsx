import React from "react";
import { Button } from "./../Button";
import { Link } from "react-router-dom";

import { WrapContent } from "./../WrapContent";

export const NotFound = ({ children }) => {
  return (
    <WrapContent>
      {children ? children : "Aqui no hay nada, te perdiste?"}
      <Link to="/home">
        <Button>Regresar</Button>
      </Link>
    </WrapContent>
  );
};
