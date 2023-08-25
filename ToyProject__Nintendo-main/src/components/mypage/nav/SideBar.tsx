import React from 'react'
import styles from './SideBar.module.scss'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav className={styles.navBar}>
      <div className={styles.container}>
        <div className={styles.link}>
          <Link to="/user/:username/account" className={styles.account}>
            계좌 조회
          </Link>
        </div>
        <div className={styles.link}>
          <Link to="/user/:username" className={styles.mypage}>
            마이 페이지
          </Link>
        </div>
      </div>
    </nav>
  )
}
