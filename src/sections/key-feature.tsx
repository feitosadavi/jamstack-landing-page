
import { Container, Grid } from 'theme-ui';
import { SectionHeader, FeatureCardColumn, FeatureCard } from 'components';


const Performance = '../assets/key-feature/performance.svg';
const Partnership = '../assets/key-feature/partnership.svg';
const Subscription = '../assets/key-feature/subscription.svg';
const Support = '../assets/key-feature/support.svg';

type Data = {
  id: number
  imgSrc: string
  altText: string
  title: string
  text: string
}

const data: Data[] = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Pro Subscription',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Get your blood tests delivered at home collect a sample from the your blood tests.',
  },
];

export default function KeyFeature () {
  return (
    <section id='feature' sx={{ variant: 'section.keyFeature' }}>
      <Container>
        <SectionHeader
          slogan='Whats the function'
          title='Meet the future of our product'
        />
        <Grid sx={styles.grid}>
          {data.map(({ id, imgSrc, altText, title, text }) => (
            <FeatureCardColumn
              key={id}
              src={imgSrc}
              title={title}
              text={text}
              altText={altText}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
