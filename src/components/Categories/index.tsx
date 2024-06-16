'use client'
import styles from './Categories.module.scss'

interface Categories {
  categories: string[]
  active: number
  setActiveCategory: Function
}

export default function Categories({
  categories,
  active,
  setActiveCategory,
}: Categories) {
  return (
    <ul className={styles.categories}>
      {categories.map((category, index) => (
        <li
          key={index}
          className={active === index ? styles.active : ''}
          id={index.toString()}
          onClick={() => setActiveCategory(index)}
        >
          {category}
        </li>
      ))}
    </ul>
  )
}
