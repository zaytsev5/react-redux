import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';

import Posts from './components/Posts';
import AddForm from './components/AddForm';

import store from './store';

class App extends Component {
  state = {
    added : true
  };
  handleAddPost = () => {
    this.setState({added: !this.state.added});
    console.log("haha");
    // this.state.added = true
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
         { this.state.added && <AddForm /> }
          <hr />
          <Posts/>
        </div>
      </Provider>
    );
  }
}

export default App;
