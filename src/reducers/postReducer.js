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
        message:'You have fetched posts..'

      };
      case DEL_POST:
        return {
          ...state,
          items: action.payload,
          message:'You have deleted a post.'
        };
    case NEW_POST:
      return {
        ...state,
        item: action.payload,
        message:'You have added a post.'
      };
    default:
      return state;
  }
}
