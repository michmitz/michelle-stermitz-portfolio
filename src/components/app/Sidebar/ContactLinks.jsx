/* eslint-disable max-len */
import React from 'react';
import contactLinkStyles from '../../../styles/contactLinkStyles.css';

export default function ContactLinks() {
  return (
    <div className={contactLinkStyles.contactDiv}>
      <p className={contactLinkStyles.disclaimer}>site created by Michelle Stermitz, inspired by <a href="http://brunobord.github.io/relax/">this</a> lovely app. To view sound credits please see my <a href="https://github.com/michmitz/michelle-stermitz-portfolio">source code</a>. Thanks for visiting!</p>
      
      <a href="https://github.com/michmitz" className={contactLinkStyles.contactLink}>
        <img className={contactLinkStyles.githubIcon} src="/assets/github-white.png" alt="github-logo" />
        /michmitz</a>
      
      <a href="https://linkedin.com/in/michellestermitz" className={contactLinkStyles.contactLink}>
        <img className={contactLinkStyles.icon} src="/assets/linkedin-white.png" alt="linkedin-logo" /> 
        /in/michellestermitz</a>
      
      <a href="https://twitter.com/michmitzpdx" className={contactLinkStyles.contactLink}>
        <img className={contactLinkStyles.icon} src="/assets/twitter-white.png" alt="twitter-logo" /> 
        @michmitzpdx</a>
    </div>
  );
}
