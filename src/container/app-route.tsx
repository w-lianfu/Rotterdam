import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom';

import '@commonScss/index.scss';
import Home from '@comp/home';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IState {}

const AppRoute = (props: IProps, state: IState) => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
};

export default Home;
