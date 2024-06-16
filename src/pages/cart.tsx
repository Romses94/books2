import styles from '@/styles/Cart.module.scss'
import type { Cart } from '../types'
import formatAuthor from '@/utils/formatAuthor'
import formatAvRate from '@/utils/formatAvRate'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { useEffect } from 'react'
import { cartSlice } from '../store/cartSlice'

export default function Cart() {
  const dispatch = useAppDispatch()
  const { items, total } = useAppSelector((state) => state.cart)
  useEffect(() => {
    const LSstate = localStorage.getItem('persist:root')
    const parsedLSstate = LSstate ? JSON.parse(LSstate) : {}
    const curCart = JSON.parse(parsedLSstate.cart)
    dispatch(cartSlice.actions.getCartItems(curCart.items))
  }, [])
  return (
    <div className={styles.cart}>
      <div className={styles.container}>
        <h2 className={styles.title}>Shopping cart</h2>
        <ul className={styles.fields}>
          <li>item</li>
          <li>quantity</li>
          <li>price</li>
          <li>delivery</li>
        </ul>
        <ul className={styles.cartList}>
          {+items.length ? (
            items.map((item:any) => {
              return (
                <li key={item.id}>
                  <div className={styles.book}>
                    <div
                      style={{
                        backgroundImage: `url(${
                          item.book.imageUrl !== ''
                            ? item.book.imageUrl
                            : '/img/placeholderImg.png'
                        })`,
                      }}
                      className={styles.cover}
                    ></div>
                    <div className={styles.descr}>
                      <h2 className={styles.title}>
                        {item.book.title && item.book.title}
                      </h2>
                      <p className={styles.author}>
                        {formatAuthor(item.book.authors)}
                      </p>
                      <div className={styles.rate}>
                        {formatAvRate(item.book.averageRating)}
                        <span>
                          {item.book.ratingCount ? item.book.ratingCount : 0}{' '}
                          reviews
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.quantity}>
                    <div className={styles.counter}>
                      <button
                        onClick={() => {
                          dispatch(
                            cartSlice.actions.changeQantity(['minus', item.id])
                          )
                        }}
                      >
                        <svg
                          width="22"
                          height="5"
                          viewBox="0 0 22 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.2143 2.5C21.2143 3.36426 20.512 4.0625 19.6428 4.0625H2.35713C1.48794 4.0625 0.785706 3.36426 0.785706 2.5C0.785706 1.63574 1.48794 0.9375 2.35713 0.9375H19.6428C20.512 0.9375 21.2143 1.63574 21.2143 2.5Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                      <span>{item.qantity}</span>
                      <button
                        onClick={() => {
                          dispatch(
                            cartSlice.actions.changeQantity(['plus', item.id])
                          )
                        }}
                      >
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9 1.75C9 0.920312 9.67031 0.25 10.5 0.25C11.3297 0.25 12 0.920312 12 1.75V8.5H18.75C19.5797 8.5 20.25 9.17031 20.25 10C20.25 10.8297 19.5797 11.5 18.75 11.5H12V18.25C12 19.0797 11.3297 19.75 10.5 19.75C9.67031 19.75 9 19.0797 9 18.25V11.5H2.25C1.42031 11.5 0.75 10.8297 0.75 10C0.75 9.17031 1.42031 8.5 2.25 8.5H9V1.75Z"
                            fill="black"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className={styles.price}>
                    {item.book.price.currencyCode === 'RUB' ? (
                      <span>&#8381;</span>
                    ) : (
                      item.book.price.currencyCode
                    )}{' '}
                    {item.book.price.amount
                      ? item.book.price.amount
                      : 'Not price'}
                  </div>
                  <div className={styles.delivery}>
                    Shipping: {item.delivery}
                  </div>
                </li>
              )
            })
          ) : (
            <p>Cart empty</p>
          )}
        </ul>
        <div className={styles.total}>Total price: {total.toFixed(2)}</div>
        <button className={styles.checkout}>checkout</button>
      </div>
    </div>
  )
}
