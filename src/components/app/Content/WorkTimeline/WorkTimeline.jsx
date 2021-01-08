/* eslint-disable max-len */
import React from 'react';
import Collapsible from 'react-collapsible';
import styles from '../../../../styles/styles.css';

export default function WorkTimeline() {
  return (
    <Collapsible trigger="Resume & Work Timeline" transitionTime="100" className={styles.sectionHeader}>
      <p>Resume and Work Timeline</p>
    </Collapsible>
  );
}
