import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '@/styles/projects.module.css';
import LoadingScreen from './LoadingScreen';

function Projects() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div>
          <h1 className={styles.project}>
            Projects
          </h1>
      </div>
    </>
  );
}

export default Projects;
