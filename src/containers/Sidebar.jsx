import React from 'react';
import ColorScheme from '../components/app/Sidebar/ColorScheme';
import ContactLinks from '../components/app/Sidebar/ContactLinks';
import Sounds from '../components/app/Sidebar/Sounds';
import containerStyles from '../styles/containerStyles.css';
import sidebarStyles from '../styles/sidebarStyles.css';

export default function Sidebar() {
  return (
    <div className={sidebarStyles.sidebarDiv}>
      <Sounds />
      <div className={sidebarStyles.sidebarLine} />
      <ColorScheme />
      <div className={sidebarStyles.sidebarLine} />
      <ContactLinks />
    </div>
  );
}
