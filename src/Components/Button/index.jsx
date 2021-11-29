import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #00a8ff;
  color: #ffffff;
  border: 0px;
  padding: 5px 20px;
  border-radius: 3px;
  width: ${({ size }) => (size ? size : "auto")};
  cursor: pointer;
  &:hover {
    background: #0097e6;
  }
`;

export const Button = ({ children, size }) => {
  return (
    <StyledButton size={size} type="submit">
      {children}
    </StyledButton>
  );
};
