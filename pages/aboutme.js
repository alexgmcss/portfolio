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
      <h1 className={styles.sobremi}>About Me</h1>
      <p className={styles.bio}>Test</p>
    </div>
  );
};

export default AboutMe;