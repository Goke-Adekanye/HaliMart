import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//reducers
import dataReducer from "./reducers/dataReducer";

const initialState = {};

const middleware = [thunk];

//combining and assigning imported Reducers to new-state
const reducers = combineReducers({
  //   user: userReducer,
  data: dataReducer,
  //   UI: uiReducer,
});

//creating store
const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

//store basically contains the application state
export default store;
