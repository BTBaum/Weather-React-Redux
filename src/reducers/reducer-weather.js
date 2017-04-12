import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {

  switch(action.type) {
    case FETCH_WEATHER:
      // In Redux never manipulate your state directly
      // ex. state.push(action.payload.data);
      // that would manipulate the existing [] state

      // Instead create an entirely new [] state
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ];
  }
  return state;
}
