import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as customersActions from "../../redux/actions";

import { SearchbarContainer } from './styles';

class Searchbar extends Component {
  state = {
    isFocus: null
  };

  searchCustomer = (nameCustomer) => {
    this.props.searchCustomerInList(nameCustomer);
  }

  onFocus = () => {
    this.setState({ isFocus: true });
  };

  onBlur = () => {
    this.setState({ isFocus: false });
  };

  render() {
    const { isFocus } = this.state;
    return (
      <SearchbarContainer focus={isFocus}>
        <input
          type="text"
          placeholder="Busque por cliente"
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onChange={e => this.searchCustomer(e.target.value)}
        />
      </SearchbarContainer>
    );
  }
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(customersActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Searchbar);