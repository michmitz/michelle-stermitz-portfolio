import React from 'react';
import AppSections from '../../containers/AppSections';
import Header from './Header/Header';
import containerStyles from '../../styles/containerStyles.css';

export default function App() {
  return ( 
    <div className={containerStyles.appContainer}>
      <Header />
      <AppSections />
    </div>
  );
}
