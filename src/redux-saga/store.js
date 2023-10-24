import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, createStore } from "redux";
import { rootSaga } from "./Saga";
import createSagaMiddleware from "redux-saga"; 
import rootreducer from "./rootreducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootreducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
