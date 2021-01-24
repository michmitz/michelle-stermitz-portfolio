/* eslint-disable max-len */
import React from 'react';
import styles from '../../../../../styles/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import builtInSliderStyles from 'react-awesome-slider/dist/styles.css';
import projectStyles from '../../../../../styles/projectStyles.css';

export default function TrulyTrivial() {

  const trulyTrivialSlider = (
    <AwesomeSlider cssModule={builtInSliderStyles} className={projectStyles.awesomeSlider}>
      <div>
        <img src={'/assets/project-images/truly-trivial-1.png'} className={projectStyles.sliderImage} alt="truly-trivial-login-page"/>
      </div>
      <div>
        <img src={'/assets/project-images/truly-trivial-2.png'} className={projectStyles.sliderImage} alt="truly-trivial-favorites-page"/>
      </div>
    </AwesomeSlider>
  );

  return (
    <div className={projectStyles.slider}>
      <a href="https://fervent-agnesi-b2491a.netlify.app/" className={projectStyles.projectName}>Truly Trivial</a>
      
      {trulyTrivialSlider}

      <h3 className={projectStyles.tech}>Tech: React, JavaScript, CSS</h3>

      <p className={projectStyles.description}>Truly Trivial is a full-stack app that makes use of The Open Trivia DB to bring you a vintage gameshow experience! Featuring Bob Barker and the ability to bet on questions, you can either get rich or suffer the (satirical) consequences.</p>
      <p className={projectStyles.description}>Truly Trivial was built in a week-long sprint with a team of four and utilizes JavaScript, React, and CSS. I heavily contributed to the functionality of the app, using React with JavaScript to manage bets, user choices and quiz results.</p>

      <div className={projectStyles.lineDiv} />

      <label className={projectStyles.githubLabel}>
        <img className={projectStyles.githubIcon} src={'/assets/github-white.png'} alt="github-logo" />
        <a href="https://github.com/Truly-Trivial" className={projectStyles.githubLink}>Source Code</a>
      </label>

      <label className={projectStyles.websiteLabel}>
        <a href="https://fervent-agnesi-b2491a.netlify.app/" className={projectStyles.websiteLink}>Website</a>
      </label>
    
    </div>
  );
}
