import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

interface Props {
  title: string
  slogan: string
  isWhite: boolean
}

export default function SectionHeader ({ title, slogan, isWhite }: Props) {
  return (
    <h1>SectionHeader</h1>
  );
}
