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
import AppPaper from './app-paper';

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
        <Route path="/" component={isAuth ? AppPaper : AppLock} />
      </Switch>
    </Router>
  );
};

export default observer(AppRoute);
