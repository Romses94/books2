'use client'
import styles from './Books.module.scss'
import Book from './Book'

export default function Books({ books, buyNowHandler }: any) {
  return (
    <ul className={styles.books}>
      {books.map((book: any) => (
        <Book
          key={book.id}
          id={book.id}
          imageUrl={book.volumeInfo.imageLinks.thumbnail}
          authors={book.volumeInfo.authors}
          title={book.volumeInfo.title}
          averageRating={book.volumeInfo.averageRating}
          ratingCount={book.volumeInfo.ratingsCount}
          description={book.volumeInfo.description}
          price={book.saleInfo.listPrice ? book.saleInfo.listPrice : ''}
          buyNowHandler={buyNowHandler}
        />
      ))}
    </ul>
  )
}
