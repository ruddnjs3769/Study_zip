import React from 'react'
import styles from './index.module.scss'
import Sidebar from '@/components/mypage/nav/SideBar'
import { Link } from 'react-router-dom'
import SelectAccount from '@/components/mypage/bank/SelectAccount'
import dummyAccounts from '@/pages/payment/dummyAccounts.json'
import { AccountsBalance } from '@/types/account'

//사용되는 api
// 1. 계좌 조회
// 2. 계좌 연결
// 3. 제품거래(구매) 신청
// 4. 선택가능한 은행 목록 조회

export default function Account() {
  const { accounts }: AccountsBalance = dummyAccounts

  // 은행별 잔액의 총 합 계산
  const totalBalance = accounts.reduce((acc, account) => acc + account.balance, 0)

  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.bankContainer}>
          <div className={styles.totallAccount}>
            <div className={styles.totale}>총 계좌 잔액</div>
            <div className={styles.totaleAmount}>{totalBalance.toLocaleString()}원</div>
            <div className={styles.underLine}>₩</div>
          </div>
          {/* 추가된 계좌 + 계좌 추가 버튼 영역 */}
          {/* 각 은행은 별 해당 페이지로 랜딩  */}
          <div className={styles.bankAccount}>
            <div className={styles.banks}>
              <Link className={styles.linkedBank} to="/user/:username/account/banks/:bankName">
                {accounts.map((account, index) => (
                  <SelectAccount
                    key={index}
                    bankName={account.bankName}
                    accountNumber={account.accountNumber}
                    balance={account.balance}
                  />
                ))}
              </Link>
              <Link className={styles.addBank} to="/user/:username/account/addAccount">
                <div className={styles.btn}>
                  <span>+</span>
                  <span className={styles.add}>계좌 추가</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
