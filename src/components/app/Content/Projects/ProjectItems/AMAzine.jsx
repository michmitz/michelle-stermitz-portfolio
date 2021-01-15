/* eslint-disable max-len */
import React from 'react';
import styles from '../../../../../styles/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import builtInSliderStyles from 'react-awesome-slider/dist/styles.css';
import projectStyles from '../../../../../styles/projectStyles.css';

export default function AMAzine() {

  const amazineSlider = (
    <AwesomeSlider cssModule={builtInSliderStyles}>
      <div>
        <img src={'/assets/project-images/amazine-1.png'} className={projectStyles.sliderImage}/>
      </div>
      <div>
        <img src={'/assets/project-images/amazine-2.png'} className={projectStyles.sliderImage}/>
      </div>
    </AwesomeSlider>
  );

  return (
    <div className={projectStyles.slider}>{amazineSlider}
      <h2 className={projectStyles.projectName}>AMAzine</h2>
      <h3 className={projectStyles.tech}>Tech: Python (PRAW), Node.js, PostgreSQL, React</h3>
      <p>AMAzine is a web-magazine that scrapes interviews from Reddit's "Ask Me Anything" subreddit, as well as recipes and a photo of the day from multiple APIs.</p>
      <p>AMAzine was built in a week-long sprint using Python, Node and PostgreSQL on the back end and React on the front end. I wrote all but one of our eight API calls on the backend, custom hooks and services on the front end. I also heavily contributed to the functionality of our components and styled the Thread Details page.</p>
    </div>
  );
}
