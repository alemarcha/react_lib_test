import { helloConstants } from "../constants/hello.constants";

export const helloActions = {
    helloAction
};

function helloAction() {
    return dispatch => {
      dispatch(request());
    };
  
    function request() {
      return { type: helloConstants.HELLO_REDUCER };
    }
  }