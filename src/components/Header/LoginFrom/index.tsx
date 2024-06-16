'use client'
import { useState } from 'react'
import styles from './LoginForm.module.scss'

export default function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form
      action={`http://localhost:3000/api/auth`}
      method="post"
      className={styles.loginForm}
    >
      <h2>Log in</h2>
      <label htmlFor="email">email</label>
      <input
        name="email"
        onChange={(e) => setEmail(e.target.value)}
        id="email"
        placeholder="Enter your email"
        type="email"
        value={email}
        required
      />
      <label htmlFor="pass">password</label>
      <input
        className={password.length < 6 ? styles.error : ''}
        name="password"
        onChange={(e) => setPassword(e.target.value)}
        id="pass"
        placeholder="Enter your password"
        type="password"
        value={password}
        required
      />
      {password.length < 6 && (
        <p className={styles.errorText}>
          Your password must be at least 6 characters long
        </p>
      )}
      <button type="submit">Log in</button>
    </form>
  )
}
