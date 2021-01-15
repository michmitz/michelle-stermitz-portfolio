/* eslint-disable max-len */
import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import styles from '../../../../styles/styles.css';
import Fungus from './ProjectItems/Fungus';
import projectStyles from '../../../../styles/projectStyles.css';
import TrulyTrivial from './ProjectItems/TrulyTrivial';
import Terminus from './ProjectItems/Terminus';
import AMAzine from './ProjectItems/AMAzine';

export default function Projects() {
  return (
    <FadeIn transitionDuration={2000} className={styles.contentDiv}>
      <Link to="/" className={styles.returnLink}>Return</Link>
      <header className={styles.contentHeader}>Past Projects</header>
      <div className={projectStyles.sliderDiv}>
        <AMAzine />
        <Fungus />
        <Terminus />
        <TrulyTrivial />
      </div>
    </FadeIn>
  );
}
