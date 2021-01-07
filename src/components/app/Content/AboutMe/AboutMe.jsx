/* eslint-disable max-len */
import React from 'react';
import Collapsible from 'react-collapsible';
import styles from '../../../../styles/styles.css';
import AboutMeStyles from './AboutMeStyles.css';

export default function AboutMe() {
  return (
    <Collapsible trigger="About Me" transitionTime="100" className={styles.sectionHeader}>
      <p>Testing</p>
    </Collapsible>
  );
}
