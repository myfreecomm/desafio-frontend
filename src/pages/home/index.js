import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Loading from "../../components/loading";

import { PainelContainer, CardStatisicNumberContainer } from "./styles";
import { Title } from "../../components/titles/styles";
import { CardStatisicNumber, ClientCard } from "../../components/cards/styles";

import * as customersActions from '../../redux/actions'; 

class Home extends Component {
  componentDidMount() {
    this.props.requestCustomersList();
  }

  render() {
    const { customersList, loading } = this.props;

    return (
      <PainelContainer>
        {loading && <Loading textLoader="Carregando" />}
        <Title color={"#2074f8"}>Visão geral</Title>
        <CardStatisicNumberContainer>
          <CardStatisicNumber>
            <p>Total de Clientes</p>
            <strong>7</strong>
          </CardStatisicNumber>
          <CardStatisicNumber>
            <p>Clientes inadimpletes</p>
            <strong>4</strong>
          </CardStatisicNumber>
          <CardStatisicNumber>
            <p>Clientes adimpletes</p>
            <strong>3</strong>
          </CardStatisicNumber>
          <CardStatisicNumber>
            <p>Total arrecadado</p>
            <strong>R$ 2.856,93</strong>
          </CardStatisicNumber>
        </CardStatisicNumberContainer>
        <Title color={"#2074f8"}>Clientes cadastrados</Title>
        {!loading &&
          customersList.map((customer, index) => {
            return (
              <ClientCard key={index}>
                <img src={customer.profile_url} alt="Cliente Um" />
                <p>{customer.name}</p>
                <p>{customer.email}</p>
                <p>{customer.phone}</p>
                <p>{customer.status}</p>
              </ClientCard>
            );
          })}
      </PainelContainer>
    );
  }
}

const mapStateToProps = state => ({
  customersList: state.customersList.data,
  loading: state.customersList.loading,
  error: state.customersList.error
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(customersActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);