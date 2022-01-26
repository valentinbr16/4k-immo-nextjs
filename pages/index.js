import Head from 'next/head';
import Cards from '../components/Cards';
import Header from '../components/Header';

export default function Home() {
  return (
    <>
    <Head>
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="description" content="Vous recherchez une location longue durée ou saisonnière, nous avons ce qu'il vous faut !" />
      <title>4K Immo</title>

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100&display=swap" rel="stylesheet" />
    
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100&display=swap" rel="stylesheet" />    
    </Head>

    <Header />

    <Cards />
    </>
  )
}
