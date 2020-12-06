import React, { FC } from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@material-ui/core';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IState {}

const Setting: FC = (props: IProps, state: IState) => {
  return (
    <Paper square>
      <h2>Setting Page</h2>
      <Link to="/">
        <Button variant="contained" color="primary">Go Home</Button>
      </Link>
    </Paper>
  );
};

export default withRouter(observer(Setting));
