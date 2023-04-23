import React from 'react'
import styles from './ChangePasswordModal.module.css';

const ChangePasswordModal = () => {
  return (
      <div className={ styles.modal }>
          <div className={ styles.card }>
              <form className={ styles.profileInfo }>
                  <div className={styles.inputBox}>
                    <label htmlFor="currentPassword">Current Password</label>
                    <br />
                    <input type="password" id="currentPassword" name="currentPassword" />
                    <br />
                  </div>
                  <div className={styles.inputBox}>
                    <label for="NewPassword">New Password</label>
                    <br />
                    <input type="password" id="NewPassword" name="NewPassword" />
                    <br />
                    </div>  
                  <div className={styles.inputBox}>
                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                    <br />
                    <input type="password" id="ConfirmPassword" name="ConfirmPassword" />
                    <br />
                  </div>
                  <div className={ styles.btns }>
                      <button className={styles.cancelbtn}>Cancel</button>
                      <button className={ styles.submitbtn }>Submit</button>
                  </div>
              </form>
          </div>
    </div>
  )
}

export default ChangePasswordModal