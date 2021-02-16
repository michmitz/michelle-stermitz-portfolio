/* eslint-disable max-len */
import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import styles from '../../../../styles/styles.css';
import photographyStyles from '../../../../styles/photographyStyles.css';
import Gallery from './Gallery';

export default function Photography() {
  return (
    <FadeIn transitionDuration={2000} className={styles.contentDiv}>
      <Link to="/" className={styles.returnLink}>Return</Link>
      <header className={styles.contentHeader}>Photography</header>
      
      <div className={photographyStyles.photoContent}>
        
        <div className={photographyStyles.description}>
        Photography is one of many creative outlets for me. As a native Montanan, I am inspired by the tranquility and simplicity I find in nature, wildlife and beautiful landscapes.  
        </div>

        <Gallery />

      </div>
    </FadeIn>
  );
}
