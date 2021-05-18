import React from 'react';
import { useState } from 'react';
import styles from '../../../styles/styles.css';
import sidebarStyles from '../../../styles/sidebarStyles.css';
import PropTypes from 'prop-types';
const randomColor = require('randomcolor');


export default function ColorScheme({ onChange }) {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

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

ColorScheme.propTypes = {
  onChange: PropTypes.func
};
