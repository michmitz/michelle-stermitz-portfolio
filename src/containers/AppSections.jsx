import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';
import containerStyles from '../styles/containerStyles.css';

export default function AppSections() {
  return (
    <div className={containerStyles.contentAndSidebarDiv}>
      <Content />
      <Sidebar />
    </div>
  );
}
