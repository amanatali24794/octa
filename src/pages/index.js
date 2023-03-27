import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar/Navbar'
import Banner from '@/components/Banner/Banner'
import CircleCursor from '@/effects/CircularCursor'
import Brands from '@/components/Brands/Brands'
import About from '@/components/About/About'
import Services from '@/components/Services/Services'

export default function Home() {
  return (
    <>
      <Head>
        <title>Octabucks</title>
        <meta name="description" content="Octabucks website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CircleCursor
        normalRadius={40}
        bigRadius={90}
      >
        <main className={styles.main}>
          <Navbar/>
          <Banner/>
          <Brands/>
          <About />
          <Services/>
        </main>
      </CircleCursor>
    </>
  )
}
