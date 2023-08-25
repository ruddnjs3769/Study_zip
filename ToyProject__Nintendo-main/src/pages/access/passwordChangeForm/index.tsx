import React from 'react'
import styles from './index.module.scss'

export default function PasswordChangeForm() {
  return (
    <div className={styles.container}>
      <h1 className={styles['subTitle']}>닌텐도 어카운트</h1>
      <div className={styles['password-group']}>
        <h1 className={styles['subTitle']}>비밀번호 재설정</h1>
        <form className={styles['password-form']} action="">
          <div className={styles['input-group']}>
            <input
              className={styles['input-text']}
              type="password"
              name="password"
              placeholder="영문과 숫자를 혼합한 8자 이상 20자 미만"
            />
          </div>

          <div className={styles['input-group']}>
            <input
              className={styles['input-text']}
              type="password"
              name="password"
              placeholder="영문과 숫자를 혼합한 8자 이상 20자 미만"
            />
          </div>
        </form>
        <div>
          <div className={styles['submit-group']}>
            <button className={styles['submit-btn']}>확인</button>
          </div>
        </div>
      </div>
    </div>
  )
}
