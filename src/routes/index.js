import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import history from './history';

import { MainContent } from './styles';

import Header from "../components/header";
import Sidebar from "../components/sideBar";

import Home from "../pages/home";
import Settings from '../pages/settings';
import Support from "../pages/support";
import SearchResult from "../pages/searchResult";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Header />
    <MainContent>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/settings" component={Settings} />
        <Route path="/support" component={Support} />
        <Route path="/search:keywords" component={SearchResult} />
      </Switch>
    </MainContent>
  </ConnectedRouter>
);

export default Routes;