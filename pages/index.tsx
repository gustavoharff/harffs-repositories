import React from 'react';
import { NextPage } from 'next'

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

import { Container, Content, Title, Button } from '../src/pages/Home/styles';

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>My repositories</title>
    </Head>
    <Content>
      <Title>My repositories</Title>
      <img src="/static/logo.png" />
      <Link href="/repos">
        <Button>Go to my repositories</Button>
      </Link>
    </Content>
  </Container>
)

export default withAnalytics()(Home);