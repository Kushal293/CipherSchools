import React from 'react'
import styles from './Profile.module.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Hero from '../../components/hero/Hero';

const Profile = () => {
  return (
      <div>
          <Navbar />
          <main className={styles.main}>
        <Sidebar />
        <Hero />
          </main>
    </div>
  )
}

export default Profile