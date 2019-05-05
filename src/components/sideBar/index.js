import React from 'react';
import { Link } from "react-router-dom";
import iconPainel from "../../assets/icon_1.png";
import iconSettings from "../../assets/icon_2.png";
import iconSupport from '../../assets/icon_3.png';

import { 
  SideBarContainer,
  ItemSidebar,
  Icon,
  SupportButton
 } from './styles';

const SideBar = ({ match }) => {
  return (
    <SideBarContainer>
      <div>
        <ItemSidebar isActive={true}>
          <Link to="/">
            <Icon image={iconPainel} />
            Painel de Controle
          </Link>
        </ItemSidebar>
        <ItemSidebar isActive={false}>
          <Link to="/settings">
            <Icon image={iconSettings} />
            Configurações
          </Link>
        </ItemSidebar>
      </div>
      <SupportButton>
        <Link to="/support">
          <Icon image={iconSupport} />
          Suporte
        </Link>
      </SupportButton>
    </SideBarContainer>
  );
};

export default SideBar;