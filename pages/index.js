import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/MainLayout' 

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mage Hithe Videos</title>
        <meta name="description" content="A youtube video downloader experiment with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main className={styles.main}>

          <h1 className={styles.title}>
            Welcome to Mage Hithe Videos
          </h1>

        </main>
      </Layout>

    </div>
  )
}
