import React from "react";
import styled from "styled-components";

const StyledWrap = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const WrapContent = ({ children }) => {
  return <StyledWrap>{children}</StyledWrap>;
};
