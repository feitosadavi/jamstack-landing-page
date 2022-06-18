/** @jsxImportSource theme-ui */
import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

interface Props {
  title: string
  slogan: string
  isWhite?: boolean
}

export default function SectionHeader ({ title, slogan, isWhite }: Props) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Text
        as='p'
        sx={{
          variant: 'sectionHeader.subTitle',
          color: isWhite ? 'white' : 'primary',
          opacity: isWhite ? 0.1 : 0.7
        }}
      >
        {slogan}
      </Text>
      <Heading
        as='h2'
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'white' : 'heading'
        }}>
        {title}
      </Heading>
    </Box>
  );
}
