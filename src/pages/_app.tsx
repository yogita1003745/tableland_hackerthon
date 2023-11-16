import { useRouter } from 'next/router';
import { AppProps } from 'next/app';

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '@/components/Header';
import Head from 'next/head';
 import '../../src/app/globals.css'; 

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div className='min-h-screen'>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Agbalumo&family=Creepster&family=Dancing+Script&family=Eater&family=Edu+TAS+Beginner&family=Frijole&family=Linefont:wght@100&family=Merriweather:wght@300&family=Metal+Mania&family=Nosifer&family=Noto+Sans+Kawi:wght@500&family=Roboto:wght@700&family=Rye&display=swap"
          rel="stylesheet"
        />      </Head>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  );
}

export default App;
