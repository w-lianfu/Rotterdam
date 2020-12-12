import React, { ReactNode } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Zoom, useScrollTrigger, Box } from '@material-ui/core';

interface IProps extends RouteComponentProps {
  history: any,
  children?: ReactNode,
  window?: any,
}
interface IState {}

const ScrollTop = (props: IProps, state: IState) => {
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
      <Box onClick={onTop} role="presentation">
        {children}
      </Box>
    </Zoom>
  );
};

export default withRouter(observer(ScrollTop));
