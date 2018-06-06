import { byeConstants } from "../constants/bye.constants";

const initialState = { bye_value:false };

export function byeFunc(state = initialState, action) {
  switch (action.type) {
    case byeConstants.BYE_REDUCER:
      return {
        bye_value: true
      };
    default:
      return state;
  }
}