import React from 'react'
import Navbar from './Navbar'
import Head from 'next/head'

import '../styles/app.scss';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossOrigin="anonymous" />
      </Head>
      <Navbar />
      <main className="py-5">
        <div className="container">
          {children}
        </div>
      </main>
    </>
  )
}
