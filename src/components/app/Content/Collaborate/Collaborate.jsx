/* eslint-disable max-len */
import React from 'react';
import Collapsible from 'react-collapsible';
import styles from '../../../../styles/styles.css';

export default function Collaborate() {
  return (
    <Collapsible trigger="Collaborate" transitionTime="100" className={styles.sectionHeader}>
      <p>Collaborate</p>
    </Collapsible>
  );
}
