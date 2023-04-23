import React from 'react'
import styles from './Register.module.css';

const Register = () => {
  return (
      <div className={ styles.register }>
          <div className={ styles.card }>
              <form className={ styles.profileInfo }>
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
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" id="email" name="email" />
                    <br />
                  </div>
                  <div className={styles.inputBox}>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" id="password" name="password" />
                    <br />
          </div>  
          <h4>Already have an account? <span>LogIn</span></h4>
                  <div className={ styles.btns }>
                      <button className={ styles.submitbtn }>Submit</button>
                  </div>
              </form>
      </div>
    </div>
  )
}

export default Register