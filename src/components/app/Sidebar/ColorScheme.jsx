import React from 'react';
import styles from '../../../styles/styles.css';
import sidebarStyles from '../../../styles/sidebarStyles.css';
const randomColor = require('randomcolor');

const handleChange = (e) => {
  const selectedColor = e.target.value;

  const generatedColor = randomColor({ luminosity: 'dark' });
  const generatedColor2 = randomColor({ luminosity: 'light' });
  
  if(selectedColor === 'light') {
    document.documentElement.style
      .setProperty('--text', 'black');
    document.documentElement.style
      .setProperty('--background', 'white');
    document.documentElement.style
      .setProperty('--line', 'black'); 
  } else if(selectedColor === 'dark') {
    document.documentElement.style
      .setProperty('--text', 'white');
    document.documentElement.style
      .setProperty('--background', 'black');
    document.documentElement.style
      .setProperty('--line', 'white');
  } else if(selectedColor === 'random') {
    document.documentElement.style
      .setProperty('--text', generatedColor);
    document.documentElement.style
      .setProperty('--background', generatedColor2);
    document.documentElement.style
      .setProperty('--line', generatedColor);
  }
};


export default function ColorScheme() {
  return (
    <div className={sidebarStyles.colorSchemeDiv}>
      <h2>Theme</h2>

      <label>
        <input 
          type="radio" 
          name="color" 
          value="light"
          onChange={handleChange}  />
            Light
      </label>

      <label>
        <input 
          type="radio" 
          name="color" 
          value="dark"
          onChange={handleChange}  />
            Dark
      </label>

      <label>
        <input 
          type="radio" 
          name="color" 
          value="random"
          onChange={handleChange} />
            Random
      </label>

    </div>
  );
}
