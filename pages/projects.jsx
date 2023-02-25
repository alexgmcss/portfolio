import React from 'react';
import Head from 'next/head';
import styles from '@/styles/projects.module.css';

function Projects() {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <div>
          <h1 className={styles.project}>
            Projects
          </h1>
        <table className={styles.table}>
          <tr>
            <td className={styles.td}>a</td>
            <td className={styles.td}>a</td>
            <td className={styles.td}>a</td>
          </tr>
          <tr>
            <td className={styles.td}>a</td>
            <td className={styles.td}>a</td>
            <td className={styles.td}>a</td>
          </tr>
        </table>
      </div>
    </>
  );
}

export default Projects;