// import actiontypes
import * as actionTypes from '../actions/index';

const initialState = {
  boards: [],
  articles: [],
  user_info: {},
  fetchingArticles: false,
  fetchingBoards: false,
  isLoggingIn: false,
  error: "",
  postingArticles: false,
  isRegistering: false,
  isLoggingOutl: false,
  postingBoards: false,
  deletingBoard: false,
  deletingArticle: false,
  editingArticle: false
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOG_START:
      return {
        ...state,
        isLoggingIn: true,
        error: ""
      };
    case actionTypes.LOG_SUCCESS:
      return {
        ...state,
        isLoggingIn: false
      };
    case actionTypes.LOG_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoggingIn: false
      };
    case actionTypes.REG_START:
      return {
        ...state,
        isRegistering: true
      };
    case actionTypes.REG_SUCCESS:
      return {
        ...state,
        isRegistering: false
      };
    case actionTypes.REG_FAIL:
      return {
        ...state,
        error: action.payload
      };
      case actionTypes.LOG_OUT:
      return {
          ...state,
          isLoggingOut: true
      }
      // test erica get all 
      case actionTypes.GET_ALL_START: 
      return {
          ...state,
          fetchingBoards: true
      }
      case actionTypes.GET_ALL_SUCCESS:
      return {
          ...state,
          fetchingBoards: false,
          boards: action.payload.boards
      }
      case actionTypes.GET_ALL_FAIL:
      return {
          ...state,
          error: action.payload
      }
      // end test erica get all
      case actionTypes.GET_BOARDS_START: 
      return {
          ...state,
          fetchingBoards: true
      }
      case actionTypes.GET_BOARDS_SUCCESS:
      return {
          ...state,
          fetchingBoards: false,
          boards: action.payload
      }
      case actionTypes.GET_BOARDS_FAIL:
      return {
          ...state,
          error: action.payload
      }
      case actionTypes.ADD_BOARDS_START:
      return {
          ...state,
          postingBoards: true,
      }
      case actionTypes.ADD_BOARDS_SUCCESS:
      return {
          ...state,
          postingBoards: false,
          boards: [...state.boards, {...action.payload}]
      }
      case actionTypes.ADD_BOARDS_FAIL:
      return {
          ...state,
          error: action.payload
      }
      case actionTypes.GET_ARTICLES_START:
      return {
          ...state,
          fetchingArticles: true
      }
      case actionTypes.GET_ARTICLES_SUCCESS:
      return {
          ...state, 
          fetchingArticles: false,
          articles: action.payload
      }
      case actionTypes.GET_ARTICLES_FAIL:
      return {
          ...state,
          error: action.payload
      }
      case actionTypes.ADD_ARTICLES_START:
      return {
          ...state,
          postingArticles: true
      }
      case actionTypes.ADD_ARTICLES_SUCCESS:
      return {
          ...state,
          postingArticles: false,
          articles: [...state.articles, {...action.payload}]
      }
      case actionTypes.ADD_ARTICLES_FAIL:
      return {
          ...state,
          error: action.payload
      }
      case actionTypes.DELETE_BOARD_START:
      return {
          ...state,
          deletingBoard: true
      }
      case actionTypes.DELETE_BOARD_SUCCESS:
      return {
          ...state,
          deletingBoard: false,
          boards: [...state.articles, {...action.payload}]
      }
      case actionTypes.DELETE_BOARD_FAIL:
      return {
          ...state,
          error: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
