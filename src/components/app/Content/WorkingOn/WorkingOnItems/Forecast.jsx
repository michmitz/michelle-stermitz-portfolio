/* eslint-disable max-len */
import React from 'react';
import styles from '../../../../../styles/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import builtInSliderStyles from 'react-awesome-slider/dist/styles.css';
import projectStyles from '../../../../../styles/projectStyles.css';

export default function Forecast() {

  const forecastSlider = (
    <AwesomeSlider cssModule={builtInSliderStyles} className={projectStyles.awesomeSlider}>
      <div>
        <img src={'/assets/project-images/forecast-1.png'} className={projectStyles.sliderImage} alt="forecast-1"/>
      </div>
      <div>
        <img src={'/assets/project-images/forecast-2.png'} className={projectStyles.sliderImage} alt="forecast-2"/>
      </div>
      <div>
        <img src={'/assets/project-images/forecast-3.png'} className={projectStyles.sliderImage} alt="forecast-3"/>
      </div>
    </AwesomeSlider>
  );

  return (
    <div className={projectStyles.slider}>
      <a href="https://michmitz-forecast.netlify.app" className={projectStyles.projectName}>Forecast</a>
      
      {forecastSlider}

      <h3 className={projectStyles.tech}>Tech: React, Redux, CSS</h3>

      <p className={projectStyles.description}>I am continuously developing this app - Forecast is a weather and moonphase calendar built with React, Redux, CSS, and the Open Weather API. Enter a city and receive a 16-day forecast, or view the moonphases for the next cycle. 
      I am the most proud of writing a script that calculates the moon phase for the next month, as well as displaying gifs that are customized to the weather or moon phase.</p>
      
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
