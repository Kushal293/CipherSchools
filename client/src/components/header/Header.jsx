import React from 'react';
import styles from './Header.module.css';
import { MdModeEditOutline } from 'react-icons/md/index.esm';
import { toggleProfileModal } from '../../utils/modalSlice';
import { useDispatch } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
  return (
      <div className={ styles.header }>
          <div className={styles.leftside}>
              <div className={styles.userLogo} onClick={() => dispatch(toggleProfileModal())}>
                  K
                  <div className={styles.logoEdit}> <MdModeEditOutline size="15px" /></div>
              </div>
              <div className={styles.userInfo}>
                  <h3>Hello,</h3>
                  <h2>Kushal Mehta</h2>
                  <h4>kushal@gmail.com</h4>
              </div>
          </div>
          <div className={ styles.rightside }>
              <h3><span>0</span> Followers</h3>
          </div>
    </div>
  )
}

export default Header