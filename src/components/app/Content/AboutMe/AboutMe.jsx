/* eslint-disable max-len */
import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import styles from '../../../../styles/styles.css';
import aboutMeStyles from './AboutMeStyles.css';

export default function AboutMe() {
  return (
    <FadeIn transitionDuration={2000} className={styles.contentDiv}>
      <Link to="/" className={styles.returnLink}>Return</Link>
      <header className={styles.contentHeader}>About Me</header>
      <div className={aboutMeStyles.descriptionAndImage}>
        <p className={aboutMeStyles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate eu scelerisque felis imperdiet proin fermentum leo vel orci. Tellus mauris a diam maecenas sed enim. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Diam quam nulla porttitor massa id neque aliquam vestibulum.</p>
        <img src={'/assets/portrait.jpg'} className={aboutMeStyles.portrait}/>
      </div>
    </FadeIn>
  );
}
