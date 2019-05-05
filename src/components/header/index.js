import React from 'react';
import Searchbar from "../searchBar";
import Notification from '../notification';
import Perfil from '../perfil';
import { HeaderContainer, Logotipo } from "./styles";
import imageLogo from '../../assets/Logo_Nexaas.png';

const Header = () => (
  <HeaderContainer>
    <Logotipo>
      <img src={imageLogo} alt="Nexaas" />
    </Logotipo>
    <Searchbar />
    <Notification />
    <Perfil />
  </HeaderContainer>
);

export default Header;