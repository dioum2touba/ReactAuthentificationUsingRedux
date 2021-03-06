import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';
import OwnerList from './Owner/OwnerList/OwnerList';
import asyncComponent from '../hoc/AsyncComponent';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../components/ErrorPages/NotFound/NotFound';

const AsyncOwnerList = asyncComponent(() => {
  return import('./Owner/OwnerList/OwnerList');
});


class App extends Component  {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/owner-list" component={AsyncOwnerList} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
