/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import FadeIn from 'react-fade-in';
import { Link } from 'react-router-dom';
import styles from '../../../../styles/styles.css';
import timelineStyles from '../../../../styles/timelineStyles.css';


export default function Skills() {
  const [languagesOpen, setLanguagesOpen] = useState(false);
  const [frontendOpen, setFrontendOpen] = useState(false);
  const [backendOpen, setBackendOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [testingOpen, setTestingOpen] = useState(false);

  const handleLanguages = () => {
    languagesOpen ? setLanguagesOpen(false) : setLanguagesOpen(true);
  };
  
  const handleFrontend = () => {
    frontendOpen ? setFrontendOpen(false) : setFrontendOpen(true);
  };

  const handleBackend = () => {
    backendOpen ? setBackendOpen(false) : setBackendOpen(true);
  };

  const handleTools = () => {
    toolsOpen ? setToolsOpen(false) : setToolsOpen(true);
  };

  const handleTesting = () => {
    testingOpen ? setTestingOpen(false) : setTestingOpen(true);
  };

  return (

    <div className={timelineStyles.skillsDiv}>
      <h2 className={timelineStyles.sectionTitle}>Tech Stack</h2>
  
      <div className={timelineStyles.collapsibleDiv}>
        <header className={timelineStyles.collapsibleHeader} onClick={handleLanguages}>Languages
          <ol className={ languagesOpen ? timelineStyles.collapsibleOpen : timelineStyles.collapsibleHidden }>
            <li>JavaScript</li>
            <li>TypeScript (learning)</li>
            <li>Ruby on Rails (learning)</li>
            <li>HTML</li>
            <li>CSS</li>
          </ol>
        </header>

        <header className={timelineStyles.collapsibleHeader} onClick={handleFrontend}>Frontend
          <ol className={ frontendOpen ? timelineStyles.collapsibleOpen : timelineStyles.collapsibleHidden }>
            <li>React</li>
            <li>Redux</li>
            <li>Inquirer</li>
          </ol>
        </header>

        <header className={timelineStyles.collapsibleHeader} onClick={handleBackend}>Backend
          <ol className={ backendOpen ? timelineStyles.collapsibleOpen : timelineStyles.collapsibleHidden }>
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL/SQL</li>
            <li>Sequelize</li>
            <li>Redis</li>
            <li>bcrypt</li>
            <li>PRAW (Python)</li>
            <li>AWS</li>
          </ol>
        </header>

        <header className={timelineStyles.collapsibleHeader} onClick={handleTools}>Tools & Services
          <ol className={ toolsOpen ? timelineStyles.collapsibleOpen : timelineStyles.collapsibleHidden }>
            <li>Heroku</li>
            <li>Netlify</li>
            <li>Slack</li>
            <li>Github/Git</li>
            <li>PGAdmin</li>
            <li>Postman</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
            <li>Canva</li>
          </ol>
        </header>

        <header className={timelineStyles.collapsibleHeader} onClick={handleTesting}>Testing
          <ol className={ testingOpen ? timelineStyles.collapsibleOpen : timelineStyles.collapsibleHidden } >
            <li>Jest</li>
            <li>Qunit</li>
            <li>Supertest</li>
          </ol>
        </header>
      </div>
    </div>
  );

}
