import type { NextPage } from 'next'
import Head from 'next/head'
import Clients from '../components/Clients'
import CoreValue from '../components/CoreValue'
import HomeSection from '../components/Home'
import News from '../components/News'
import Services from '../components/Services'
import Teams from '../components/Teams'
import VisiMisi from '../components/VisiMisi'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Merkle Innovation - Empowered by Innovation</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HomeSection />
        <VisiMisi />
        <CoreValue />
        <Clients />
        <Services />
        <Teams />
        <News />
      </main>

      <footer className={styles.footer}>
        <p>Copyright © 2022 Merkle Inovation</p>
      </footer>
    </div>
  )
}

export default Home
