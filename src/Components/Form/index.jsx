import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";

import { Input } from "./../Input";
import { Button } from "./../Button";

import { useHistory } from "react-router-dom";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = () => {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: ({ search }) => {
      history.push(`results/${search}`);
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <label>buscar</label>
      <Input
        id="search"
        name="search"
        value={formik.values.search}
        onChange={formik.handleChange}
      />
      <Button>Buscar</Button>
    </StyledForm>
  );
};
