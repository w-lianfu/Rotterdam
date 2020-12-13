import React from 'react';
import { withRouter, RouteComponentProps, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Button } from '@material-ui/core';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IState {}

const Page404 = (props: IProps, state: IState) => {
  return (
    <Paper square>
      <p>Oops! ~~ Page Not Found ~~~</p>
      <Link to="/">
        <Button variant="contained" color="primary">Home Page</Button>
      </Link>
    </Paper>
  );
};

export default withRouter(observer(Page404));
