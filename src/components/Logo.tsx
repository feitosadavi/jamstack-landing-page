
import { Image } from 'theme-ui';
import { Link } from 'components';

interface Props {
  src: any,
  [props: string]: any
}

export default function Logo ({ src, ...rest }: Props) {
  return (
    <Link
      label=''
      path='/'
      sx={{
        variant: 'links.logo',
        display: 'flex',
        cursor: 'pointer',
        mr: 15
      }}
      {...rest}
    >
      <Image src={src} alt='' />
      {/* <Image src={src} alt='jamstack landing page logo' /> */}
    </Link>
  );
}
