import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #0097e6;
  color: #ffffff;
  border: 0px;
  padding: 8px 35px;
  border-radius: 3px;
  width: ${({ size }) => (size ? size : "auto")};
  cursor: pointer;
  margin-top: 10px;
  &:hover {
    background: #00a8ff;
  }
`;

export const Button = ({ children, size }) => {
  return (
    <StyledButton size={size} type="submit">
      {children}
    </StyledButton>
  );
};
