/* eslint-disable max-len */
import React from 'react';
import styles from '../../../../../styles/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import builtInSliderStyles from 'react-awesome-slider/dist/styles.css';
import projectStyles from '../../../../../styles/projectStyles.css';

export default function Terminus() {

  const terminusSlider = (
    <AwesomeSlider cssModule={builtInSliderStyles}>
      <div>
        <img src={'/assets/project-images/terminus-1.png'} className={projectStyles.sliderImage}/>
      </div>
      <div>
        <img src={'/assets/project-images/terminus-2.png'} className={projectStyles.sliderImage}/>
      </div>
    </AwesomeSlider>
  );

  return (
    <div className={projectStyles.slider}>{terminusSlider}
      <h2 className={projectStyles.projectName}>Terminus</h2>
      <h3 className={projectStyles.tech}>Tech: Node.js, PostgreSQL, Inquirer, SuperAgent, Chalk, Heroku</h3>
      <p className={projectStyles.description}>To install, run command in your terminal (must have Node): npx terminus-game</p>
      <p className={projectStyles.description}>Terminus is a fun, Halloween-themed choose-your-own-adventure game playable in your terminal. Built in a week-long sprint with a team of six, I heavily aided in debugging, troubleshooting, and wiring Inquirer to deliver this thrilling experience to the user.</p>
    </div>
  );
}
