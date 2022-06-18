import React, { Fragment } from 'react';
import RcDrawer from 'rc-drawer';

interface Props {
  className: any,
  children: any,
  closeButton: any,
  closeButtonStyle: any,
  drawerHandler: any,
  toggleHandler: any,
  open: any,
  width: any,
  placement: any,
  drawerStyle: any,
  closeBtnStyle: any,
  (...props: any): any
}

export default function Drawer ({
  className,
  children,
  closeButton,
  closeButtonStyle,
  drawerHandler,
  toggleHandler,
  open,
  width,
  placement,
  drawerStyle,
  closeBtnStyle,
  ...props
}: Props) {
  return (
    <h1>Drawer</h1>
  );
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};