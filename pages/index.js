import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Lani Systems</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo" />
      </Head>

      <main className={styles.main}>
        <h3 className="text-lani-color-1">
          Site em desenvolvimento
        </h3>
        <Image src="/lani_systems2.svg" alt="Lani Systems Logo" width={400} height={400} />
      </main>

      <footer className={styles.footer}>
        <span className='text-white'>
          Powered by{' '} Lani Systems
        </span>

      </footer>
    </div>
  )
}
