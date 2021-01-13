import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Header/Header';
import containerStyles from '../../styles/containerStyles.css';
import styles from '../../styles/styles.css';
import AboutMe from './Content/AboutMe/AboutMe';
import Content from '../../containers/Content';
import Sidebar from '../../containers/Sidebar';
import Projects from './Content/Projects/Projects';
import WorkTimeline from './Content/WorkTimeline/WorkTimeline';
import WorkingOn from './Content/WorkingOn/WorkingOn';
import Collaborate from './Content/Collaborate/Collaborate';
import FadeIn from 'react-fade-in';

export default function App() {
  return ( 
    <FadeIn transitionDuration={3000}>
      <div className={containerStyles.appContainer}>
        <Header />
        <div className={containerStyles.contentAndSidebarDiv}>
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                render={(routerProps) => <Content {...routerProps} />}
              />
              <Route
                path="/about-me"
                exact
                render={(routerProps) => <AboutMe {...routerProps} />}
              />
              <Route
                path="/projects"
                exact
                render={(routerProps) => <Projects {...routerProps} />}
              />
              <Route
                path="/working-on"
                exact
                render={(routerProps) => <WorkingOn {...routerProps} />}
              />
              <Route
                path="/collaborate"
                exact
                render={(routerProps) => <Collaborate {...routerProps} />}
              />
              <Route
                path="/experience"
                exact
                render={(routerProps) => <WorkTimeline {...routerProps} />}
              />
            </Switch>
          </Router>
          <Sidebar />
        </div>
      </div>
    </FadeIn>
  );
}
