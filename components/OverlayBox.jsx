import React from 'react'
import Loader from 'react-loader-spinner'

function OverlayBox({ data, loading = false }) {
  return (
    <div className="code-container">
      {
        loading
          ?
          <div className="d-flex align-items-center justify-content-center">
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
            />
          </div>
          :
          <pre>
            <code>
              {data && JSON.stringify(data, null, 2)}
            </code>
          </pre>
      }
    </div>
  )
}

export default OverlayBox