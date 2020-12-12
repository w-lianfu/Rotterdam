import React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper } from '@material-ui/core';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IState {}

const AppHeader = (props: IProps, state: IState) => {
  return (
    <Paper square>
      <p>
        <span>Header |</span>
        <Link to="/">| Home |</Link>
        <Link to="/setting">| Setting |</Link>
        <Link to="/99">| 99 |</Link>
      </p>
    </Paper>
  );
};

export default withRouter(observer(AppHeader));
