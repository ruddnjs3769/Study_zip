import React, { useState, useEffect } from 'react'
import styles from './index.module.scss'
import SideBarItem from '@/components/mypage/nav/SideBarItem'
import GetItemMore from '@/components/mypage/productList/GetItemMore'
import dummyGoods1 from '@/pages/payment/dummyGoods1.json'
import dummyGoods2 from '@/pages/payment/dummyGoods2.json'
import { Products, Product } from '@/types/product'

export default function GetItemAll() {
  const [jjimItem, setJjimItem] = useState<Products>([])

  // 찜한 상품 삭제 함수
  const handleRemoveCartItem = (index: number) => {
    const updatedItem = [...jjimItem]
    updatedItem.splice(index, 1)
    localStorage.setItem('jjimItem', JSON.stringify(updatedItem))
    setJjimItem(updatedItem)
  }
  
  // 찜한 상품 없어서 dummy를 LocalStorage에 넣어둠
  useEffect(() => {
    const storedJjimItems = localStorage.getItem('jjimItem')
    if (storedJjimItems) {
      setJjimItem(JSON.parse(storedJjimItems))
    } else {
      localStorage.setItem('jjimItem', JSON.stringify([dummyGoods1, dummyGoods2]))
      setJjimItem([dummyGoods1, dummyGoods2])
    }
  }, [])

  //api연동 후에 제품 상세페이지 + 썸네일 타이틀?에 '찜하기 버튼' setItem 실행, getItem으로 받아오기만 할 것.
  return (
    <>
      <div className={styles.container}>
        <SideBarItem />
        <section className={styles.section}>
          <span className={styles.title}>구매 내역</span>
          <hr className={styles.line} />
          <div>
            <ul className={styles.jjimItem}>
              {jjimItem.map((item: Product, index: number) => (
                <GetItemMore key={index} item={item} onRemove={() => handleRemoveCartItem(index)} />
              ))}
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}
