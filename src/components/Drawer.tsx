import React, { Fragment } from 'react';
import RcDrawer from 'rc-drawer';
import { Box } from 'theme-ui';

interface Props {
  className?: any,
  children: any,
  closeButton: any,
  closeButtonStyle: any,
  drawerHandler: any,
  toggleHandler: any,
  open: any,
  width: any,
  placement?: any,
  drawerStyle: any,
  closeBtnStyle?: any,
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
}: any) {
  return (
    <>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        className={`drawer ${className || ''}`.trim()}
        width={width}
        placement={placement}
        // lelve={null}
        duration={'0.4s'}
        {...props}
      >
        {closeButton && (
          <Box as='div' onClick={toggleHandler} sx={closeBtnStyle}>
            {closeButton}
          </Box>
        )}
        <Box sx={drawerStyle}>{children}</Box>
      </RcDrawer>
      <Box className='drawer__handler' style={{ display: 'inline-bloc' }} onClick={toggleHandler}>
        {drawerHandler}
      </Box>
    </>
  );
};

Drawer.defaultProps = {
  width: '320px',
  placement: 'left',
};

{/* <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {
                social.map((socialItem, i) => (
                  <Box as='span' key={i} sx={styles.social.icon}>
                    
                  </Box>
                ))
              }
            </Box>
          </Box>  */}