import React, { useContext } from "react";

import { Container, InfoPage } from "./style";

import { NexaasContext } from "../../Context";

import List from "../../Components/List";

const SearchVision = () => {
  const { state } = useContext(NexaasContext);

  return (
    <Container>
      <InfoPage>Foram encontrados {state.filter.length} resultado</InfoPage>

      {state.filter.map((item) => (
        <List
          key={item.name}
          name={item.name}
          email={item.email}
          phone={item.phone}
          profile_url={item.profile_url}
          status={item.status}
        />
      ))}
    </Container>
  );
};

export default SearchVision;
