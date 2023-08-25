import React from 'react'
import styles from './index.module.scss'
import SelectBank from '@/components/mypage/bank/SelectBank'

import Sidebar from '@/components/mypage/nav/SideBar'

export default function AddAccount() {

  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <section className={styles.section}>
          <h1 className={styles.title}>계좌 연결</h1>
          <hr className={styles.line} />
          <div className={styles.text}>추가할 계좌의 은행을 선택하세요.</div>
          <div className={styles.banks}>
            <SelectBank />
            <SelectBank />
            <SelectBank />
            <SelectBank />
            <SelectBank />
            <SelectBank />
            <SelectBank />
          </div>
        </section>
      </div>
    </>
  )
}
