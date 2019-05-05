import React from 'react';
import { PerfilContainer } from './styles';
import avatarIcon from "../../assets/avatar-admin.png";

const Perfil = () => (
  <PerfilContainer>
    <img src={avatarIcon} alt="Foto do Administrador"/>
    <i></i>
  </PerfilContainer>
)

export default Perfil;