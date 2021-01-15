/* eslint-disable max-len */
import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import styles from '../../../../styles/styles.css';
import Fungus from './ProjectItems/Fungus';
import projectStyles from '../../../../styles/projectStyles.css';

export default function Projects() {
  return (
    <FadeIn transitionDuration={2000} className={styles.contentDiv}>
      <Link to="/" className={styles.returnLink}>Return</Link>
      <header className={styles.contentHeader}>Past Projects</header>
      <div className={projectStyles.sliderDiv}>
        <Fungus />
      </div>
    </FadeIn>
  );
}
