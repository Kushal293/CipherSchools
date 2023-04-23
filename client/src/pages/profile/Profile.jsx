import React, { useState } from 'react'
import styles from './Profile.module.css';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Hero from '../../components/hero/Hero';
import ProfileModal from '../../components/profileModal/ProfileModal';
import InterestModal from '../../components/interestModal/InterestModal';
import ChangePasswordModal from '../../components/changePasswordModal.jsx/ChangePasswordModal';

const Profile = () => {
  const [ isOpen, setIsOpen ] = useState(false);
  return (
      <div className={`${styles.profile} ${isOpen ? styles.profileModalOpen : ""}`}>
          <Navbar />
          <main className={styles.main}>
        <Sidebar />
        <Hero />
      </main>
      {/* { isOpen &&<ProfileModal />} */}
      {/* { isOpen &&<InterestModal />} */}
      {/* { isOpen &&<ChangePasswordModal />} */}
    </div>
  )
}

export default Profile