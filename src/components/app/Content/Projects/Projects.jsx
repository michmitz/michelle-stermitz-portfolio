/* eslint-disable max-len */
import React from 'react';
import Collapsible from 'react-collapsible';
import styles from '../../../../styles/styles.css';

export default function Projects() {
  return (
    <Collapsible trigger="Projects" transitionTime="100" className={styles.sectionHeader}>
      <p>Projects</p>
    </Collapsible>
  );
}
