import React from 'react'
import styles from './Content.module.css';
import { AiFillLinkedin } from 'react-icons/ai/index.esm';
import { AiFillGithub } from 'react-icons/ai/index.esm';
import { BsFacebook } from 'react-icons/bs/index.esm';
import { AiFillTwitterCircle } from 'react-icons/ai/index.esm';
import { AiFillInstagram } from 'react-icons/ai/index.esm';
import { RiArrowDropDownLine } from 'react-icons/ri/index.esm'
import { FaLink } from 'react-icons/fa/index.esm';

const Content = () => {
  return (
      <div className={ styles.content }>
          <div className={styles.section}>
              <div className={styles.heading}>
                  <h4>ABOUT ME</h4>
                  <button className={styles.editBtn}>Edit</button>
              </div>
              <textarea className={styles.textarea} name="About" placeholder='Add something about you...' id="" cols="30" rows="5"></textarea>
          </div>
          <hr className={styles.hr} />
          <h1>CIPHER MAP</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <h1>Content</h1>
          <hr className={styles.hr} />
          <div className={styles.section}>
              <div className={styles.heading}>
                  <h4>ON THE WEB</h4>
                  <button className={styles.editBtn}>Edit</button>
              </div>
              <div className={ styles.webLinks }>
                  <div className={ styles.singleLink }>
                      <h4>Linkedin</h4>
                      <div className={ styles.inputBox }>
                          <AiFillLinkedin size="25px" color="gray" />
                          <input type="text" placeholder='Linkedin' className={styles.input} />
                      </div>
                  </div>
                  <div className={ styles.singleLink }>
                      <h4>Linkedin</h4>
                      <div className={ styles.inputBox }>
                          <AiFillGithub size="25px" color="gray" />
                          <input type="text" placeholder='Github' className={styles.input} />
                      </div>
                  </div>
                  <div className={ styles.singleLink }>
                      <h4>Linkedin</h4>
                      <div className={ styles.inputBox }>
                          <BsFacebook size="25px" color="gray" />
                          <input type="text" placeholder='Facebook' className={styles.input} />
                      </div>
                  </div>
                  <div className={ styles.singleLink }>
                      <h4>Linkedin</h4>
                      <div className={ styles.inputBox }>
                          <AiFillTwitterCircle size="25px" color="gray" />
                          <input type="text" placeholder='Twitter' className={styles.input} />
                      </div>
                  </div>
                  <div className={ styles.singleLink }>
                      <h4>Linkedin</h4>
                      <div className={ styles.inputBox }>
                          <AiFillInstagram size="25px" color="gray" />
                          <input type="text" placeholder='Instagram' className={styles.input} />
                      </div>
                  </div>
                  <div className={ styles.singleLink }>
                      <h4>Linkedin</h4>
                      <div className={ styles.inputBox }>
                          <FaLink size="25px" color="gray" />
                          <input type="text" placeholder='Your Website' className={styles.input} />
                      </div>
                  </div>
              </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.section}>
              <div className={styles.heading}>
                  <h4>PROFESSIONAL INFORMATION</h4>
                  <button className={styles.editBtn}>Edit</button>
              </div>
              <div className={ styles.webLinks }>
                  <div className={ styles.singleLink }>
                      <h4>Highest education</h4>
                      <div className={ styles.selectBox }>
                          <span>Graduation</span>
                          <RiArrowDropDownLine size="25px" />
                          <ul className={ styles.dropdown }>
                              <li>Primary</li>
                              <li>Secondary</li>
                              <li>Higher Secondary</li>
                              <li>Graduation</li>
                              <li>Post Graduation</li>
                          </ul>
                      </div>
                  </div>
                  <div className={ styles.singleLink }>
                      <h4>What do you do currently?</h4>
                      <div className={ styles.selectBox }>
                          <span>College student</span>
                          <RiArrowDropDownLine size="25px" />
                          <ul className={ styles.dropdown }>
                              <li>Schooling</li>
                              <li>College student</li>
                              <li>Teaching</li>
                              <li>Job</li>
                              <li>Freelancing</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.section}>
              <div className={styles.heading}>
                  <h4>PASSWORD AND SECURITY</h4>
                  <button className={styles.editBtn}>Edit</button>
              </div>
                  <div className={ styles.singleLink }>
                      <h4>PASSWORD</h4>
                      <div className={ styles.inputBox }>
                          <input type="password" placeholder='password' value="...................." className={styles.input} />
                      </div>
                  </div>
          </div>
          <hr className={styles.hr} />
          <h1>INTERESTS</h1>
    </div>
  )
}

export default Content