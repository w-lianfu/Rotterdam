import React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@material-ui/core';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IState {}

const Home = (props: IProps, state: IState) => {
  return (
    <Paper square>
      <p>Home Page</p>
      <Link to="/setting">
        <Button variant="contained" color="secondary">Setting Page</Button>
      </Link>
    </Paper>
  );
};

export default withRouter(observer(Home));
