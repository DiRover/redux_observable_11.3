import {
  LOAD_SERVICES_LIST,
  LOAD_SUCCESS,
  LOAD_DESCRIPTION,
  LOAD_DESCRIPTION_SUCCESS,
  LOAD_FAIL,
  LOAD_DESCRIPTION_FAIL,
  CANCEL,
} from './actionTypes';

export const loadServicesList = () => {
  return {
    type: LOAD_SERVICES_LIST,
  }
}

export const loadSuccess = (respons) => {
  const list = respons;
  return {
    type: LOAD_SUCCESS,
    payload: { list },
    loading: false,
  }
}

export const loadFail = () => {
  return {
    type: LOAD_FAIL,
  }
}

export const loadDescription = (id) => {
  return {
    type: LOAD_DESCRIPTION,
    payload: { id }
  }
}

export const loadDescriptionSuccess = (respons) => {
  return {
    type: LOAD_DESCRIPTION_SUCCESS,
    payload: { respons }
  }
}

export const loadDescriptionFail = () => {
  return {
    type: LOAD_DESCRIPTION_FAIL,
  }
}

export const cancel = () => {
  return {
    type: CANCEL,
  }
}