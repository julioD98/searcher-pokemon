import React from "react";
import { Button } from "./../Button";
import { Link } from "react-router-dom";

import { WrapContent } from "./../WrapContent";

export const NotFound = ({ children }) => {
  return (
    <WrapContent>
      {children ? children : "error 404"}
      <Link to="/home">
        <Button>regresar</Button>
      </Link>
    </WrapContent>
  );
};
