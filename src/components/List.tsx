import React from 'react';
import { Flex, Box, IconButton } from 'theme-ui';

interface Props {
  items?: any[]
  parentStyle?: any
  childStyle: any
}

export default function List ({ items = [], parentStyle, childStyle }: Props) {
  return (
    <Box
      as='ul'
      sx={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
        ...parentStyle
      }}
    >
      {items.map(({ id, isAvailable, icon, text }) => (
        <Flex
          key={id}
          className={isAvailable ? 'open' : 'closed'}
          as='li'
          sx={{ ...childStyle }}
        >
          <IconButton sx={styles.listIcon} aria-label='list icon'>
            {icon}
          </IconButton>
          {text}
        </Flex>
      ))}
    </Box>
  );
}

const styles: any = {
  listIcon: {
    width: ['25px', '35px'],
    height: 'auto',
    color: 'primary',
    padding: 0,
    fontSize: [3, 5],
    ml: '-1px',
    flexShrink: 0,
    justifyContent: 'flex-start',
    mt: '2px',
  },
};
