'use client'
import styles from './Book.module.scss'
import formatAvRate from '@/utils/formatAvRate'
import formatDescr from '@/utils/formatDescr'
import formatAuthor from '@/utils/formatAuthor'

type Price = {
  amount: number
  currencyCode: string
}

interface BookType {
  id: string
  imageUrl: string
  authors: string[]
  title: string
  averageRating: number
  ratingCount: number
  description: string
  price: Price
  buyNowHandler: Function
}

export default function Book({
  imageUrl,
  id,
  authors,
  title,
  averageRating,
  ratingCount,
  description,
  price,
  buyNowHandler,
}: BookType) {
  return (
    <li className={styles.book}>
      <div
        style={{
          backgroundImage: `url(${
            imageUrl !== '' ? imageUrl : '/img/placeholderImg.png'
          })`,
        }}
        className={styles.cover}
      ></div>
      <div className={styles.descr}>
        <p className={styles.author}>{formatAuthor(authors)}</p>
        <h2 className={styles.title}>{title && title}</h2>
        <div className={styles.rate}>
          {formatAvRate(averageRating)}
          <span>{ratingCount ? ratingCount : 0} reviews</span>
        </div>
        <p className={styles.text}>{formatDescr(description)}</p>
        <div className={styles.price}>
          {price.currencyCode === 'RUB' ? (
            <span>&#8381;</span>
          ) : (
            price.currencyCode
          )}{' '}
          {price.amount}
        </div>
        <button onClick={() => buyNowHandler(id)} className={styles.buyBtn}>
          buy now
        </button>
      </div>
    </li>
  )
}