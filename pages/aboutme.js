import React from 'react';
import styles from '@/styles/aboutme.module.css'

const AboutMe = () => {
  return (
    <div>
      <button className={styles.backhome}>
  <span></span>
  <span></span>
  <span></span>
  <span></span> ← Back Home
</button>
      <h1 className={styles.sobremi}>Sobre mí</h1>
      <p className={styles.bio}>Soy un desarrollador de software apasionado y estoy aprendiendo React y Next.js.</p>
    </div>
  );
};

export default AboutMe;