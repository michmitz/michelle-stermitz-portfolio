/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import styles from '../../../../styles/styles.css';
import timelineStyles from '../../../../styles/timelineStyles.css';
import {
  Timeline,
  Events,
  UrlButton,
  ImageEvent,
  TextEvent,
  YouTubeEvent,
  themes,
  createTheme
} from '@merc/react-timeline';
import Skills from './Skills';

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: 'var(--timelineCard)',
  },
  date: {
    backgroundColor: 'var(--timelineDate)',
    fontFamily: 'var(--headerFont)',
    fontSize: '.8em',
    fontWeight: 400,
  },
  marker: {
    borderColor: 'var(--text)',
  },
  timelineTrack: {
    backgroundColor: 'var(--text)',
    width: '1px'
  },
  urlButton: {
    backgroundColor: 'black',
  }
});

export default function WorkTimeline() {

  return (
    <FadeIn transitionDuration={2000} className={styles.contentDiv}>
      
      <Link to="/" className={styles.returnLink}>Return</Link>
  
      <header className={styles.contentHeader}>Experience</header>

      <div className={timelineStyles.resumeSkillsTimelineDiv}>

        <div className={timelineStyles.resumeDiv}>
          <h2 className={timelineStyles.sectionTitle}>Resume</h2>
          <Link to="/files/michelle-stermitz-resume.pdf" target="_blank" className={timelineStyles.resumeLink}>
            <p className={timelineStyles.clickMe}>click me</p>
          </Link>
        </div>

        <Skills />

        <div className={timelineStyles.timelineHeaderDiv}>
          <h2 className={timelineStyles.sectionTitle}>Timeline</h2>
        </div>

        <div className={timelineStyles.timelineDiv}>
          <FadeIn transitionDuration={5000}>
            <Timeline theme={customTheme}>
              <Events>
                <ImageEvent className={timelineStyles.event} date="6/2020" text="<h2>Alchemy Code Lab</h2>
                <h3>Portland, OR</h3>
                <p>I decided to pursue my love of logic, design and technology, and after graduating from Alchemy I can now proudly call myself a full-stack software developer.</p>"
                src="/assets/timeline/alchemy.png"
                alt="Alchemy Code Lab Logo" />

                <TextEvent className={timelineStyles.event} date="2019-2020" text="<h2>Powell's City of Books</h2>
                <h3>Portland, OR</h3>
                <p>Working in the inventory department at Powell's was a dream job! I was laid off due to the pandemic, but it allowed me to attend Alchemy.</p>" />

                <TextEvent className={timelineStyles.event} date="2017-2019" text="<h2>Freelance Graphic Design, Personal Assistant</h2>
                <h3>Remote, Los Angeles, CA, and Missoula, MT</h3>
                <p>I worked as a freelance graphic designer and personal assistant, forever in pursuit of new skills.</p>" />

                <ImageEvent className={timelineStyles.event}
                  date="2013-2017"
                  text="<h2>Manager, Graphic Designer</h2>
                  <h3>Stensrud Playhouse</h3>
                  <p>I moved to Montana to help open this entertainment venue, where we put on murder mystery dinner theater and sketch comedy shows in The Stensrud - a beautiful 1894 building on the historic register.</p>"
                  src="/assets/timeline/stensrud.png"
                  alt="Stensrud Playhouse"
                >
                </ImageEvent>

                <TextEvent className={timelineStyles.event} date="2012-2013" text="<h2>Makeup Artist</h2>
                <h3>Los Angeles, CA</h3>
                <p>I graduated from The Makeup Designory, an intensive makeup artistry program for film and tv. Makeup is one of my numerous creative outlets.</p>" />

                <TextEvent className={timelineStyles.event} date="2010-2011" text="<h2>Santa Monica College</h2>
                <h3>Santa Monica, CA</h3>
                <p>I explored different studies at SMC, including anthropology, art, and interior design.</p>" />

                <ImageEvent className={timelineStyles.event} date="2010" 
                  text="<h2>University of Canterbury</h2>
                  <h3>Christchurch, New Zealand.</h3> 
                  <p>I fulfilled my passion for traveling by living in New Zealand as an international student. I double majored in anthropology and Mandarin.</p>"
                  src="/assets/timeline/akaroa.png"
                  alt="Akaroa" />
              </Events>
            </Timeline>
          </FadeIn>
        </div>
      </div>

    </FadeIn>

  );
}
