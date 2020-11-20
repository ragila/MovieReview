import React, {useState} from 'react';
import {StatusBar, ActivityIndicator} from 'react-native';
import AppStack from './src/navigator/AppStack';
import {Provider} from 'react-redux'
import store from './src/store'

export default function App() {
  return( 
    <Provider store={store}>
      <StatusBar barStyle="dark-content"/>
      <AppStack/>
    </Provider>
  )
}