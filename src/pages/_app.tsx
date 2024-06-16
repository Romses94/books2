import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { setupStore, persistor } from '../store/store'
import Layout from '@/components/Layout'
import '../styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={setupStore()}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  )
}