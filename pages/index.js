import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

import { Container, Title } from '../src/pages/Home/styles';

const Home = () => (
  <Container>
    <Head>
      <title>Home</title>
    </Head>
    <img src="/static/logo.png" />
    <Link href="/repos">
      <Title>Meus repositórios no GitHub</Title>
    </Link>
    
  </Container>
)

export default withAnalytics()(Home);