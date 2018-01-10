import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Navigator from './Navigator';
import Config from './config';


class App extends React.Component {
  componentWillMount() {
    const config = new Config();
    // Initialize Firebase
    const dbconfig = config.db;
    console.log('config', config);
    firebase.initializeApp(dbconfig);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export default App;
