import { FETCH_TABLE } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
  case FETCH_TABLE:
    return action.payload.data;

  default:
    return state;
  }
};