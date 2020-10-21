import React from "react";

import { ContainerCard, Info } from "./stye";

const Card = ({ text, quantity }) => (
  <ContainerCard>
    <div>{text}</div>
    <Info>{quantity}</Info>
  </ContainerCard>
);

export default Card;
