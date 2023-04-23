import React from 'react'
import styles from './InterestModal.module.css';

const InterestModal = () => {
  return (
      <div className={ styles.modal }>
          <div className={ styles.card }>
            <ul>  
                <li>App Development</li>
                <li>Web Development</li>
                <li>Game Development</li>
                <li>Data Structures</li>
                <li>Programming</li>
                <li>Machine Learning</li>
                <li>Data Science</li>
                <li>Others</li>
              </ul>
            <div className={ styles.btns }>
                <button className={styles.cancelbtn}>Cancel</button>
                <button className={ styles.submitbtn }>Submit</button>
            </div>              
          </div>
    </div>
  )
}

export default InterestModal