
import { Image } from 'theme-ui';
import { Link } from 'components';

interface Props {
  src: string
  (...rest: any): any
}

export default function Logo ({ src, ...rest }: Props) {
  return (
    <h1>Logo</h1>
  );
}
