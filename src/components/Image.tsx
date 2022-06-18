import React from 'react';
import { Image as Img } from 'theme-ui';

interface Props {
  src: string
  (...rest: any): any
}

export default function Image ({ src, ...rest }: Props) {
  return <h1>Image</h1>
}
