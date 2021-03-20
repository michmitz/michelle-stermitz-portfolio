/* eslint-disable max-len */
import React from 'react';
import styles from '../../../../../styles/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import builtInSliderStyles from 'react-awesome-slider/dist/styles.css';
import projectStyles from '../../../../../styles/projectStyles.css';

export default function Flashcards() {

  const flashcardSlider = (
    <AwesomeSlider cssModule={builtInSliderStyles} className={projectStyles.awesomeSlider}>
      <div>
        <img src={'/assets/project-images/flashcards.png'} className={projectStyles.sliderImage} alt="flashcards"/>
      </div>
    </AwesomeSlider>
  );

  return (
    <div className={projectStyles.slider}>
      <p className={projectStyles.projectName}>Interview Question Flashcards</p>
      
      {flashcardSlider}

      <h3 className={projectStyles.tech}>Tech: React, CSS, Node.js, Express, postgreSQL</h3>

      <p className={projectStyles.description}>With two others, I am currently developing this flashcard app that allows the user to study questions that might come up in a software engineer interview. I have heavily contributed to both the front and backend, seeding our database, styling the site, displaying the flashcards, and researching the questions.</p>
      
      <div className={projectStyles.lineDiv} />

      <label className={projectStyles.githubLabel}>
        <img className={projectStyles.githubIcon} src={'/assets/github-white.png'} alt="github-logo"/>
        <a href="https://github.com/Interview-Flashcards" className={projectStyles.githubLink}>Source Code</a>
      </label>
    </div>
  );
}
