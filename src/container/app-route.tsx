import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
} from 'react-router-dom';
import { observer } from 'mobx-react';

import '@commonScss/index.scss';
import auth from '@commonStore/auth';
import AppLock from './app-lock';
import Home from '@comp/home';
import Setting from '@comp/setting';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IState {}

const AppRoute = (props: IProps, state: IState) => {
  const { isAuth } = auth;

  useEffect(() => {
    // console.log('isAuth: ', isAuth);
  }, [isAuth]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={isAuth ? Home : AppLock} />
        <Route exact path="/setting" component={Setting} />
        <Route component={isAuth ? Home : AppLock} />
      </Switch>
    </Router>
  );
};

export default observer(AppRoute);
