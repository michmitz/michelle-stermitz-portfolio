/* eslint-disable max-len */
import React from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import styles from '../../../../styles/styles.css';
import aboutMeStyles from '../../../../styles/aboutMeStyles.css';

export default function AboutMe() {
  return (
    <FadeIn transitionDuration={2000} className={styles.contentDiv}>
      <Link to="/" className={styles.returnLink}>Return</Link>
      <header className={styles.contentHeader}>About Me</header>
      <div className={aboutMeStyles.descriptionAndImage}>
        
        <img src={'/assets/portrait.png'} className={aboutMeStyles.portrait}/>
        
        <div className={aboutMeStyles.descriptionDiv}>
          <p className={aboutMeStyles.description}>I am a full-stack software developer, collaborator and creator with experience in React, JavaScript, PostgreSQL, and test-driven development. As a logic enthusiast with a background in design, I love to contribute to the processes that drive an application while dreaming about style possibilities (always starting with fonts). I am forever seeking opportunities to collaborate with diverse groups, as I find immense satisfaction in working towards a common goal and laughing on the way there.</p>

          <p className={aboutMeStyles.description}>When I’m not at my computer I’m either outside, spending time with animals, sipping a fancy cocktail, meditating, or laughing at a terrible movie. I aim to find as much peace as possible in each moment, and my goal as a developer is to create applications that help others do the same.</p>
        </div>
      </div>
    </FadeIn>
  );
}
