import { NavLink as MenuLink, Link as A } from 'theme-ui';
import NextLink from 'next/link';

interface Props {
  path: string
  label: string
  children: any
  (...rest: any): any
}

export function NavLink ({ path, label, children, ...rest }: Props) {
  return (
    <h1>NavLink</h1>
  );
}

export function Link ({ path, label, children, ...rest }: Props) {
  return (
    <h1>Link</h1>
  );
}
