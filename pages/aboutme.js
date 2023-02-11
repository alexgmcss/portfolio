import React from 'react';
import styles from '@/styles/aboutme.module.css'
import Html from '../public/html.svg';
import Css from '../public/css.svg';
import Js from '../public/js.svg';
import Reeact from '../public/reeact.svg';

const AboutMe = () => {
  return (
    <div>
      <button className={styles.backhome}>
  <span></span>
  <span></span>
  <span></span>
  <span></span> Back Home
</button>
      <h1 className={styles.sobremi}>About<span className={styles.gradient}>Me</span></h1>
      <p className={styles.bio}>Hi, Im Alex! Im a Junior Software Developer with a passion for creating innovative solutions to complex problems. Currently, I spend most of my time working on my personal projects, but Im actively seeking employment opportunities in software development.

I am dedicated to my craft and constantly seeking to improve my skills and knowledge. With my passion for coding and my experience, I believe that I would be a great asset to any team.</p>
      <div>
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
      <h1 className={styles.dev}>Dev<span className={styles.skills}>Skills</span></h1>
      <div className={styles.skillsContainer}>
        <Html className={styles.svg}  />
        <Css className={styles.svg} />
        <Js className={styles.svg} />
        <Reeact className={styles.svg} />
      </div>
    </div>
  );
};


export default AboutMe;