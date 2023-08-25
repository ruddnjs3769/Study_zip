import React, { useState, useCallback, ChangeEvent } from 'react'
import styles from './index.module.scss'
import Nav from '@/components/mypage/nav/Nav'
import { Link } from 'react-router-dom'

export default function CertProfile() {
  const [confirmPwdMsg, setConfirmPwdMsg] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [password, setPassword] = useState('')

  // email & 닉네임 & 비밀번호 정규식
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/

  // 비밀번호 일치 여부 콜백함수를 이용해 현재 입력값에 따른 메세지를 실시간으로 반영
  const onChangeConfirmPassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const curConfirmPassword = e.target.value
      setConfirmPassword(curConfirmPassword)

      if (password !== curConfirmPassword) {
        setConfirmPwdMsg('비밀번호가 일치하지 않습니다.')
      } else {
        setConfirmPwdMsg('올바른 비밀번호입니다.')
      }
    },
    [password]
  )

  // 메세지 상태 저장
  const [pwdMsg, setPwdMsg] = useState('')
  
  // 유효성 검사기능 및 중복체크 전부 통과해야 폼 제출성공
  const validateForm = () => {
    // 비밀번호 유효성 검사
    if (!passwordRegex.test(password)) {
      return false
    }

    // 비밀번호 일치 여부 검사
    if (password !== confirmPassword) {
      return false
    }

    // 모든 유효성 검사 통과
    return true
  }
  return (
    <>
      <div className={styles.container}>
        <Nav />
        <section className={styles.section}>
          <div className={styles.inner}>
            <div className={styles.content}>
              <h1 className={styles.title}>개인 정보 수정</h1>
              <hr className={styles.line} />
              <label className={styles.label} htmlFor="password">
                비밀번호 재확인
              </label>
              <div className={styles.text}>
                회원님의 정보를 안전하게 보호하기 위해 비밀번호를 다시 한번 확인해주세요.
              </div>
            </div>
            <form className={styles.inputForm}>
              <input
                id="password"
                className={`${styles.inputTag} ${styles.password}`}
                type="password"
                name="password"
                max="19"
                value={confirmPassword}
                onChange={onChangeConfirmPassword}
                placeholder="비밀번호를 입력하세요"
                autoComplete="off"
                required
              />
              {pwdMsg && (
                <div className={pwdMsg === '비밀번호가 일치하지 않습니다.' ? styles.msg : styles.error}>{pwdMsg}</div>
              )}
              <Link to="/user/:username/certProfile/editProfile">
                <button className={`${styles.btnTag} ${styles.checkBtn}`}>확인</button>
              </Link>
            </form>
          </div>
        </section>
      </div>
    </>
  )
}
