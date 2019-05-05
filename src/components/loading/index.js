import React from 'react';
import loadingIcon from '../../assets/Spinner.png';
import { LoadingContainer } from "./styles";

const Loading = ({ textLoader }) => (
  <LoadingContainer>
    <img src={loadingIcon} alt="Carregando..." />
    <h1>{textLoader}...</h1>
  </LoadingContainer>
);

export default Loading;