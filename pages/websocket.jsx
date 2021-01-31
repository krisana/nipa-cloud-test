import React, { useState } from 'react'
import { withRouter } from 'next/router'
import { connect } from 'react-redux'
import Camera from 'react-html5-camera-photo'
import 'react-html5-camera-photo/build/css/index.css'
import Layout from '../layouts'
import Response from '../components/Response'

import {
  onUpload
} from '../actions'

function WebSocket(props) {

  const [image, setImage] = useState('')

  async function handleTakePhoto(dataUri) {
    setImage(dataUri)
    const newFileBase64Str = dataUri.replace('data:image/png;base64,', '')
    await props.onUpload({ rawData: newFileBase64Str })
  }

  return (
    <Layout>
      <div className="row">
        <div className="col-6">
          <h4>Take photo</h4>
          <Camera
            onTakePhoto={(dataUri) => { handleTakePhoto(dataUri) }}
          />
          <img className="image-preview" src={image} alt="" srcSet={image} />
        </div>
        <div className="col-6">
          <h4>Response</h4>
          <Response data={props.detectionService} loading={props.loading} />
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => {

  const {
    detectionService,
    loading
  } = state.upload

  return {
    loading,
    detectionService,
  }
}

export default withRouter(connect(mapStateToProps, { onUpload })(WebSocket))