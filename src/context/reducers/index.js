import { combineReducers } from "redux";
import userReducer from "./userReducers";
import alertReducers from "./alertReducers";

const myReducers = combineReducers({
  user: userReducer,
  alert: alertReducers,
});

export default myReducers;
