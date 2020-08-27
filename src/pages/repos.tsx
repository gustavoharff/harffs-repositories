import React, { useState } from 'react'
import axios from 'axios'
import { NextPage } from 'next'

import Link from 'next/link'
import Head from 'next/head'

import withAnalytics from '../hocs/withAnalytics'

import { Container, Content, Title, Button } from '../styles/pages/repos'

interface IDataObject {
  id: number
  name: string
  full_name: string
  description: string
  language: string
}

interface IReposProps {
  repos: IDataObject[]
}

const Repos: NextPage<IReposProps> = ({ repos }) => {
  return (
    <Container>
      <Head>
        <title>Repositórios de Gustavo Harff</title>
      </Head>
      <Content>
        <Title>Repositories</Title>
        <ul>
          {repos &&
            repos.map(repo => (
              <a
                key={repo.id}
                target="_blank"
                href={`https://github.com/gustavoharff/${repo.name}`}
              >
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
}

Repos.getInitialProps = async () => {
  const response = await axios.get(
    'https://api.github.com/users/gustavoharff/repos'
  )

  return { repos: response.data }
}

export default withAnalytics()(Repos)
