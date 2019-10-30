import countriesReducer from "./restcountriesReducer";
import tamkcountriesReducer from "./tamkcountriesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  countriesReducer,
  tamkcountriesReducer
});

export default rootReducer;
