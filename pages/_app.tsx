import GlobalStyle from '../src/styles/global'

interface MyAppProps{
  Component: React.FC;
  pageProps: any;
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}