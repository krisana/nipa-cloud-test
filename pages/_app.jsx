import React from 'react'
import App from 'next/app'
import { Provider } from 'react-redux'
import { ToastProvider } from 'react-toast-notifications'
import configureStore from '../redux'
const store = configureStore()

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

export default MyApp