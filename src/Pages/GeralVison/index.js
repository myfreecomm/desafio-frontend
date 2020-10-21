import React, { useContext, useMemo } from "react";

import { Container, InfoPage, ContainerCard } from "./style";

import { NexaasContext } from "../../Context";

import Card from "../../Components/Card";
import List from "../../Components/List";

const GeralVison = () => {
  const { state } = useContext(NexaasContext);

  const TotalClients = useMemo(() => {
    return state.users.length;
  });

  const TotalOverdue = useMemo(() => {
    const overdue = state.users.filter((user) => user.status === "overdue");
    return overdue.length;
  });

  const TotalPaying = useMemo(() => {
    return TotalClients - TotalOverdue;
  });

  const Totalamount = useMemo(() => {
    return state.users.reduce(
      (prev, next) => prev + next.subscription_amount,
      0
    );
  });

  return (
    <Container>
      <InfoPage>Visão Geral</InfoPage>
      <ContainerCard>
        <Card text="Total de Clientes" quantity={TotalClients} />
        <Card text="Clientes inadimplentes" quantity={TotalOverdue} />
        <Card text="Clientes adimplentes" quantity={TotalPaying} />
        <Card
          text="Total arrecadado"
          quantity={"R$ " + Totalamount.toLocaleString()}
        />
      </ContainerCard>

      <InfoPage>Clientes Cadastrados</InfoPage>
      {state.users.map((item) => (
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

export default GeralVison;
