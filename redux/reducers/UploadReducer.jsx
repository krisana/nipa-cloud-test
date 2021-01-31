import {
  UPLOAD_IMAGE,
  UPLOAD_IMAGE_SUCCESS,
  UPLOAD_IMAGE_FAILED
} from '../../actions/types';

const INITIAL_STATE = {
  detectionService: null,
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE:
      return {
        ...INITIAL_STATE,
        loading: true
      };
    case UPLOAD_IMAGE_SUCCESS:
      return {
        ...state,
        detectionService: action.payload,
        loading: false
      };
    case UPLOAD_IMAGE_FAILED:
      return {
        ...INITIAL_STATE,
        detectionService: action.payload,
        loading: false
      };
    default:
      return state;
  }
};