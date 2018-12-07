import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import Characters from './components/characters';

// const store = createStore(() => [], {}, applyMiddleware());

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Characters/>
        </div>
      </Provider>
    );
  }
}

export default App;
