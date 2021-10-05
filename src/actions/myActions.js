// FOR EACH FLOW YOU NEED TO CREATE A NEW ACCTION FILE
import * as actionTypes from './actionTypes'

// AXIOS
import axios from 'config/axios'
// eslint-disable-next-line
import { makeOptions, makePostOptions } from 'utils/utility'

export const getAction = () => dispatch => {
  const url = `/api/url`

  dispatch({
    type: actionTypes.TEST_ACTION_START,
  })

  return axios
    .get(url, makeOptions())
    .then(response => {
      dispatch({
        type: actionTypes.TEST_ACTION_SUCCESS,
        payload: response,
      })
      return response
    })
    .catch(error => {
      dispatch({
        type: actionTypes.TEST_ACTION_FAIL,
        error,
      })
      return Promise.reject(error)
    })
}
