import React from 'react';
import Layout from './containers/Layout/Layout';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Done from './pages/Done/Done';
import Failed from './pages/Failed/Failed';
import Stats from './pages/Stats/Stats';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route
          path="/"
          exact
          component={Home} />
        <Route
          path="/done"
          exact
          component={Done} />
        <Route
          path="/failed"
          exact
          component={Failed} />
        <Route
          path="/stats"
          exact
          component={Stats} />
      </Switch>
    </Layout>
  )
}

export default App

