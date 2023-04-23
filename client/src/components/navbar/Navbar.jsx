import React from 'react'
import styles from './Navbar.module.css';
import { CgDetailsMore } from 'react-icons/cg/index.esm';
import { BsBrowserSafari } from 'react-icons/bs/index.esm'
import { RiArrowDropDownLine } from 'react-icons/ri/index.esm'
import { BiSearch } from 'react-icons/bi/index.esm'
import { VscListSelection } from 'react-icons/vsc/index.esm'
import { IoIosNotificationsOutline } from 'react-icons/io/index.esm'
import { BsCoin } from 'react-icons/bs/index.esm'
import logo from '../../assets/logo-school.png';

const Navbar = () => {
  return (
      <div className={ styles.navbar }>
          <div className={ styles.leftNav }>
              <div className={ styles.menu }>
                  <CgDetailsMore size="25px" />
            </div>
            <div className={ styles.logoSection }>
                  <img className={ styles.logoImg } src={ logo } alt="logo" />
                  <h3>CipherSchools</h3>
              </div>
              <div className={ styles.logoSection }>
                  <BsBrowserSafari size="20px" />
                  <p>Browse</p>
                  <RiArrowDropDownLine size="25px" />
              </div>
          </div>
          <div className={ styles.rightNav }>
              <div className={ styles.inputBox }>
                  <BiSearch />
                  <input className={styles.input} type="text" placeholder='Search and Learn' />
                  <VscListSelection />
              </div>
              <div className={styles.navItemBox}>
                  <IoIosNotificationsOutline size="25px" />
                  <span className={styles.notification}>0</span>
              </div>
              <div className={styles.userLogo}>
                  K
              </div>
              <div className={styles.navItemBox}>
                  <BsCoin size="20px" />
                  <span style={{ color: "#F3912E"}}> 0 </span>
              </div>
          </div>
    </div>
  )
}

export default Navbar