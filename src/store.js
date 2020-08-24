import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import { userReducer } from './reducers';


const combinedReducer = combineReducers({
  form: formReducer,
  userReducer: userReducer
});

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(combinedReducer, middleware);

export default store;
