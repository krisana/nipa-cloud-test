import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">Krisana</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active" style={{ marginRight: '1rem' }}>
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item" style={{ marginRight: '1rem' }}>
              <a className="btn btn-primary" href="/restful">Upload Image</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-success" href="/websocket">Take Photo</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
