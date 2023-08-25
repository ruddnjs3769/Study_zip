import React from 'react'
import styles from './index.module.scss'

export default function AgeSignUp() {
  return (
    <div className={styles.container}>
      <h1 className={styles['subTitle']}>닌텐도 어카운트</h1>
      <div className={styles['age']}>
        <div className={styles['thirteenUnder']}>
          <a href="/access/signupform">
            <img />
            <span>13세 이하는 이곳</span>
          </a>
        </div>
        <div className={styles['fourteenPlus']}>
          <a href="/access/signupform">
            <img />
            <span>14세 이상은 이곳</span>
          </a>
        </div>
      </div>
    </div>
  )
}
