import '../src/styles/global.css'

interface MyAppProps{
  Component: React.FC;
  pageProps: any;
}

export default function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />
}