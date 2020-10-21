import React, { Fragment, useContext, useCallback, useState } from "react";

/**Importando Componentes */
import Header from "../../Components/Header";
import SideBar from "../../Components/SideBar";
import Input from "../../Components/Input";
import GeralVison from "../../Pages/GeralVison";
import SearchVision from "../../Pages/SearchVision";
import Footer from "../../Components/Footer";

import { Container } from "./style";

/**importando contexto */
import { NexaasContext } from "../../Context";

const Home = () => {
  const { visible, dispatch } = useContext(NexaasContext);
  const [page, setPage] = useState(true);

  const handleSearchUser = useCallback((text) => {
    if (text.length > 0) {
      setPage(false);
    } else {
      setPage(true);
    }

    if (text.length >= 0) {
      dispatch({ type: "search", payload: text });
    }
  }, []);

  return (
    <Fragment>
      <Header />
      <Container>
        <SideBar visible={visible} />
        <div className="input">
          <Input onChange={(text) => handleSearchUser(text.target.value)} />
        </div>
        {page ? <GeralVison /> : <SearchVision />}
      </Container>
      <Footer />
    </Fragment>
  );
};

export default Home;
