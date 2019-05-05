import React from 'react';
import { connect } from "react-redux";
import { SearchResultContainer } from './styles';

import Loading from "../../components/loading";

import { ClientCard } from '../../components/cards/styles';

const SearchResult = ({ match, customerFinded, loading, error }) => {
  return (
    <SearchResultContainer>
      {loading && <Loading textLoader="Buscando" />}
      <h1>Foram encontrados {customerFinded.length} resultado</h1>
      { !loading && customerFinded.map((customer, index) => {
        return (
          <ClientCard key={index}>
            <img src={customer.profile_url} alt="Cliente Um" />
            <p>{customer.name}</p>
            <p>{customer.email}</p>
            <p>{customer.phone}</p>
            <p>{customer.status}</p>
          </ClientCard>
        );
      }) }
    </SearchResultContainer>
  );
};

const mapStateToProps = state => {
  return {
    customerFinded: state.searchCustomerInList.searchResult,
    loading: state.searchCustomerInList.searchLoading,
    error: state.searchCustomerInList.searchError
  };
};

export default connect(
  mapStateToProps,
  null
)(SearchResult);
