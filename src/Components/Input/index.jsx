import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 5px;
  border-radius: 3px;
  border: 1px solid black;
  width: 300px;
`;

export const Input = ({ onChange, name, id }) => {
  return <StyledInput onChange={onChange} name={name} id={id} />;
};
