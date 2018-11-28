import React, {Component}from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import MyApp from './MyApp';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore'

store = configureStore();

class App extends Component {


  render() {
    return (
        <Provider store = {store}>
          <MyApp />
        </Provider>
    );
  }
}


export default App;