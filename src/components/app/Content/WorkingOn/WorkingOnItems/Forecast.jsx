/* eslint-disable max-len */
import React from 'react';
import styles from '../../../../../styles/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import builtInSliderStyles from 'react-awesome-slider/dist/styles.css';
import projectStyles from '../../../../../styles/projectStyles.css';

export default function Forecast() {

  const forecastSlider = (
    <AwesomeSlider cssModule={builtInSliderStyles}>
      <div>
        <img src={'/assets/project-images/forecast-1.png'} className={projectStyles.sliderImage} alt="forecast-1"/>
      </div>
      <div>
        <img src={'/assets/project-images/forecast-2.png'} className={projectStyles.sliderImage} alt="forecast-2"/>
      </div>
    </AwesomeSlider>
  );

  return (
    <div className={projectStyles.slider}>
      <a href="https://michmitz-forecast.netlify.app" className={projectStyles.projectName}>Forecast</a>
      
      {forecastSlider}

      <h3 className={projectStyles.tech}>Tech: React, Redux, CSS</h3>

      <p className={projectStyles.description}>Forecast is a simple weather app I built with React, Redux, CSS, and the Open Weather API. Enter a city and receive a 16-day forecast with customized adorable gifs!</p>
      
      <div className={projectStyles.lineDiv} />

      <label className={projectStyles.githubLabel}>
        <img className={projectStyles.githubIcon} src={'/assets/github-white.png'} alt="github-logo"/>
        <a href="https://github.com/michmitz/weather-redux" className={projectStyles.githubLink}>Source Code</a>
      </label>

      <label className={projectStyles.websiteLabel}>
        <a href="https://michmitz-forecast.netlify.app" className={projectStyles.websiteLink}>Website</a>
      </label>
    </div>
  );
}
