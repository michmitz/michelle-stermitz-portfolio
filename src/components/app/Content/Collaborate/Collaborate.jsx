/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../../styles/styles.css';
import collaborateStyles from '../../../../styles/collaborateStyles.css';
import FadeIn from 'react-fade-in';

export default function Collaborate() {
  return (
    <FadeIn transitionDuration={2000} className={styles.contentDiv}>
      <Link to="/" className={styles.returnLink}>Return</Link>
      <header className={styles.contentHeader}>Collaborate</header>

      <div className={collaborateStyles.formDiv}>
        <form
          className={collaborateStyles.form}
          name="contact-form"
          method="POST"
        >
          <input type="hidden" name="form-name" value="websiteForm" action="/success" />

          <label className={collaborateStyles.formLabel}>
            <input
              className={collaborateStyles.inputs}
              type="text"
              name="name"
              placeholder="name"
              required
            />
          </label>

          <label className={collaborateStyles.formLabel}>
            <input
              className={collaborateStyles.inputs}
              type="email"
              name="email"
              placeholder="email"
              required
            />
          </label>

          <label className={collaborateStyles.formLabel}>
            <textarea
              className={collaborateStyles.message}
              name="message"
              placeholder="message"
              required
            ></textarea>
          </label>
          <p>
            <button type="submit" className={collaborateStyles.sendButton}>SEND</button>
          </p>
        </form>
      </div>
    </FadeIn>
  );
}
