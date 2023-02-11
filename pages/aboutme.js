import React from 'react';
import styles from '@/styles/aboutme.module.css'
import Html from '../public/html.svg';
import Css from '../public/css.svg';
import Js from '../public/js.svg';
import Reeact from '../public/reeact.svg';
import Photoshop from '../public/photoshop.svg';
import Illustrator from '../public/illustrator.svg';
import Premiere from '../public/premiere.svg';
import Af from '../public/af.svg';
import Vscode from '../public/vscode.svg';

const AboutMe = () => {
  return (
    <div>
      <button className={styles.backhome}>
  <span></span>
  <span></span>
  <span></span>
  <span></span> Back Home
</button>
    <div className={styles.aboutmecontainer}>
      <h1 className={styles.sobremi}>About<span className={styles.gradient}>Me</span></h1>
      <p className={styles.bio}>Hi, Im Alex! Im a Junior Software Developer with a passion for creating innovative solutions to complex problems. Currently, I spend most of my time working on my personal projects, but Im actively seeking employment opportunities in software development.

I am dedicated to my craft and constantly seeking to improve my skills and knowledge. With my passion for coding and my experience, I believe that I would be a great asset to any team.</p>
    </div>
      <div>
        
      </div>
      <h1 className={styles.dev}>Dev<span className={styles.skills}>Skills</span></h1>
      <div className={styles.skillsContainer}>
        <Html className={styles.svg}  />
        <Css className={styles.svg} />
        <Js className={styles.svg} />
        <Reeact className={styles.svg} />
      </div>
      <h1 className={styles.dev}>Graphic<span className={styles.design}>Design</span></h1>
      <div className={styles.skillsContainer}>
        <Photoshop className={styles.svg}  />
        <Illustrator className={styles.svg} />
        <Premiere className={styles.svg} />
        <Af className={styles.svg} />
      </div>
      <h1 className={styles.dev}><span className={styles.tools}>Tools</span></h1>
      <div className={styles.skillsContainer}>
        <Vscode className={styles.svg}  />
      </div>
    </div>
  );
};


export default AboutMe;