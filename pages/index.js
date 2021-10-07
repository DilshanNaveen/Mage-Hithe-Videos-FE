import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Layout from '../components/MainLayout' 

import Blocks from '../components/Blocks'

function createData(id, itemname, itemimage) {
  return { id, itemname,itemimage };
}

const rows = [
  createData('1', 'Sample 1', 'N/A'),
  createData('2', 'Sample 2', 'N/A'),
  createData('3', 'Sample 3', 'N/A'),
  createData('4', 'Sample 4', 'N/A'),
  createData('5', 'Sample 5', 'N/A'),
];

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
        {rows.map((row) => (
          <Blocks compID={row.id} vTitle={row.itemname} imgThumb={row.itemimage}/>
        ))}

        </main>
      </Layout>

    </div>
  )
}
