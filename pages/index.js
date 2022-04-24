import Head from 'next/head'
import { useState } from 'react';
import Nav from '../src/components/nav';
import styles from '../styles/Home.module.css';

export default function Home() {

  const [textInfoWrite, settextInfoWrite] = useState("");

  function writeText(text) {
    var t = text.split('');
    let i = 0;
    let p = "";

    const inter = setInterval(() => {
      if (!t[i]) clearInterval(inter);
      else {
        p += t[i];
        i++;
        settextInfoWrite(p);
      }
    }, 100);
  }

  if (textInfoWrite == "") writeText("Site em desenvolvimento :)");

  return (
    <div className={styles.container}>
      <Head>
        <title>Lani Systems</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/lani-Icon.svg" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Exo" />
      </Head>

      <Nav />
      <main className='centerlize text-white' style={{ overflow: "hidden" }}>
        <h2>{textInfoWrite}</h2>
      </main>

      {/*   <footer className={styles.footer}>
        <span className='text-white'>
          Powered by{' '} Lani Systems
        </span>

      </footer> */}
    </div>
  )
}
