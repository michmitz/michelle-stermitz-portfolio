/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import containerStyles from '../styles/containerStyles.css';

export default function Content() {
  return (
    <div className={containerStyles.appContentDiv}>
      <Link to="/about-me" className={containerStyles.headerLinks}>About Me</Link>
      <Link to="/projects" className={containerStyles.headerLinks}>Past Projects</Link>
      <Link to="/working-on" className={containerStyles.headerLinks}>Current Projects</Link>
      <Link to="/collaborate" className={containerStyles.headerLinks}>Collaborate</Link>
      <Link to="/experience" className={containerStyles.headerLinks}>Resume & Experience</Link>
      <Link to="/photography" className={containerStyles.headerLinks}>Photography</Link>
    </div>
  );
}
