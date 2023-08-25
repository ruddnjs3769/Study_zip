import React from 'react'
import styles from './GetItem.module.scss'
import { Product } from '@/types/product'

interface Props {
  item: Product
}

export default function GetItem({ item }: Props) {
  return (
    <a className={`${styles.aTag} ${styles.container}`} href={'/detail/:productId'}>
      <div className={styles.itemThumbnail}>
        <img
          className={styles.itemImg}
          src={
            item.thumbnail ||
            'https://store.nintendo.co.kr/media/catalog/product/cache/559013652f8c31ac036888adc145c37f/f/i/file.jpg'
          }
          alt=""
        />
      </div>
      <span className={`${styles.spanTag} ${styles.itemTitle}`}>
        {item.title} : 제품명이 들어가는 자리제품명제품명제품명
      </span>
      <span className={`${styles.spanTag} ${styles.itemPrice}`}>{item.price} 원</span>
    </a>
  )
}
