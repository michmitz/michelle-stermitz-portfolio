/* eslint-disable max-len */
import React from 'react';
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

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: 'white',
  },
  date: {
    backgroundColor: 'white',
    color: 'black',
  },
  text: {
    color: 'black',
  },
  marker: {
    borderColor: 'grey',
  },
  timelineTrack: {
    backgroundColor: 'white',
  },
});

export default function WorkTimeline() {
  return (
    <FadeIn transitionDuration={2000} className={styles.contentDiv}>
      
      <Link to="/" className={styles.returnLink}>Return</Link>
  
      <header className={styles.contentHeader}>Resume & Work Timeline</header>

      <Link to="/files/michelle-stermitz-resume.pdf" target="_blank">View My Resume</Link>

      <div className={timelineStyles.timelineDiv}>
        <Timeline theme={customTheme}>
          <Events>
            <TextEvent date="1/1/19" text="**Markdown** is *supported*" />

            <ImageEvent
              date="4/13/19"
              text="You can embed images..."
              src="https://res.cloudinary.com/dovoq8jou/image/upload/v1564772194/jellyfish.jpg"
              alt="jellyfish swimming"
              credit="Photo by [@tavi004](https://unsplash.com/@tavi004)"
            >
              <div>
                <UrlButton href="https://unsplash.com/search/photos/undersea">
              View more undersea photos
                </UrlButton>
              </div>
            </ImageEvent>

            <YouTubeEvent
              date="6/18/19"
              id="6UnRHtwHGSE"
              name="General Tso's Chicken recipe"
              text="... and YouTube videos!"
            />
          </Events>
        </Timeline>
      </div>

    </FadeIn>

  );
}
