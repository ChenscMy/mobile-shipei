import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducer from "./reducer";

const middleware = composeWithDevTools(applyMiddleware(thunk))

export default createStore(reducer, middleware);
