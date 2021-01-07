import React from 'react';
import ColorScheme from '../components/app/Sidebar/ColorScheme';
import ContactLinks from '../components/app/Sidebar/ContactLinks';
import Sounds from '../components/app/Sidebar/Sounds';
import containerStyles from '../styles/containerStyles.css';

export default function Sidebar() {
  return (
    <div className={containerStyles.sidebarDiv}>
      <Sounds />
      <div className={containerStyles.sidebarLine} />
      <ContactLinks />
      <div className={containerStyles.sidebarLine} />
      <ColorScheme />
    </div>
  );
}
