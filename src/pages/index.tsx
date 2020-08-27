import React from 'react'
import { NextPage } from 'next'

import Link from 'next/link'
import Head from 'next/head'

import logo from '../assets/logo.png'

import withAnalytics from '../hocs/withAnalytics'

import { Container, Content, Title, Button } from '../styles/pages/home'

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>My repositories</title>
    </Head>
    <Content>
      <Title>My repositories</Title>
      <img src={logo} />
      <Link href="/repos">
        <Button>Go to my repositories</Button>
      </Link>
    </Content>
  </Container>
)

export default withAnalytics()(Home)
