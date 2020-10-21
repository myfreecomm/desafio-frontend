import React from "react";

import Shape from "../../assets/Shape.png";

import { Container, ContainerInput, Icon } from "./style";

const Input = ({ type, onChange }) => (
  <Container>
    <Icon src={Shape} />
    <ContainerInput type="text" onChange={onChange} />
  </Container>
);

export default Input;
