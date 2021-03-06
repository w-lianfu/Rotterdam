import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper } from '@material-ui/core';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IState {}

const AppTop = (props: IProps, state: IState) => {
  return (
    <Paper square>
      <p>Top</p>
    </Paper>
  );
};

export default withRouter(observer(AppTop));
