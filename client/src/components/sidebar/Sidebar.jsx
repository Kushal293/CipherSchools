import React from 'react'
import styles from './Sidebar.module.css'
import { AiFillHome } from 'react-icons/ai/index.esm';
import { SiCoursera } from 'react-icons/si/index.esm';
import { BiTrendingUp } from 'react-icons/bi/index.esm';
import { RiUserFollowFill } from 'react-icons/ri/index.esm';
import { MdSpaceDashboard } from 'react-icons/md/index.esm';
import { BsDiscord } from 'react-icons/bs/index.esm';
import { FaRegIdCard } from 'react-icons/fa/index.esm';
import { DiCreativecommons } from 'react-icons/di/index.esm';
import { MdFeedback } from 'react-icons/md/index.esm';
import { GiDetour } from 'react-icons/gi/index.esm';
import { RiLoginCircleFill } from 'react-icons/ri/index.esm';
import { RiLogoutCircleFill } from 'react-icons/ri/index.esm';

const Sidebar = () => {
  return (
      <div className={ styles.sidebar }>
          <ul className={ styles.items }>
              <li className={styles.sidebarItems}><AiFillHome color="white" size="20px" /> <span>Home</span></li>
              <li className={styles.sidebarItems}><SiCoursera color="white" size="20px" /> <span>Courses</span></li>
              <li className={styles.sidebarItems}><BiTrendingUp color="white" size="20px" /> <span>Trending</span></li>
              <li className={styles.sidebarItems}><RiUserFollowFill color="white" size="20px" /> <span>Following</span></li>
              <li className={styles.sidebarItems}><MdSpaceDashboard color="white" size="20px" /> <span>Dashboard</span></li>
              <li className={styles.sidebarItems}><BsDiscord color="white" size="20px" /> <span>Discord</span></li>
              <li className={styles.sidebarItems}><FaRegIdCard color="white" size="20px" /> <span>Registration Form</span></li>
              <li className={styles.sidebarItems}><DiCreativecommons color="white" size="20px" /> <span>Creator Access</span></li>
              <li className={styles.sidebarItems}><MdFeedback color="white" size="20px" /> <span>Feedback</span></li>
              <li className={styles.sidebarItems}><GiDetour color="white" size="20px" /> <span>Tour</span></li>
              {/* <li className={styles.sidebarItems}><RiLogoutCircleFill color="white" size="20px" /> <span>Logout</span></li> */}
          </ul>
          <ul>
              <li className={styles.sidebarItems}><RiLoginCircleFill color="white" size="30px" /> <span>Login</span></li>
          </ul>
    </div>
  )
}

export default Sidebar