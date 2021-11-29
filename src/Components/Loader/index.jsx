import React from "react";
import Styled, { keyframes } from "styled-components";

const rotate = keyframes`
  0%{
    transform:rotate(0deg);  
  }
  100%{
    transform:rotate(360deg);
  }
`;

const StyledLoader = Styled.div`
  padding: 25px;
  border: 10px solid #dcdde1;
  border-top: 10px solid #718093;
  border-radius: 100%;
  animation: .5s ${rotate} infinite linear;
`;

export const Loader = () => {
  return <StyledLoader />;
};
