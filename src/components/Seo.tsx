import React from 'react';
import Head from 'next/head';

interface Props {
  description?: string
  author?: string
  meta?: any,
  title?: string
}

export default function SEO ({
  description = 'a simple model landing page using nextjs',
  author = 'Davi Feitosa',
  meta,
  title = 'NextJS landing page',
}: Props) {
  const metaData = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: title,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: author,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
  ].concat(meta);

  return (
    <Head>
      <title>{title}</title>
      <link type="image/png" sizes="32x32" rel="icon" href=".../icons8-internet-32.png" />
      <link type="image/png" sizes="96x96" rel="icon" href=".../icons8-internet-96.png" />
      {metaData.map(({ name, content }, i) => (
        <meta key={i} name={name} content={content} />
      ))}
    </Head>
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
};
