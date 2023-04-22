import React from 'react'
import styles from './RightSideBar.module.css';
import {AiFillLike} from 'react-icons/ai/index.esm'
import { FaSave } from 'react-icons/fa/index.esm'
import { SiCoursera } from 'react-icons/si/index.esm';
import { MdSpaceDashboard } from 'react-icons/md/index.esm';
import { ImProfile } from 'react-icons/im/index.esm';

const RightSideBar = () => {
  return (
      <div className={ styles.sidebar }>
          <ul className={ styles.items }>
              <li className={styles.sidebarItems}><MdSpaceDashboard color="white" size="35px" /> <span>Dashboard</span></li>
              <li className={styles.sidebarItems}><ImProfile color="white" size="35px" /> <span>My Profile</span></li>
              <li className={styles.sidebarItems}><SiCoursera color="white" size="35px" /> <span>Enrolled Courses</span></li>
              <li className={styles.sidebarItems}><FaSave color="white" size="35px" /> <span>Wishlist</span></li>
              <li className={styles.sidebarItems}><AiFillLike color="white" size="35px" /> <span>Liked Videos</span></li>
          </ul>
    </div>
  )
}

export default RightSideBar