import React from 'react';
import {SafeAreaView,StyleSheet,ScrollView, View,Text,StatusBar,} from 'react-native';
import LoginScreen from './src/screens/Login';
import Register from './src/screens/Register';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
         <LoginScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container :{
   backgroundColor:'#222',
   height:'100%',
   alignItems:'center'
  }
});

export default App;
