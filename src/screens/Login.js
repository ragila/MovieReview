import React, { Component } from 'react';
import {StyleSheet,View,Text, TextInput, TouchableOpacity, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


const posHeight = Dimensions.get('window').height * 0.10;

class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contLogo}>
          <Image style={styles.logo} source={require('../images/iconlogin.png')}/>
          <Text style={styles.nameapp}>Movie Review</Text>
        </View>
        <View style={styles.contInput}>

          <TextInput
          placeholder='Email'
          style={styles.formInput}
          />

          <TextInput
          placeholder='Password'
          style={styles.formInput}
          />

          <View style={styles.conButton}>

            <TouchableOpacity>
              <Text style={styles.buttonText2}>Forgot Password?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.conText}>
          <TouchableOpacity>
              <Text style={{color: 'white'}}>Dont Have an Account? Sign Up</Text>
              </TouchableOpacity>
                
             
          </View>

          <View style={styles.social}>
         <TouchableOpacity><Text><Icon name="facebook" size={30} color={'#fff'} />></Text></TouchableOpacity>
         <TouchableOpacity><Text><Icon name="google" size={30} color={'#fff'} />></Text></TouchableOpacity>
         <TouchableOpacity><Text><Icon name="linkedin" size={30} color={'#fff'} />></Text></TouchableOpacity>
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
    fontWeight: 'bold'
  },
  buttonText2: {
    color: 'red',
    fontWeight: 'bold',
  },
  conButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
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
