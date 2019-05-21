import * as actionTypes from "../actions";


const initialState = {
  boards: [],
  loggedIn: false,
  error: "",
  registered: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_START:
      return {
        ...state,
        loggedIn: true,
        error: ""
      };
    case actionTypes.LOG_SUCCESS:
      return {
        ...state,
        loggedIn: false
      };
    case actionTypes.LOG_FAIL:
      return {
        ...state,
        error: action.payload,
        loggedIn: false
      };
    case actionTypes.REG_START:
    return {
        ...state,
        registered: true
    }
    case actionTypes.REG_SUCCESS:
    return {
        ...state,
        registered: false
    }
    case actionTypes.REG_FAIL:
    return {
        ...state,
        error: action.payload
    }
    default:
      return state;
  }
};

export default reducer;