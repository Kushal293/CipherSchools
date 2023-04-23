import React, { useState } from 'react'
import styles from './Profile.module.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Hero from '../../components/hero/Hero';
import ProfileModal from '../../components/profileModal/ProfileModal';
import InterestModal from '../../components/interestModal/InterestModal';
import ChangePasswordModal from '../../components/changePasswordModal.jsx/ChangePasswordModal';
import { useSelector } from 'react-redux';

const Profile = () => {
  
  const isProfileOpen = useSelector(store => store.modals.isProfileOpen);
  const isPasswordOpen = useSelector(store => store.modals.isPasswordOpen);
  const isInterestOpen = useSelector(store => store.modals.isInterestOpen);

  return (
      <div className={`${styles.profile} ${isProfileOpen || isPasswordOpen ||isInterestOpen ? styles.profileModalOpen : ""}`}>
          <Navbar />
          <main className={styles.main}>
        <Sidebar />
        <Hero />
      </main>
      { isProfileOpen && <ProfileModal />}
      { isPasswordOpen && <ChangePasswordModal />}
      { isInterestOpen && <InterestModal />}
    </div>
  )
}

export default Profile