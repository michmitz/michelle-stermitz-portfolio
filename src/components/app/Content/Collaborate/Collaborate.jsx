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
        <div className={collaborateStyles.lilHeaderDiv}>
          <p className={collaborateStyles.lilHeader}>Want to collab, learn a new skill together or have a Zoom beer and chat? Contact me below!</p>
        </div>

        <form
          className={collaborateStyles.form}
          name="contact-form"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact-form" action="/success" />

          <input
            className={collaborateStyles.inputs}
            type="text"
            name="name"
            placeholder="name"
            required
          />

          <input
            className={collaborateStyles.inputs}
            type="email"
            name="email"
            placeholder="email"
            required
          />

          <textarea
            className={collaborateStyles.message}
            name="message"
            placeholder="message"
            required
          ></textarea>

          <button type="submit" className={collaborateStyles.sendButton}>SEND</button>

        </form>
      </div>
    </FadeIn>
  );
}
