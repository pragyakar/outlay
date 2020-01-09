import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import firebase from 'firebase/app';
import { createFirestoreInstance, reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, reactReduxFirebase, getFirebase } from 'react-redux-firebase';

import App from './App';
import rootReducer from './store/reducers/rootReducer';
import firebaseConfig from './configs/firebaseConfig';
import './index.css';


const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})), 
    reduxFirestore(firebase, firebaseConfig),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true 
}

const rrfProps = {
  firebase, 
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <App />
    </ReactReduxFirebaseProvider>
  </Provider>
, document.getElementById('root'));