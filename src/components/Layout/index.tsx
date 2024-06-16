'use client'
import { PropsWithChildren } from 'react'
import Header from '../Header'
import styles from './Layout.module.scss'
export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main className={styles.layout}>{children}</main>
    </>
  )
}
