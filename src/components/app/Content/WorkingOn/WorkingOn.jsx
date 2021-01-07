/* eslint-disable max-len */
import React from 'react';
import Collapsible from 'react-collapsible';
import styles from '../../../../styles/styles.css';

export default function WorkingOn() {
  return (
    <Collapsible trigger="Working On" transitionTime="100" className={styles.sectionHeader}>
      <p>Working On</p>
    </Collapsible>
  );
}
