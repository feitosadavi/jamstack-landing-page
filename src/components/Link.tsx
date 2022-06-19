import { NavLink as MenuLink, Link as A, LinkProps } from 'theme-ui';
import ForwardRef from '@theme-ui/components/dist/declarations/src/Link';
import NextLink from 'next/link';

interface Props extends LinkProps {
  path: string
  label?: string
  children?: any
  [props: string]: any
}

export function NavLink ({ path, label, children, ...rest }: Props) {
  return (
    <h1>NavLink</h1>
  );
}

export function Link ({ path, label, children, ...rest }: Props) {
  return (
    <A {...rest as any} href={path}>
      {children || label}
    </A>
  );
}
