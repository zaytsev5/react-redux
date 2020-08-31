import { FETCH_POSTS, NEW_POST, DEL_POST } from '../actions/types';

const initialState = {
  items: [],
  item: {},
  message:''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
        message:'you have fetched..'

      };
      case DEL_POST:
        return {
          ...state,
          items: action.payload,
          message:'you have deleted'
        };
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
        message:'you have added'
      };
    default:
      return state;
  }
}
