import React from 'react';
import styles from '@/styles/aboutme.module.css'

const AboutMe = () => {
  return (
    <div>
      <button className={styles.backhome}>
  <span></span>
  <span></span>
  <span></span>
  <span></span> Back Home
</button>
      <h1 className={styles.sobremi}>About<span className={styles.gradient}> Me</span></h1>
      <p className={styles.bio}>Hi, Im Alex! Im a Junior Software Developer with a passion for creating innovative solutions to complex problems. Currently, I spend most of my time working on my personal projects, but Im actively seeking employment opportunities in software development.

I am dedicated to my craft and constantly seeking to improve my skills and knowledge. With my passion for coding and my experience, I believe that I would be a great asset to any team.</p>
    </div>
  );
};

export default AboutMe;