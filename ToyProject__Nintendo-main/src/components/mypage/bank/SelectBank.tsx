import React, { useState } from 'react'
import styles from './SelectBank.module.scss'
// import { Banks, AccountsBalance } from '@/types/account'
import BankBtn from '@/components/common/BankBtn'
import Modal from '@/components/common/Modal'
// 이 파일에 버튼 클릭 이벤트 사용 + 모달창 띄우기

export default function SelectBank() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }
  // const dummyAccounts: AccountsBalance = {
  //   totalBalance: 12341234, // 사용자 계좌 잔액 총합
  //   accounts: []
  // }
  // const Banks : Banks{
  // // 사용자 계좌 정보
  // id: '1', // 계좌 ID
  // bankName: '-은행', // 은행 이름
  // bankCode: 12341234, // 은행 코드
  // accountNumber: "", // 계좌 번호
  // balance: 3333333, // 계좌 잔액
  // }

  // interface EnabledBank {
  //   name: string // 은행 이름
  //   code: string // 은행 코드
  //   digits: number[] // 은행 계좌 자릿수
  //   disabled: boolean // 사용자가 추가한 계좌 여부
  // }

  return (
    <>
      <button className={styles.btn} onClick={handleModalOpen}>
        <BankBtn />
      </button>
      {isModalOpen && (
        <Modal isOpen={isModalOpen} closeModal={handleModalClose}>
          <div className={styles.modalContainer}>
            <div className={styles.textContainer}>
              <img className={styles.bankLogo} src="" alt="" />
              <h1 className={styles.bankName}>국민 은행</h1>
            </div>
            <hr className={styles.line} />
            <ol className={styles.listsContainer}>
              <li className={styles.list}>
                <label className={styles.label} htmlFor="text">
                  계좌번호
                </label>
                <form className={styles.inputForm}>
                  <input
                    id="text"
                    className={`${styles.inputTag} ${styles.displayName}`}
                    type="text"
                    name="text"
                    placeholder="계좌번호"
                    required
                  />
                  <span className={styles.errorMsg}>계좌번호를 확인해 주세요.</span>
                </form>
              </li>
              <li className={styles.list}>
                <label className={styles.label} htmlFor="tel">
                  전화번호
                </label>
                <form className={styles.inputForm}>
                  <input
                    id="tel"
                    className={`${styles.inputTag} ${styles.tel}`}
                    type="tel"
                    name="tel"
                    placeholder="{고객 tel 데이터}"
                    required
                  />
                  <span className={styles.errorMsg}>전화번호를 확인해 주세요.</span>
                </form>
              </li>
            </ol>
            <hr className={styles.line} />
            <div className={styles.btnContainer}>
              <button type="reset" onClick={handleModalClose} className={`${styles.btnTag} ${styles.cancel}`}>
                취소
              </button>
              <button type="button" className={`${styles.btnTag} ${styles.enrolled}`}>
                등록
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}
