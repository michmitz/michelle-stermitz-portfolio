/* eslint-disable max-len */
import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import styles from '../../../../styles/styles.css';
import projectStyles from '../../../../styles/projectStyles.css';
import Forecast from './WorkingOnItems/Forecast';
import Flashcards from './WorkingOnItems/Flashcards';

export default function WorkingOn() {
  return (
    <FadeIn transitionDuration={2000} className={styles.contentDiv}>
      
      <Link to="/" className={styles.returnLink}>Return</Link>
        
      <header className={styles.contentHeader}>Current Projects</header>
        
      <div className={projectStyles.sliderDiv}>
        <Flashcards />
        <Forecast />
      </div>
    
    </FadeIn>
  );
}

