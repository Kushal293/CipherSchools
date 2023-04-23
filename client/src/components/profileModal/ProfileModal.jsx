import React from 'react'
import styles from './ProfileModal.module.css';
import { MdModeEditOutline } from 'react-icons/md/index.esm';
import { toggleProfileModal } from '../../utils/modalSlice';
import { useDispatch } from 'react-redux';

const ProfileModal = () => {
    const dispatch = useDispatch();
  return (
      <div className={ styles.modal }>
          <div className={ styles.card }>
              <div className={ styles.profilePic }>
                  <div className={styles.userLogo}>
                  K
                      {/* <div className={styles.logoEdit}> <MdModeEditOutline size="15px" /></div> */ }
                      <label htmlFor='filetype' className={styles.logoEdit}>
                              <MdModeEditOutline size="15px" />
                          <input multiple type="file" autoComplete='off' id='filetype' name='filetype' >
                      </input>
                      </label>
              </div>
              </div>
              <form className={ styles.profileInfo }>
                  <div className={styles.inputBox}>
                    <label htmlFor="fname">First name</label>
                    <br />
                    <input type="text" id="fname" name="fname" />
                    <br />
                  </div>
                  <div className={styles.inputBox}>
                    <label htmlFor="lname">Last name</label>
                    <br />
                    <input type="text" id="lname" name="lname" />
                    <br />
                    </div>  
                  <div className={styles.inputBox}>
                    <label htmlFor="email">Email Address</label>
                    <br />
                    <input type="email" id="email" name="email" />
                    <br />
                  </div>
                  <div className={styles.inputBox}>
                    <label htmlFor="pNum">Phone Number</label>
                    <br />
                    <input type="text" id="pNum" name="pNum" />
                    <br />
                  </div>
                  <div className={ styles.btns }>
                      <button className={styles.cancelbtn} onClick={() => dispatch(toggleProfileModal())}>Cancel</button>
                      <button className={ styles.submitbtn }>Submit</button>
                  </div>
              </form>
          </div>
    </div>
  )
}

export default ProfileModal