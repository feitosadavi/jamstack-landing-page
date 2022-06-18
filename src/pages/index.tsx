import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import { SEO, Layout } from 'components'

import {
  Banner,
  KeyFeature,
  ServiceSection,
  Feature,
  CoreFeature,
  WorkFlow,
  Package,
  TeamSection,
  TestimonialCard
} from 'sections';

export default function IndexPage () {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="NextJS Landing Page" />
        <Banner />
        <KeyFeature />
        <ServiceSection />
        <Feature />
        <CoreFeature />
        <WorkFlow />
        <Package />
        <TeamSection />
        <TestimonialCard />
      </Layout>
    </ThemeProvider>
  );
}
