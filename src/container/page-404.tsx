import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper } from '@material-ui/core';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IState {}

const Page404 = (props: IProps, state: IState) => {
  return (
    <Paper square>
      <p>Oops! ~~ Page Not Found ~~~</p>
    </Paper>
  );
};

export default withRouter(observer(Page404));
