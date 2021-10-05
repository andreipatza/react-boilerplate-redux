// FOR EACH FLOW YOU NEED TO CREATE A NEW REDUCER FILE
import * as actionTypes from '../actions/actionTypes'

const initState = {
  isGettingData: false,
  data: null,
  errorData: null,
}

const myReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.TEST_ACTION_START:
      return {
        ...state,
        isGettingData: true,
      }
    case actionTypes.TEST_ACTION_SUCCESS:
      // HERE YOU CAN MANIPULATE YOUR DATA BEFORE STORE IT INTO STATE
      return {
        ...state,
        isGettingData: false,
        data: action.payload,
      }
    case actionTypes.TEST_ACTION_FAIL:
      return {
        ...state,
        isGettingData: false,
        errorData: action.error,
      }
    default:
      return state
  }
}

export default myReducer
