import React, { ReactNode, useEffect } from 'react';
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Paper, Zoom, Fab, useScrollTrigger, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { pink, blue, purple } from '@material-ui/core/colors';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

import AppDial from '@con/app-dial';
import AppTop from '@con/app-top';
import AppHeader from '@con/app-header';
import Setting from '@comp/setting';
import AppWelcome from '@con/app-welcome';
import Page404 from '@con/page-404';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IScrollProps {
  children?: ReactNode,
  window?: any,
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

const ScrollTop = (props: IScrollProps) => {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const onTop = (event: any) => {
    // console.log('--- ', document.querySelector('#back-to-top'));
    const anchor = document.querySelector('#back-to-top');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={onTop} role="presentation">
        {children}
      </div>
    </Zoom>
  );
};

const Home = (props: IProps, state: IState) => {
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
          <Route component={pathname === '/' ? AppWelcome : Page404} />
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

export default withRouter(observer(Home));
