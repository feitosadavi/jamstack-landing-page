import 'react-multi-carousel/lib/styles.css';
import 'react-modal-video/css/modal-video.min.css';
import 'rc-drawer/assets/index.css';
import 'typeface-dm-sans';

interface Props {
  Component: any
  pageProps: any
}

export default function CustomApp ({ Component, pageProps }: Props) {
  return <Component {...pageProps} />;
}
