/* eslint-disable max-len */
import React from 'react';
import styles from '../../../../../styles/styles.css';
import AwesomeSlider from 'react-awesome-slider';
import builtInSliderStyles from 'react-awesome-slider/dist/styles.css';
import projectStyles from '../../../../../styles/projectStyles.css';

export default function Fungus() {

  const fungusSlider = (
    <AwesomeSlider cssModule={builtInSliderStyles}>
      <div>
        <img src={'/assets/project-images/fungus-1.png'} className={projectStyles.sliderImage}/>
      </div>
      <div>
        <img src={'/assets/project-images/fungus-2.png'} className={projectStyles.sliderImage}/>
      </div>
      <div>
        <img src={'/assets/project-images/fungus-3.png'} className={projectStyles.sliderImage}/>
      </div>
    </AwesomeSlider>
  );

  return (
    <div className={projectStyles.slider}>{fungusSlider}
      <h2 className={projectStyles.projectName}>FungusAmongUs</h2>
      <h3 className={projectStyles.tech}>Tech: JavaScript, HTML, CSS</h3>
      <p className={projectStyles.description}>FungusAmongUs is an interactive, educational app that allows users to select a geographical region of Oregon and learn more about the mushrooms commonly found in that region. The user can then opt to "collect" that mushroom and add it to their mushroom basket for reference later.</p>
      <p className={projectStyles.description}>FungusAmongUs was built in a four day sprint with JavaScript, HTML, and CSS. I heavily contributed to the app's functionality by navigating the setup of our JavaScript functions to render the mushrooms on each page.</p>
    </div>
  );
}
