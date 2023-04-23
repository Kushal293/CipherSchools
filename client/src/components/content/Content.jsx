import React, { useState } from 'react'
import styles from './Content.module.css';
import { AiFillLinkedin } from 'react-icons/ai/index.esm';
import { AiFillGithub } from 'react-icons/ai/index.esm';
import { BsFacebook } from 'react-icons/bs/index.esm';
import { AiFillTwitterCircle } from 'react-icons/ai/index.esm';
import { AiFillInstagram } from 'react-icons/ai/index.esm';
import { RiArrowDropDownLine } from 'react-icons/ri/index.esm'
import { FaLink } from 'react-icons/fa/index.esm';
import CalendarHeatmap from 'react-calendar-heatmap';

const Content = () => {
    const [ isOpen, setIsOpen ] = useState(false);
    const [ isOpen2, setIsOpen2 ] = useState(false);
    const dateJan = [ 22, 23, 24, 25, 26, 27, 28 ];
    const dateFeb = [ 1, 7, 9, 13, 17, 19, 25];
    const dateMarch = [ 5, 6, 7, 8, 9, 10, 11, 18, 25, 26, 27, 28, 29, 30, 31 ];
    const dateApril = [ 1, 9, 10, 11, 12, 16, 23, 19, 26, 27, 28, 29, 22, 15];
    const dateMay = [ 7, 8, 9, 10, 11, 12, 13, 17, 21, 22, 23, 24, 25, 26, 27 ];
    const dateJune = [ 4, 5, 6, 7, 8, 9, 10, 11, 14, 18, 21, 25, 26, 27, 28, 29, 30 ];
    const dateJuly = [ 1, 9, 10, 11, 12, 13, 14, 15, 22, 29 ];
    const dateAug = [ 5 ];
    
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
          <div className={styles.section}>
              <div className={styles.heading}>
                  <h4>CIPHER MAP</h4>
              </div>
              <CalendarHeatmap
                  startDate={ new Date('2023-01-01') }
                  endDate={ new Date('2023-12-31') }
                  values={ [
                      ...dateJan.map((date, index) =>  ({ date: '2023-01-'+date, count: 12 })),
                      ...dateFeb.map((date, index) =>  ({ date: '2023-02-'+date, count: 12 })),
                      ...dateMarch.map((date, index) =>  ({ date: '2023-03-'+date, count: 12 })),
                      ...dateApril.map((date, index) =>  ({ date: '2023-04-'+date, count: 12 })),
                      ...dateMay.map((date, index) =>  ({ date: '2023-05-'+date, count: 12 })),
                      ...dateJune.map((date, index) =>  ({ date: '2023-06-'+date, count: 12 })),
                      ...dateJuly.map((date, index) =>  ({ date: '2023-07-'+date, count: 12 })),
                      ...dateAug.map((date, index) =>  ({ date: '2023-08-'+date, count: 12 })),
                  ]}
                  classForValue={ (value) => {
                      if (!value) {
                          return 'color-empty';
                      }
                      return `color-filled`;
                  } }
                  showWeekdayLabels={true}
                />
          </div>
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
                      <h4>Github</h4>
                      <div className={ styles.inputBox }>
                          <AiFillGithub size="25px" color="gray" />
                          <input type="text" placeholder='Github' className={styles.input} />
                      </div>
                  </div>
                  <div className={ styles.singleLink }>
                      <h4>Facebook</h4>
                      <div className={ styles.inputBox }>
                          <BsFacebook size="25px" color="gray" />
                          <input type="text" placeholder='Facebook' className={styles.input} />
                      </div>
                  </div>
                  <div className={ styles.singleLink }>
                      <h4>Twitter</h4>
                      <div className={ styles.inputBox }>
                          <AiFillTwitterCircle size="25px" color="gray" />
                          <input type="text" placeholder='Twitter' className={styles.input} />
                      </div>
                  </div>
                  <div className={ styles.singleLink }>
                      <h4>Instagram</h4>
                      <div className={ styles.inputBox }>
                          <AiFillInstagram size="25px" color="gray" />
                          <input type="text" placeholder='Instagram' className={styles.input} />
                      </div>
                  </div>
                  <div className={ styles.singleLink }>
                      <h4>Your Website</h4>
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
                          <div onClick={() => setIsOpen(!isOpen)}><RiArrowDropDownLine size="25px" /></div>
                          <ul className={ `${styles.dropdown} ${isOpen ? styles.open : ""}` }>
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
                          <div onClick={() => setIsOpen2(!isOpen2)}><RiArrowDropDownLine size="25px" /></div>
                          <ul className={ `${styles.dropdown} ${isOpen2 ? styles.open : ""}` }>
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
                  <button className={styles.editBtn}>Change</button>
              </div>
                  <div className={ styles.singleLink }>
                      <h4>PASSWORD</h4>
                      <div className={ styles.inputBox }>
                          <input type="password" placeholder='password' value="...................." className={styles.input} />
                      </div>
                  </div>
          </div>
          <hr className={styles.hr} />
          <div className={styles.section}>
              <div className={styles.heading}>
                  <h4>INTERESTS</h4>
                  <button className={styles.editBtn}>Edit</button>
              </div>
          </div>
          <br />
    </div>
  )
}

export default Content