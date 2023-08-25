import React, { useState, useEffect } from 'react'
import Modal from '@/components/common/Modal'
import styles from './index.module.scss'
import Sidebar from '@/components/mypage/nav/SideBar'
import GetItem from '@/components/mypage/productList/GetItem'
import dummyGoods1 from '@/pages/payment/dummyGoods1.json'
import dummyGoods2 from '@/pages/payment/dummyGoods2.json'
import { Products, Product } from '@/types/product'

export default function BankName() {
  const [getItem, setGetItem] = useState<Products>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleModalOpen = () => {
    setIsModalOpen(true)
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
  }

  useEffect(() => {
    const storedJjimItems = localStorage.getItem('getItem')
    if (storedJjimItems) {
      setGetItem(JSON.parse(storedJjimItems))
    } else {
      localStorage.setItem('getItem', JSON.stringify([dummyGoods1, dummyGoods2]))
      setGetItem([dummyGoods1, dummyGoods2])
    }
  }, [])

  return (
    <>
      <div className={styles.container}>
        <Sidebar />
        <div className={styles.bankContainer}>
          <div className={styles.inner}>
            <div className={styles.innerText}>
              <h1 className={styles.title}>XXX 은행</h1>
              <button onClick={handleModalOpen}>계좌 해지</button>
            </div>
            <div className={styles.bankAccount}>
              <div className={styles.number}>계좌 | XXX-XXXX-XXX</div>
              <div className={styles.totaleAmount}>3,000,000 원</div>
              <div className={styles.underLine}>₩</div>
            </div>
          </div>
          <div className={styles.getList}>
            <hr className={styles.line} />
            <h1 className={styles.title}>거래 내역</h1>
            <div className={styles.item}>
              {getItem.map((item: Product, index: number) => (
                <GetItem key={index} item={item} />
              ))}
            </div>
          </div>
        </div>
        {isModalOpen && (
          <Modal isOpen={isModalOpen} closeModal={handleModalClose}>
            <div className={styles.modalContainer}>
              <div className={styles.textContainer}>
                <img className={styles.bankLogo} src="" alt="" />
                <h1 className={styles.bankName}>국민 은행</h1>
                <h4 className={styles.modalText}>계좌를 해지하시겠습니까?</h4>
              </div>
              <div className={styles.btnContainer}>
                <button type="reset" onClick={handleModalClose} className={`${styles.btnTag} ${styles.cancel}`}>
                  아니오
                </button>
                <button type="button" className={`${styles.btnTag} ${styles.enrolled}`}>
                  예
                </button>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  )
}
