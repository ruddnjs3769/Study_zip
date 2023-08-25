import React, { useState } from 'react'
import styles from './Nav.module.scss'
import { User } from '@/types/user'
import { Link } from 'react-router-dom'

export default function Nav() {
  const [modify, setModify] = useState(true)

  const dummyUser: User = {
    email: 'example@example.com', // 사용자 아이디
    displayName: 'John Doe', // 사용자 표시 이름
    profileImg: '' // 사용자 프로필 이미지 URL
  }

  const navConvert = () => {
    setModify((prevModify) => !prevModify)
  }

  return (
    <nav className={styles.sideNav}>
      <div className={`${styles.nav} ${styles.container}`}>
        <img className={styles.profileImg} src={dummyUser.profileImg} alt="" />
        <div className={styles.textBox}>
          <h3 className={styles.displayName}>{dummyUser.displayName}</h3>
          <span>{dummyUser.email}</span>
        </div>
        <Link
          className={styles.aTag}
          to={modify ? '/user/:username/certProfile' : '/user/:username'}
          onClick={navConvert}
        >
          {modify ? '정보 수정' : '수정 완료'}
        </Link>
      </div>
    </nav>
  )
}
