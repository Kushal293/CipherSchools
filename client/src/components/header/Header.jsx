import React from 'react';
import styles from './Header.module.css';
import { MdModeEditOutline } from 'react-icons/md/index.esm';

const Header = () => {
  return (
      <div className={ styles.header }>
          <div className={styles.rightside}>
              <div className={styles.userLogo}>
                  K
                  <div className={styles.logoEdit}> <MdModeEditOutline size="15px" /></div>
              </div>
              <div className={styles.userInfo}>
                  <h3>Hello,</h3>
                  <h2>Kushal Mehta</h2>
                  <h4>kushal@gmail.com</h4>
              </div>
          </div>
          <div className={ styles.leftside }>
              <h3><span>0</span> Followers</h3>
          </div>
    </div>
  )
}

export default Header