'use client'
import styles from './Header.module.scss'
import userIcon from '../../../public/img/userIcon.png'
import cartIcon from '../../../public/img/cartIcon.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import LoginForm from './LoginFrom'

export default function Header() {
  const [userFormActive, setLoginFormActive] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.logo}>
          <Link href="/">Bookshop</Link>
        </h1>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#">books</a>
            </li>
            <li>
              <a href="#">audiobooks</a>
            </li>
            <li>
              <a href="#">stationery & gifts</a>
            </li>
            <li>
              <a href="#">blog</a>
            </li>
          </ul>
        </nav>
        <div className={styles.buttons}>
          <ul>
            <li>
              <Image
                onClick={() => setLoginFormActive(!userFormActive)}
                src={userIcon}
                alt="user"
              />
              {userFormActive && <LoginForm />}
            </li>
            <li>
              <Link href="/cart" className={styles.cartBtn}>
                <Image src={cartIcon} alt="cart" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
