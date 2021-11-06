import {
  LOAD_LIST,
  LOAD_SUCCESS,
  END,
  LOAD_CONTINUATION_SUCCESS,
  LOAD_FAIL,
  LOAD_CONTINUATION_FAIL,
  CANCEL,
  CONTINUATION,
} from './actionTypes';

export const loadNewsList = () => {
  return {
    type: LOAD_LIST,
  }
}

export const loadSuccess = (respons) => {
  const list = respons;
  return {
    type: LOAD_SUCCESS,
    payload: { list },
  }
}

export const loadFail = () => {
  return {
    type: LOAD_FAIL,
  }
}

export const loadContinuation = (lastSeenId) => {
  return {
    type: CONTINUATION,
    payload: { lastSeenId }
  }
}

export const loadContinuationSuccess = (respons) => {
  if (respons.length < 5) {
    return {
      type: END,
      payload: { respons }
    }
  } else {
    return {
      type: LOAD_CONTINUATION_SUCCESS,
      payload: { respons }
    }
  }
  
}

export const loadContinuationFail = () => {
  return {
    type: LOAD_CONTINUATION_FAIL,
  }
}

export const cancel = () => {
  return {
    type: CANCEL,
  }
}