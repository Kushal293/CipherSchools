import React from 'react';
import styles from './Hero.module.css';
import Header from '../header/Header';
import Content from '../content/Content';
import RightSideBar from '../rightSideBar/RightSideBar';

const Hero = () => {
  return (
      <div className={ styles.hero }>
          <Header />
          <div className={styles.section}>
              <Content />
              <RightSideBar />
          </div>
    </div>
  )
}

export default Hero