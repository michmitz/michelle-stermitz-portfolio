import React from 'react';
import styles from '../../../styles/styles.css';
import sidebarStyles from '../../../styles/sidebarStyles.css';
const randomColor = require('randomcolor');

const handleChange = (e) => {
  const selectedColor = e.target.value;

  /*
  const generatedColor = randomColor({ luminosity: 'dark' });
  const generatedColor2 = randomColor({ luminosity: 'light' });*/
  
  if(selectedColor === 'light') {
    document.documentElement.style
      .setProperty('--text', 'black');
    document.documentElement.style
      .setProperty('--background', 'rgba(255, 240, 240)');
    document.documentElement.style
      .setProperty('--line', 'black'); 
  } else if(selectedColor === 'dark') {
    document.documentElement.style
      .setProperty('--text', 'white');
    document.documentElement.style
      .setProperty('--background', 'black');
    document.documentElement.style
      .setProperty('--line', 'white');
  }
};


export default function ColorScheme() {
  return (
    <div className={sidebarStyles.colorSchemeDiv}>
      <h2 className={sidebarStyles.themeHeader}>Theme</h2>

      <div className={sidebarStyles.buttonsDiv}>

        <label>
          <input 
            type="radio" 
            name="color" 
            value="light"
            onChange={handleChange}  />
            light
        </label>

        <label>
          <input 
            type="radio" 
            name="color" 
            value="dark"
            onChange={handleChange}  />
            dark
        </label>

      </div>

    </div>
  );
}
