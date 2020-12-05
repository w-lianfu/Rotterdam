import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Paper, Button } from '@material-ui/core';

interface IProps extends RouteComponentProps {}
interface IState {}

const Home = (props: IProps, state: IState) => {
  return (
    <Paper square>
      <p>------ Welcome ------</p>
      *** <Button variant="contained" color="primary" >One</Button> ***<br />
      *** <Button variant="contained" color="secondary">Two</Button> ***<br />
      *** <Button variant="contained">Three</Button> ***<br />
      *** <Button variant="outlined" color="primary">Four</Button> ***<br />
      *** <Button variant="outlined" color="secondary">Five</Button> ***<br />
      *** <Button variant="outlined">Six</Button> ***<br />
      *** <Button color="primary">Seven</Button> ***<br />
      *** <Button color="secondary">Eight</Button> ***<br />
      *** <Button>Nine</Button> ***<br />
      <p>------ Welcome ------</p>
    </Paper>
  );
};

export default Home;
