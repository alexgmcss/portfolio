import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Alezz - Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.14.0/css/all.css" integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc" crossorigin="anonymous" />

      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            AleZz
            <code className={styles.code}> - Portfolio</code>
          </p>
        </div>
        <div className={styles.center}>
          <h1 class="gradient-text">Hi, Im Alex</h1>
        </div>
        <div className={styles.grid}>
          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About Me <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              About Me!
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Projects <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              All my programming projects!
            </p>
          </a>

          <a
            href="https://linktr.ee/shaperecords"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Shape Records <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              In 2020 I founded my own company, an independent record label.
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Social networks <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              All my social networks
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
