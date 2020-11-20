import React, {useState} from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import Colors from '../styles/Colors'
import {r} from '../styles/Responsive'
import Icon from 'react-native-vector-icons/AntDesign'
import {connect} from 'react-redux'
import {loginAction} from '../redux/action/auth'

import { GoogleSignin } from '@react-native-community/google-signin';
import auth from '@react-native-firebase/auth';
GoogleSignin.configure({
    webClientId: '245742850946-rbb2tuqbdbm4qa63luda3iqd3rerg3tt',
  });

const Login = (props) => {
    const [ email, setEmail ] = useState('ragila@gmail.com')
    const [ password, setPassword ] = useState('1234')
    const [message, setMessage] = useState(null);

    async function onGoogleButtonPress() {
        try{
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();
            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            // Sign-in the user with the credential
            const res = await auth().signInWithCredential(googleCredential);
            console.log('res login by google', res)
        }  catch (err){
            console.error(err)
        }
      }
    const proc_login = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        !email? setMessage('Please fill email'):
        reg.test(email) === false ? setMessage('Wrong Email Format'): 
        !password? setMessage('Please fill password'):
        setMessage(null)||setEmail(null)||setPassword(null)||props.processLogin({email, password})
    }
    return (
        <View style={styles.container}>
            <Image source={require('../assets/image/movie_icon.png')} style={{marginTop: r(56)}} />
            <Image source={require('../assets/image/appname.png')} 
            />
            <Text style={[styles.txt, {color: 'red', marginTop: r(25)}]}>{message}</Text>
            <View style={{width:r(297), height: r(40), marginTop: r(5)}}>
                <TextInput
                    style={{ borderBottomWidth: 1, borderColor: 'white',color: 'white'}}
                    placeholder='Email'
                    placeholderTextColor="white"
                    autoCompleteType='email'
                    returnKeyType="next"
                    value={email}
                    onChangeText={text => setEmail(text)}
                 />
            </View>
                <View style={{margin:r(10)}}/>
                <View style={{width:r(297), height: r(40)}}>
                    <TextInput
                        style={{ borderBottomWidth: 1, borderColor: 'white',color: 'white'}}
                        placeholder='Password'
                        placeholderTextColor="white"
                        autoCompleteType='email'
                        returnKeyType="next"
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
                {props.isLoading ? (
                    <View style={[styles.btn, {backgroundColor: 'black'}]}>
                    <ActivityIndicator size="large" color="white" />
                    </View>
                ) : (
                    <TouchableOpacity style= {styles.btn} onPress={() => {proc_login()}}>
                        <Text style={styles.btn_txt}>SIGN IN</Text>
                    </TouchableOpacity>
                )}
                <View style={{alignSelf: 'center',marginTop: r(30), flexDirection: 'row'}}>
                    <Text style={styles.txt}>Don't have an account?</Text>
                    <TouchableOpacity onPress={()=> {props.navigation.navigate('Register'), setEmail(null), setPassword(null)}}>
                        <Text style={[styles.txt, {fontFamily: 'Roboto-Bold'}]}> Sign Up</Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{borderBottomWidth:1, width:r(126), borderColor: 'white', marginVertical  : r(30)}} />
                    <Text style={[styles.btn_txt, {marginHorizontal: r(15), color: 'white'}]}>or</Text>
                    <View style={{borderBottomWidth:1, width:r(126), borderColor: 'white', marginVertical  : r(30)}} />
                </View>
                <TouchableOpacity style={styles.btn_google} onPress={() => onGoogleButtonPress()}>
                    <Icon name='google' color='white' size={r(30)}/>
                    <Text style={styles.txt}> Sign in with Google</Text>
                </TouchableOpacity>
        </View>
    )
}
const mapStateToProps = (state) => ({
    isLoading       : state.auth.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    processLogin    : (data) => dispatch(loginAction(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.primaryColor
    },
    btn:{
        width: r(124), height: r(45), backgroundColor: 'white', borderRadius: r(100), justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: r(58)
    },
    btn_txt:{
        fontFamily: 'Roboto-Bold',
        fontSize: r(18)
    },
    btn_google:{
        width: r(220), height: r(50), borderColor: 'white', borderRadius: r(100), justifyContent: 'center', alignItems: 'center', flexDirection: 'row', backgroundColor: '#516CE8'
    },
    txt:{
        fontFamily: 'Roboto',
        fontSize: r(15),
        color: 'white',
    }
})
