import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/AboutMe.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function AboutMe() {
  return (
    <>
      <Head>
        <title>About Me</title>
        <meta name="description" content="Alezz's About Me page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <h1 class="aboutme">About Me</h1>
        </div>

        <div>
        <img src="../IMG/alezz.jpg" alt="foto" class="foto" />
          <p class="parrafo">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis libero libero. Integer id laoreet nisl. Nam dictum nisl quis est dapibus, a mollis libero bibendum.
          </p>
        </div>
      </main>
    </>
  )
}
