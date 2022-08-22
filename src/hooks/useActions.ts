import { bindActionCreators } from "redux";
import { useTypedDispatch } from "./useTypedDispatch";
import * as UserActionCreators from '../store/action-creators/users';

export const useActions = () => {
  const dispatch = useTypedDispatch();

  return bindActionCreators(UserActionCreators, dispatch);
};