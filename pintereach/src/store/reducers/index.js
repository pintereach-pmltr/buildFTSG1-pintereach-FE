import * as actionTypes from "../actions";


const initialState = {
  boards: [],
  articles: [],
  loggedIn: false,
  error: "",
  registered: false,
//   userId: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // login reducers
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
    // register reducers
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
    // testing erica new endpoint
    // case actionTypes.ALL_FETCHING:
    //   return { ...state, fetching: true };
    // case actionTypes.ALL_FETCHED:
    //   return {
    //     ...state,
    //     fetching: false,
    //     boards: [...state.boards, ...action.payload]
    //   };
    // end testing erica new endpoint
    // board reducers
    case actionTypes.BOARD_FETCHING:
      return { ...state, fetching: true };
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
    // article reducers
    case actionTypes.ARTICLE_FETCHING:
      return { ...state, fetching: true };
    case actionTypes.ARTICLE_FETCHED:
      return {
        ...state,
        fetching: false,
        articles: [...state.articles, ...action.payload]
      };
    case actionTypes.ARTICLE_ADD:
      return {
        ...state,
        articles: [...state.articles,{...action.payload}]
      };
    case actionTypes.ARTICLE_DELETE:
      return {
          ...state,
          articles: [ ...action.payload]
      };
    // return default
    default:
      return state;
  }
};

export default reducer;