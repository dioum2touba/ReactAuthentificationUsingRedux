import React from 'react';
import './App.css';
import Home from '../components/Home/Home';
import Layout from '../components/Layout/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NotFound from '../components/ErrorPages/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
