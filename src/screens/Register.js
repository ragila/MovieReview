import React, {useState} from 'react'
import { ScrollView ,StyleSheet, Text, View, Image, TouchableOpacity, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Colors from '../styles/Colors'
import {r} from '../styles/Responsive'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import {connect} from 'react-redux'
import {registerAction} from '../redux/action/auth'

const Register = (props) => {
    const [ fullname, setFullname ] = useState(null)
    const [ username, setUsername ] = useState(null)
    const [ email, setEmail ]       = useState(null)
    const [ password, setPassword ] = useState(null)
    const [ image, setImage ]       = useState('https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png')        
    const [message, setMessage]     = useState(null);

    const checkRegist = () => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const dataRegister = {
            fullName: fullname,
            username: username,
            email   : email,
            password: password,
            urlImage: image       
        };
        !fullname?  setMessage('Please fill fullname'):
        !username?  setMessage('Please fill username'):
        !email?     setMessage('Please fill email'):
        reg.test(email) === false ? setMessage('Wrong Email Format'): 
        !password?  setMessage('Please fill password'):
        setMessage(null)||setFullname(null)||setUsername(null)||setEmail(null)||setPassword(null)||props.processRegist(dataRegister)
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
        <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : null}>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inner}>
                        <TouchableOpacity style={{marginTop: r(56), alignSelf: 'center'}}>
                            <Image 
                                style={styles.img_profile}
                                source={{uri: 'https://breakthrough.org/wp-content/uploads/2018/10/default-placeholder-image.png'}} 
                            />
                            <View style={styles.icon_edit}>
                                <Icon name='pencil-outline' size={r(20)} color="white" />
                            </View>
                        </TouchableOpacity>
                        <Text style={[styles.txt, {color: 'red', marginTop: r(25), alignSelf: 'center'}]}>{message}</Text>
                <View style={{width:r(297), height: r(40), marginTop: r(0)}}>
                    <TextInput
                        style={{ borderBottomWidth: 1, borderColor: 'white',color: 'white'}}
                        placeholder='Full Name'
                        placeholderTextColor="white"
                        returnKeyType="next"
                        value={fullname}
                        onChangeText={text => setFullname(text)}
                    />
                </View>
                <View style={{width:r(297), height: r(40), marginTop: r(20)}}>
                    <TextInput
                        style={{ borderBottomWidth: 1, borderColor: 'white',color: 'white'}}
                        placeholder='Username'
                        placeholderTextColor="white"
                        returnKeyType="next"
                        value={username}
                        onChangeText={text => setUsername(text)}
                    />
                </View>
                <View style={{width:r(297), height: r(40), marginTop: r(20)}}>
                    <TextInput
                        style={{ borderBottomWidth: 1, borderColor: 'white',color: 'white'}}
                        placeholder='Email'
                        placeholderTextColor="white"
                        returnKeyType="next"
                        value={email}
                        onChangeText={text => setEmail(text)}
                    />
                </View>
                <View style={{width:r(297), height: r(40), marginTop: r(20)}}>
                    <TextInput
                        style={{ borderBottomWidth: 1, borderColor: 'white',color: 'white'}}
                        placeholder='Password'
                        placeholderTextColor="white"
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
                    <TouchableOpacity style= {styles.btn} onPress={()=> checkRegist()}>
                        <Text style={styles.btn_txt}>SIGN UP</Text>
                    </TouchableOpacity>
                )}
                <View style={{alignSelf: 'center',marginTop: r(30), flexDirection: 'row'}}>
                    <Text style={styles.txt}>Already have an account?</Text>
                    <TouchableOpacity onPress={()=> {props.navigation.navigate('Login')}}>
                        <Text style={[styles.txt, {fontFamily: 'Roboto-Bold'}]}> Sign In</Text>
                    </TouchableOpacity>
                </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            </ScrollView>
                </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    isLoading: state.auth.isLoading
})

const mapDispatchToProps = (dispatch) => ({
    processRegist: (data) => dispatch(registerAction(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Register)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: Colors.primaryColor
    },
    img_profile:{
        width: r(100),
        height: r(100),
        borderRadius: r(100) / 2
    },
    icon_edit: {
        width: r(30),
        height: r(30),
        borderRadius: r(30)/ 2,
        backgroundColor: Colors.accentColor,
        marginLeft: 'auto',
        marginTop: r(-30),
        justifyContent: 'center',
        alignItems: 'center'
    },
    btn:{
        width: r(124), height: r(45), backgroundColor: 'white', borderRadius: r(100), justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: r(78)
    },
    btn_txt:{
        fontFamily: 'Roboto-Bold',
        fontSize: r(18)
    },
    txt:{
        fontFamily: 'Roboto',
        fontSize: r(15),
        color: 'white'
    },
    inner: {
        padding: 24,
        // flex: 1,
        justifyContent: "flex-end",
    }
})
