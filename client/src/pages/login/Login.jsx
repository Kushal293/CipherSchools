import React from 'react'
import styles from './Login.module.css';

const Login = () => {
  return (
    <div className={ styles.login }>
      <div className={ styles.card }>
        <form className={ styles.profileInfo }>
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
          <h4>Create new account? <span>Sign In</span></h4>
                  <div className={ styles.btns }>
                      <button className={ styles.submitbtn }>Submit</button>
                  </div>
              </form>
      </div>
    </div>
  )
}

export default Login