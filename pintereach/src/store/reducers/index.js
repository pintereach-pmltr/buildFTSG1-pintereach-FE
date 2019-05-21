import * as actionTypes from "../actions";


const initialState = {
  boards: [],
  loggedIn: false,
  error: "",
  registered: false,
//   userId: null
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
      };
    case actionTypes.REG_SUCCESS:
      return {
        ...state,
        registered: false
      };
    case actionTypes.REG_FAIL:
      return {
        ...state,
        error: action.payload
      };
    case actionTypes.BOARD_FETCHING:
      return { ...state, fetching: true };
    //   case actionTypes.SET_ID:
    //     return {
    //         ...state,
    //         userId: action.userId
    //     }
    case actionTypes.BOARD_FETCHED:
      return {
        ...state,
        fetching: false,
        boards: [...state.boards, ...action.payload]
      };
    case actionTypes.BOARD_ADD:
      return {
        ...state,
        boards: [...state.boards,{...action.payload}]
      };
    default:
      return state;
  }
};

export default reducer;