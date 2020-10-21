import React from "react";

/**importando icones */
import Painel from "../../../assets/icon1.png";
import Config from "../../../assets/icon2.png";

/**importando estilos */
import { Container, ContainerOptions, Icon, Text, Selected } from "./style";

const SideBarItem = () => {
  return (
    <Container>
      <ContainerOptions>
        <Selected select={true} />
        <Icon src={Painel} /> <Text>Painel</Text>
      </ContainerOptions>
      <ContainerOptions style={{ background: "white" }}>
        <Selected select={false} />
        <Icon src={Config} /> <Text>Configurações</Text>
      </ContainerOptions>
    </Container>
  );
};

export default SideBarItem;
