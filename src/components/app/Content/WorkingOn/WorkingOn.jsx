/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../../styles/styles.css';

export default function WorkingOn() {
  return (
    <div className={styles.contentDiv}>
      <Link to="/" className={styles.returnLink}>Return</Link>
      <h2>Working On</h2>
    </div>
  );
}
