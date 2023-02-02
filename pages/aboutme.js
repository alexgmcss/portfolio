import Head from 'next/head';
import React from 'react';
import alezzImage from './alezz.jpg';
import { Inter } from '@next/font/google';
import styles from '@/styles/AboutMe.module.css';

const inter = Inter({ subsets: ['latin'] });

const AboutMe = () => (
  <>
    <Head>
      <title>About Me</title>
      <meta name="description" content="Alezz's About Me page" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
    <p class="aboutme"></p>
      <div className="contenedor">
        <div className="left-side">
          <p className="name">About Me</p>
          <p className="description">
            My name is Alex and Im from Spain. In 2020, I founded my own company, a small independent record label. I consider myself passionate about what I do and very dedicated to my projects.
          </p>
        </div>
        <div className="right-side">
          <img src={alezzImage} className="photo" alt="Photo" />
        </div>
      </div>
      <p class="aboutme"></p>
      <div className="contenedor2">
        <div className="left-side">
          <p className="name">Habilidades</p>
          <p className="description">
            -
          </p>
        </div>
      </div>
    </main>
  </>
);

export default AboutMe;

