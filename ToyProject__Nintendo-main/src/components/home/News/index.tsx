import React from 'react'
import styles from './index.module.scss'

const news = [
  {
    id: '123123',
    title:
      '대인원과 즐기는 파티 필수품! 『Everybody 1-2-Switch!』가 6월 30일 Nintendo Switch로 발매 예정! 오늘부터 다운로드 버전의 예약 판매가 시작됩니다.',
    link: 'https://www.nintendo.co.kr/news/article/17fO9m2I7rKn1Q3DZuNJnQ',
    category: '뉴스',
    thumbnail: '/images/home/news/switch_news2.webp',
    createdAt: '2023.6.2'
  },
  {
    id: '123124',
    title: '쾌적한 실내에서 기르는 운동 습관! 『링 피트 어드벤처』로 피트니스를 시작해보는 건 어떨까요?',
    link: 'https://www.nintendo.co.kr/news/article/ZJTbYAvNuzr8RE2kuddu2',
    category: '뉴스',
    thumbnail: '/images/home/news/ringfit_news2.webp',
    createdAt: '2023.6.1'
  },
  {
    id: '143126',
    title: '『스플래툰 3』의 뉴 시즌 「2023여름 Sizzle Season」이 6월 1일 개막.',
    link: 'https://www.nintendo.co.kr/news/article/6fN79LttsK0KLAFWqGEY4j',
    category: '뉴스',
    thumbnail: '/images/home/news/splatoon3_news.webp',
    createdAt: '2023.5.27'
  },
  {
    id: '143133',
    title: 'Nintendo Switch 소프트웨어 특집 「Nintendo Switch로 즐길 수 있는 젤다의 전설 소프트웨어」 추천',
    link: 'https://www.nintendo.co.kr/guide/software/zelda.html',
    category: '뉴스',
    thumbnail: '/images/home/news/zelda_news.webp',
    createdAt: '2023.5.25'
  },
  {
    id: '124124',
    title: 'Nintendo Switch 『디즈니 일루전 아일랜드』가 닌텐도 e숍에서 예약 판매 중!',
    link: 'https://www.nintendo.co.kr/guide/software/zelda.html',
    category: '뉴스',
    thumbnail: '/images/home/news/disny_news.webp',
    createdAt: '2023.5.18'
  },
  {
    id: '125125',
    title: '인터뷰 「개발자에게 물어보았습니다」 『젤다의 전설 티어스 오브 더 킹덤』편이 공개되었습니다.',
    link: 'https://www.nintendo.co.kr/news/article/enfAEaDiv5ld8kCI0vhSL',
    category: '뉴스',
    thumbnail: '/images/home/news/zelda_news2.webp',
    createdAt: '2023.5.11'
  },
  {
    id: '126922',
    title: '『젤다의 전설 브레스 오브 더 와일드』 당신이 모르는 하이랄 하이랄 전토가 공개되었습니다.',
    link: 'https://www.nintendo.co.kr/zelda/botw/discovery/ex.html',
    category: '뉴스',
    thumbnail: '/images/home/news/zelda_news3.webp',
    createdAt: '2023.5.9'
  },
  {
    id: '126222',
    title: '『젤다의 전설 브레스 오브 더 와일드』 스토리 트레일러가 공개되었습니다.',
    link: 'https://www.youtube.com/watch?v=5TKrMMsMP9w',
    category: '뉴스',
    thumbnail: '/images/home/news/zelda_news4.webp',
    createdAt: '2023.5.9'
  }
]

export default function News() {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <h2>새롭게 알려드립니다.</h2>
        <p>News & Update</p>
      </div>
      <ul className={styles.list}>
        {news.map((item) => {
          return (
            <li className={styles.item} key={item.id}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <div>
                  <img src={`${item.thumbnail}`} alt="news thumbnail" />
                </div>
                <p className={styles.title}>{item.title}</p>
                <div className={styles.info}>
                  <div>
                    <p>{item.category}</p>
                    <p>{item.createdAt}</p>
                  </div>
                  <div className={styles.arrow}>{'>'}</div>
                </div>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
