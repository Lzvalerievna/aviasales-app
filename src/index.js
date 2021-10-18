import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './redux/reducer';
import App from './components/App/App';

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const  loggerMiddleware = store => next => action => {
  const result = next(action)
  /*
  console.log('Middleware', store.getState())
  */
  return result
}

const store = createStore(reducer, composeEnhancers(applyMiddleware(loggerMiddleware, ReduxThunk)))

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'));