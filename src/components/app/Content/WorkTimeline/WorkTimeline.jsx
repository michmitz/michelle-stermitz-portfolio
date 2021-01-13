/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../../styles/styles.css';

export default function WorkTimeline() {
  return (
    <div className={styles.contentDiv}>
      <Link to="/" className={styles.returnLink}>Return</Link>
      <p>Resume and Work Timeline</p>
    </div>
  );
}
