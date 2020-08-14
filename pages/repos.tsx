import React from 'react';
import axios from 'axios';
import { NextPage } from 'next';

import Link from 'next/link';
import Head from 'next/head';

import withAnalytics from '../src/hocs/withAnalytics';


import { Container, Content, Title, Button } from '../src/pages/Repos/styles';

interface Repo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  language: string;
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
    <Content>
      <Title>Repositories</Title>
      <ul>
        {repos && repos.map((repo: Repo) => (
          <a key={repo.id} target="_blank" href={`https://github.com/gustavoharff/${repo.name}`}>
            <li>
              <strong>{repo.full_name}</strong>
              <p>{repo.description}</p>
              <p>{repo.language}</p>
            </li>
          </a>
        ))}
      </ul>
      <Link href="/">
        <Button>Go back</Button>
      </Link>
    </Content>
  </Container>
)

Repos.getInitialProps = async () => {
  const response = await axios.get('https://api.github.com/users/gustavoharff/repos');

  return { repos: response.data };
}

export default withAnalytics()(Repos);