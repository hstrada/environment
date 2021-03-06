import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>envs</title>
        <meta name="description" content="envs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a>envs</a>!
        </h1>
      </main>

      <footer className={styles.footer}>envs.</footer>
    </div>
  )
}

export default Home
