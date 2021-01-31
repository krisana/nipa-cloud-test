import React, { useState } from 'react'
import { withRouter } from 'next/router'
import { connect } from 'react-redux';
import Layout from '../layouts'
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import OverlayBox from '../components/OverlayBox'

import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

import {
  onUpload
} from '../actions'

function Restfull(props) {

  const [files, setFiles] = useState()

  function getBase64(file) {
    return new Promise((resolve, reject) => {
      if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
        const reader = new FileReader()
        reader.addEventListener("load", function () {
          // convert image file to base64 string
          resolve(reader.result)
        }, false);
        reader.onerror = function (error) {
          console.log('Error: ', error);
          reject()
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      }
    })
  }

  async function onUpdateFile(fileItem) {
    if (fileItem) {

      const fileBase64 = await getBase64(fileItem.file),
        fileBase64Str = fileBase64.toString(),
        fileType = fileItem.file.name.split('.').pop().toLowerCase(),
        newFileBase64Str = fileBase64Str.replace('data:image/' + fileType + ';base64,', '')

      await props.onUpload({ rawData: newFileBase64Str })
    }
  }

  return (
    <Layout>
      <div className="row">
        <div className="col-6">
          <h4>Upload</h4>
          <FilePond
            files={files}
            allowMultiple={false}
            name="files"
            labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
            onupdatefiles={(items) => {
              console.log('items', items)
              setFiles(items)
              if (items.length > 0) {
                items.map(fileItem => onUpdateFile(fileItem))
              }
            }}
          />
        </div>
        <div className="col-6">
          <h4>Response</h4>
          <OverlayBox data={props.detectionService} loading={props.loading} />
        </div>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => {

  const {
    detectionService,
    loading
  } = state.upload;

  return {
    loading,
    detectionService,
  };
};

export default withRouter(connect(mapStateToProps, { onUpload })(Restfull));