import React from 'react';
import ColorScheme from '../components/app/Sidebar/ColorScheme';
import ContactLinks from '../components/app/Sidebar/ContactLinks';
import Sounds from '../components/app/Sidebar/Sounds';
import containerStyles from '../styles/containerStyles.css';
import { useState } from 'react';
import sidebarStyles from '../styles/sidebarStyles.css';

export default function Sidebar() {
  const [theme, setTheme] = useState('dark');

  function handleThemeChange(newValue) {
    setTheme(newValue);

    if(newValue === 'light') {
      document.documentElement.style
        .setProperty('--text', 'black');
      document.documentElement.style
        .setProperty('--background', 'rgba(255, 240, 240)');
      document.documentElement.style
        .setProperty('--line', 'black');
      document.documentElement.style
        .setProperty('--timelineDate', '#D19FA0');
      document.documentElement.style
        .setProperty('--timelineCard', 'white');
      document.documentElement.style
        .setProperty('--hoverColor', 'rgb(224, 159, 190)');   
    } else if(newValue === 'dark') {
      document.documentElement.style
        .setProperty('--text', 'white');
      document.documentElement.style
        .setProperty('--background', 'black');
      document.documentElement.style
        .setProperty('--line', 'white');
      document.documentElement.style
        .setProperty('--timelineDate', '#D19FA0');
      document.documentElement.style
        .setProperty('--timelineCard', 'rgba(255, 240, 240)');
      document.documentElement.style
        .setProperty('--hoverColor', 'rgb(225, 204, 253)');
    }
  }

  return (
    <div className={sidebarStyles.sidebarDiv}>
      <div className={sidebarStyles.soundsAndThemeDiv}>
        <Sounds theme={theme} />
        <div className={sidebarStyles.sidebarLineOne} />
        <ColorScheme onChange={handleThemeChange} />
        <div className={sidebarStyles.sidebarLineTwo} />
      </div>
      <ContactLinks />
    </div>
  );
}
