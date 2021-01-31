import React from 'react'
import Layout from '../layouts'

function HomePage() {
  return (
    <Layout>
      <div className="py-5">
        <h1 className="text-center mb-0">Welcome to Krisana</h1>
        <small className="text-center d-block text-secondary mb-3"><i>For Frontend Developer</i></small>
        <h6 className="text-center text-secondary">Build frontend application that utilize the Nipa.Cloud Nvision's Object Detection API</h6>
      </div>
    </Layout>
  )
}

export default HomePage