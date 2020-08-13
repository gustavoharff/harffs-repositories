import React from 'react';
import axios from 'axios';
import { NextPage } from 'next';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';

import { Container, Title, Back } from '../src/pages/Repos/styles';

interface Repo {
  id: number;
  name: string;
  map: Function;
}

interface ReposProps {
  repos?: Repo;
}

const Repos: NextPage<ReposProps> = ({ repos }) => (
  <Container>
    <Head> 
      <title>Repositórios de Gustavo Harff</title>
    </Head>
    <Title>Repositories</Title>
    <ul>
      {repos && repos.map((repo: Repo) => (
        <a target="_blank" href={`https://github.com/gustavoharff/${repo.name}`}>
          <li key={repo.id}>{repo.name}</li>
        </a>
      ))}
    </ul>
    <Link href="/">
      <Back>Go back</Back>
    </Link>
  </Container>
)

Repos.getInitialProps = async () => {
  const response = await axios.get('https://api.github.com/users/gustavoharff/repos');

  return { repos: response.data };
}

export default withAnalytics()(Repos);