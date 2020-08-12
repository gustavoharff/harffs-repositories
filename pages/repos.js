import React from 'react';
import axios from 'axios';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

import { Container, Title } from '../src/pages/Repos/styles';

const Repos = ({ repos }) => (
  <Container>
    <Head>
      <title>Repositórios de Gustavo Harff</title>
    </Head>
    <Title>Repositórios</Title>
    <ul>
      {repos.map(repos => (
        <li key={repos.id}>{repos.name}</li>
      ))}
    </ul>
    <Link href="/">
      <a>Voltar</a>
    </Link>
  </Container>
)

Repos.getInitialProps = async () => {
  const response = await axios.get('https://api.github.com/users/gustavoharff/repos');

  return { repos: response.data };
}

export default withAnalytics()(Repos);