import nvision from '@nipacloud/nvision'

import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILED
} from './types';

const objectDetectionService = nvision.objectDetection({
  apiKey: process.env.RESTFUL_KEY
})

export const onUpload = ({ rawData }) => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch({ type: UPLOAD_IMAGE });
    objectDetectionService.predict({
      rawData: rawData
    }).then((result) => {
      dispatch({ type: UPLOAD_IMAGE_SUCCESS, payload: result });
      resolve(result)
    }).catch(function (error) {
      dispatch({
        type: UPLOAD_IMAGE_FAILED,
        payload: error,
      });
      reject()
    });
  })
}