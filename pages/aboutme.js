import Head from 'next/head'
import alezzImage from './alezz.jpg'
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
      <p class="aboutme">About Me</p>
        <div class="contenedor">
        <div class="left-side">
      <p class="name">Alex</p>
      <p class="description">My name is Alex and I'm from Spain, in 2020 I founded my own company, a small independent record label. I consider myself passionate about what I do and very dedicated to my projects. </p>
        </div>
        <div class="right-side">
            <img src={alezzImage} class="photo" alt="Foto" />
        </div>
        </div>
      </main>
    </>
  )
}
