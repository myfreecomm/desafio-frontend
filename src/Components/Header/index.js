import React, { useContext, useState, useEffect } from "react";

/**importando componentes */
import Input from "../Input";

/**importando icones */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

/**importando Logo Nexass */
import Logo from "../../assets/LogoNexaas.png";
import Notification from "../../assets/Notification.png";
import Arrow from "../../assets/Arrow.png";
import Avatar from "../../assets/avatar-admin.png";

/**importando contexto */
import { NexaasContext } from "../../Context";

/**importando estilos */
import {
  Container,
  Logotipo,
  Hamburguer,
  ShowInput,
  Notifications,
  Arrows,
  Avatars,
} from "./style";

const Header = () => {
  const { visible, setVisible } = useContext(NexaasContext);
  const [icon, setIcon] = useState(faBars);

  useEffect(() => {
    visible ? setIcon(faTimes) : setIcon(faBars);
  }, [visible]);

  const handleVisibleSideBar = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <Logotipo src={Logo} />
      <Hamburguer>
        <FontAwesomeIcon icon={icon} onClick={() => handleVisibleSideBar()} />
      </Hamburguer>
      <ShowInput>
        <Input />
        <Notifications src={Notification} />
        <Avatars src={Avatar} />
        <Arrows src={Arrow} />
      </ShowInput>
    </Container>
  );
};

export default Header;
