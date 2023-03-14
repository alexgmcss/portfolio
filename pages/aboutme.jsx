import React, { useState, useEffect } from 'react';
import styles from '@/styles/aboutme.module.css'
import loaderStyles from '@/styles/loader.module.css'
import Html from '../public/html.svg';
import Css from '../public/css.svg';
import Js from '../public/js.svg';
import Icon from '../public/reeact.svg';
import Photoshop from '../public/photoshop.svg';
import Illustrator from '../public/illustrator.svg';
import Premiere from '../public/premiere.svg';
import Af from '../public/af.svg';
import Vscode from '../public/vscode.svg';
import Link from 'next/link';
import Head from 'next/head'
import Next from '../public/nextjs.svg';
import LoadingScreen from './LoadingScreen';

const AboutMe = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
    <Head>
        <title>About Me</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className={styles.container}>
          <Link href="/">
            <button className={styles.backhome}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>  Back Home
            </button>
          </Link>
        </div>
      <div className={styles.aboutmecontainer}>
        <h1 className={styles.sobremi}>About<span className={styles.gradient}>Me</span></h1>
        <p className={styles.bio}>Hi, Im Alex! Im a Junior Software Developer with a passion for creating innovative solutions to complex problems. Currently, I spend most of my time working on my personal projects, but Im actively seeking employment opportunities in software development.

  I am dedicated to my craft and constantly seeking to improve my skills and knowledge. With my passion for coding and my experience, I believe that I would be a great asset to any team.</p>
      </div>
        <h1 className={styles.dev}>Dev<span className={styles.skills}>Skills</span></h1>
        <div className={styles.skillsContainer}>
          <Html className={styles.svg}  />
          <Css className={styles.svg} />
          <Js className={styles.svg} />
          <Next className={styles.svg} />
          <Icon className={styles.svg} />
        </div>
        <h1 className={styles.dev}>Graphic<span className={styles.design}>Design</span></h1>
        <div className={styles.skillsContainer}>
          <Photoshop className={styles.svg2}  />
          <Illustrator className={styles.svg2} />
          <Premiere className={styles.svg2} />
          <Af className={styles.svg2} />
        </div>
        <h1 className={styles.dev}><span className={styles.tools}>Tools</span></h1>
        <div className={styles.skillsContainer}>
          <Vscode className={styles.svg2}  />
        </div>

        <div className={styles.bubblecontainer}>
        <div className={styles.bubble}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.bubble}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.bubble}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.bubble}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={styles.bubble}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <p className={styles.alex}>ALEX - 2023</p>
      </div>
    </>
  );
};


export default AboutMe;