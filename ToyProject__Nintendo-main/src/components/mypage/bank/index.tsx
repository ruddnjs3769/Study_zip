import React from 'react'
import styles from './index.module.scss'
import Sidebar from '@/components/mypage/nav/SideBar'

export default function BankName() {
  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.bankContainer}>
          <div className={styles.paymentContainer}>계좌 연결</div>
          <div>추가할 계좌의 은행을 선택하세요.</div>
          <div className={styles.totallAccount}>
            <div className={styles.totale}>총 계좌 잔액</div>
            <div className={styles.totaleAmount}>1,000,000 원</div>
            <div className={styles.underLine}>₩</div>
          </div>
          <div className={styles.payMethod}>
            <div className={styles.title}>
              <span>결제 수단</span>
            </div>
            <div className={styles.payMethodContainer}>
              <button className={styles.btn}>
                계좌조회
              </button>
              <button className={styles.btn}>
                간편결제
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
