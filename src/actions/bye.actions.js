import { byeConstants } from "../constants/bye.constants";
import { helloActions } from "../actions/hello.actions";

export const byeActions = {
    byeAction
};

function byeAction() {
    return dispatch => {
      dispatch(helloActions.helloAction())
      dispatch(request_bye());
    };
  
    function request_bye() {
      return { type: byeConstants.BYE_REDUCER };
    }
  }