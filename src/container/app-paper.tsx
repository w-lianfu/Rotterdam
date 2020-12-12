import React, { useEffect } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Fab, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { pink } from '@material-ui/core/colors';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import AppDial from '@con/app-dial';
import AppTop from '@con/app-top';
import AppHeader from '@con/app-header';
import ScrollTop from '@con/scroll-top';
import Home from '@comp/home';
import Setting from '@comp/setting';
import Page404 from '@con/page-404';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IState {}

const useStyles = makeStyles(theme => ({
  container: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    overflowX: 'hidden',
  },
  hyphenStyle: {
    height: '3px',
    width: '100%',
    lineHeight: 0,
    background: pink.A200,
  },
  paperStyle: {
    width: '100%',
    flex: 1,
  },
  upTopStyle: {
    position: 'fixed',
    bottom: theme.spacing(2),
    left: theme.spacing(2),
  },
}));

const AppPaper = (props: IProps, state: IState) => {
  const classes = useStyles();
  const { history } = props;
  const { location } = history;
  const { pathname } = location;

  useEffect(() => {
    // console.log('history: ', pathname);
  }, [pathname]);

  return (
    <Box className={classes.container}>
      <p id="back-to-top" className={classes.hyphenStyle} />
      <AppDial />

      <Paper square className={classes.paperStyle}>
        <section>
          <AppTop />
          <AppHeader />
        </section>

        <Switch>
          <Route exact path="/setting" component={Setting} />
          <Route component={pathname === '/' ? Home : Page404} />
        </Switch>

        <ScrollTop>
          <Fab
            size="small"
            color="primary"
            className={classes.upTopStyle}>
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      </Paper>
    </Box>
  );
};

export default withRouter(observer(AppPaper));
