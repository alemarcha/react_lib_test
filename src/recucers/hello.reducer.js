import { helloConstants } from "../constants/hello.constants";

const initialState = { hello_value: false };

export function helloFunc(state = initialState, action) {
  switch (action.type) {
    case helloConstants.HELLO_REDUCER:
      return {
        hello_value: true
      };
    default:
      return state;
  }
}