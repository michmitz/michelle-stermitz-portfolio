/* eslint-disable max-len */
import React from 'react';
import styles from '../../../../../styles/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import builtInSliderStyles from 'react-awesome-slider/dist/styles.css';
import projectStyles from '../../../../../styles/projectStyles.css';

export default function TrulyTrivial() {

  const trulyTrivialSlider = (
    <AwesomeSlider cssModule={builtInSliderStyles}>
      <div>
        <img src={'/assets/project-images/truly-trivial-1.png'} className={projectStyles.sliderImage}/>
      </div>
      <div>
        <img src={'/assets/project-images/truly-trivial-2.png'} className={projectStyles.sliderImage}/>
      </div>
    </AwesomeSlider>
  );

  return (
    <div className={projectStyles.slider}>{trulyTrivialSlider}
      <h2 className={projectStyles.projectName}>Truly Trivial</h2>
      <h3 className={projectStyles.tech}>Tech: React, JavaScript, CSS</h3>
      <p>Truly Trivial is a full-stack app that makes use of The Open Trivia DB to bring you a vintage gameshow experience! Featuring Bob Barker and the ability to bet on questions, you can either get rich or suffer the (satirical) consequences.</p>
      <p>Truly Trivial was built in a week-long sprint with a team of four and utilizes JavaScript, React, and CSS. I heavily contributed to the functionality of the app, using React with JavaScript to manage bets, user choices and quiz results.</p>
    </div>
  );
}
