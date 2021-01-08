import React from 'react'
import AboutMe from '../components/app/Content/AboutMe/AboutMe'
import Collaborate from '../components/app/Content/Collaborate/Collaborate'
import Projects from '../components/app/Content/Projects/Projects'
import WorkingOn from '../components/app/Content/WorkingOn/WorkingOn'
import WorkTimeline from '../components/app/Content/WorkTimeline/WorkTimeline'
import containerStyles from '../styles/containerStyles.css';

export default function Content() {
  return (
    <div className={containerStyles.contentDiv}>
      <AboutMe />
      <Projects />
      <WorkingOn />
      <Collaborate />
      <WorkTimeline />
    </div>
  );
}
