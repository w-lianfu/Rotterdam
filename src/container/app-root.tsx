import React, { ReactNode } from 'react';

interface IProps {
  children: ReactNode,
}
interface IState {}

const AppRoot = (props: IProps, state: IState) => (
  <>{children}</>
);

export default AppRoot;
