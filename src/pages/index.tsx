import Head from 'next/head'
import styles from '@/styles/Home.module.scss'
import Categories from '@/components/Categories'
import Books from '@/components/Books'
import { useEffect, useState } from 'react'
import { useAppDispatch } from '../hooks/redux'
import { cartSlice } from '../store/cartSlice'

export async function getServerSideProps() {
  const res = await fetch(
    `${process.env.API_HOST}/books?subject=Architecture&startIndex=${0}`
  )
  const data = await res.json()
  return {
    props: {
      books: data.booksData.items,
    },
  }
}

export default function Home({ books }: any) {
  const dispatch = useAppDispatch()
  const categories = [
    'Architecture',
    'Art & Fashion',
    'Biography',
    'Business',
    'Crafts & Hobbies',
    'Drama',
    'Fiction',
    'Food & Drink',
    'Health & Wellbeing',
    'History & Politics',
    'Humor',
    'Poetry',
    'Psychology',
    'Science',
    'Technology',
    'Travel & Maps',
  ]
  const [activeCategory, setActiveCategory] = useState(0)
  const [curBooks, setBooks] = useState([])
  const [startIndex, setStartIndex] = useState(0)
  useEffect(() => {
    setBooks(books)
  }, [])

  useEffect(() => {
    fetch(`/api/books?subject=${categories[activeCategory]}&startIndex=${0}`)
      .then((data) => data.json())
      .then((data) => setBooks(data.booksData.items))
  }, [activeCategory])

  useEffect(() => {
    fetch(
      `/api/books?subject=${categories[activeCategory]}&startIndex=${startIndex}`
    )
      .then((data) => data.json())
      .then((data) => setBooks(data.booksData.items))
  }, [startIndex])

  const loadMoreHandler = () => {
    setStartIndex(startIndex + 6)
  }

  const buyNowHandler = (id: string) => {
    const clickedBook = curBooks.find((book: any) => book.id === id)
    dispatch(cartSlice.actions.addCartItem(clickedBook))
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.home}>
        <div className={styles.container}>
          <section className={styles.booksSection}>
            <div className={styles.container}>
              <Categories
                categories={categories}
                active={activeCategory}
                setActiveCategory={setActiveCategory}
              />
              <Books buyNowHandler={buyNowHandler} books={curBooks} />
            </div>
            <button
              onClick={() => loadMoreHandler()}
              className={styles.moreBtn}
            >
              LoadMore
            </button>
          </section>
        </div>
      </div>
    </>
  )
}