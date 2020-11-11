import React, { Component } from 'react';
import {StyleSheet,View,Text, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';


const posHeight = Dimensions.get('window').height * 0.10;

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contLogo}>
          <Image style={styles.logo} source={require('../images/iconpeople.png')}/>
        </View>
        <View style={styles.contInput}>

          <TextInput
          placeholder='Name'
          style={styles.formInput}
          />

          <TextInput
          placeholder='Username'
          style={styles.formInput}
          />

          <TextInput
          placeholder='Email'
          style={styles.formInput}
          />

          <TextInput
          placeholder='Password'
          style={styles.formInput}
          />

          <View style={styles.conButton}>

            
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.conText}>
              <Text style={{color: 'white'}}>Dont Have an Account? Sign In</Text>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    width:'80%',
    margin:10,
  },
  title:{
    fontSize:30,
    color:'#fff',
    fontWeight:'bold'
  },
  subtitle:{
    fontSize:15,
    color:'#fff',
    fontWeight:'bold'
  },
  formInput:{
    backgroundColor:'#fff',
    borderRadius:10,
    padding:10,
    marginBottom: 10,
  },

  button: {
    backgroundColor: 'orange',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: 150,
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  },

  conButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30
  },

  conText: {
    alignItems: 'center',
    padding: 10,
  },

  contInput: {
    position: 'relative',
    top: (posHeight),
  },

  social: {
    display: 'flex',
    flexDirection:'row',
    justifyContent: 'space-around',
    padding: 30,
  },

  logo: {
    width: 100,
    height: 100,
    
    
  },

  nameapp: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },

  contLogo: {
    alignItems: 'center',
    marginTop: 100
  }

});


export default LoginScreen;
