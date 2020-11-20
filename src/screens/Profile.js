import React, {useState, useEffect} from 'react'
import { ActivityIndicator, StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native'
import {connect} from 'react-redux';
import {logoutAction} from '../redux/action/auth'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Colors from '../styles/Colors';
import {r} from '../styles/Responsive'
import {getProfileDetail} from '../redux/action/profile'

const Profile = (props) => {
    // console.log(props)
    const [fullname, setFullname]   = useState('')
    const [username, setUsername]   = useState('')
    const [email, setEmail]         = useState('')
    const [password, setPassword]   = useState('')
    const [edit, setEdit]           = useState(false)

    useEffect(() => {
        props.getProfile()
    }, []);
    return (
        <ScrollView style={{flex:1, backgroundColor: Colors.primaryColor}}>
            <View style={styles.container}>
            {props.isLoading ? (
                <View style={{justifyContent: 'center', flex: 1}}>
                    <ActivityIndicator size="large" color={'white'}/>
                </View>
            ) : (
                <>
                    {edit ? (
                    <TouchableOpacity style={styles.btn_edit} onPress={() => setEdit(false)}>
                        <Text style={styles.btn_txt}>Cancel</Text>
                    </TouchableOpacity>
                    ) : (
                    <TouchableOpacity style={styles.btn_edit} onPress={() => setEdit(true)}>
                        <Text style={styles.btn_txt}>Edit </Text>
                        <Icon name='pencil-outline' size={r(20)} color="black" />
                    </TouchableOpacity>
                )}
                {edit ? (    
                    <TouchableOpacity style={{marginTop: r(16), alignSelf: 'center'}}>
                        <Image 
                            style={styles.img_profile}
                            source={{uri: props.dataProfile.url_image}} 
                        />
                        <View style={styles.icon_edit}>
                            <Icon name='pencil-outline' size={r(20)} color="white" />
                        </View>
                    </TouchableOpacity>
                ) : (
                    <View style={{marginTop: r(16), alignSelf: 'center'}}>
                        <Image 
                            style={styles.img_profile}
                            source={{uri: props.dataProfile.url_image}} 
                        />
                    </View>
                )}
                
                <View style={{marginTop: r(52)}}>
                    <TextInput
                        style={{...styles.txt_input,  color: edit? "white" : '#646464'}}
                        returnKeyType="next"
                        editable={edit}
                        value={props.dataProfile.full_name}
                        onChangeText={text => setFullname(text)}
                    /> 
                </View>
                <View style={{marginTop: r(20)}}>
                    <TextInput
                        style={{...styles.txt_input,  color: edit? "white" : '#646464'}}
                        returnKeyType="next"
                        editable={edit}
                        value={props.dataProfile.username}
                        onChangeText={text => setUsername(text)}
                    /> 
                </View>
                <View style={{marginTop: r(20)}}>
                    <TextInput
                        style={{...styles.txt_input,  color: edit? "white" : '#646464'}}
                        returnKeyType="next"
                        editable={edit}
                        value={props.dataProfile.email}
                        onChangeText={text => setEmail(text)}
                    /> 
                </View>
                <View style={{marginTop: r(20)}}>
                    <TextInput
                        style={{...styles.txt_input,  color: edit? "white" : '#646464'}}
                        returnKeyType="next"
                        placeholder={edit?'Change Password' : 'Password'}
                        placeholderTextColor={edit?'white':'#646464'}
                        secureTextEntry={true}
                        editable={edit}
                        value={password}
                        onChangeText={text => setPassword(text)}
                    /> 
                </View>
                {edit ? (
                    <TouchableOpacity style= {[styles.btn, {backgroundColor: '#516CE8'}]}>
                        <Text style={[styles.btn_txt, {color: 'white'}]}>SAVE</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity style= {styles.btn} onPress={() => props.processLogout()}>
                        <Text style={[styles.btn_txt, {color: 'black'}]}>LOGOUT</Text>
                    </TouchableOpacity>
                )}
                </>
                )}
            </View>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({
    isLoading: state.profile.isLoading,
    dataProfile: state.profile
  });
  
const mapDispatchToProps = (dispatch) => ({
    getProfile: () => dispatch(getProfileDetail()),
    processLogout: () => dispatch(logoutAction())
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);

const styles = StyleSheet.create({
    container:{
         flex:1,
         alignItems: 'center'
    },
    btn_edit: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto', 
        marginTop: r(30), 
        marginRight: r(30), 
        flexDirection: 'row', 
        width: r(90), 
        height: r(45), backgroundColor: 'white',
        borderRadius: r(100)
    },
    btn:{
        width: r(124), height: r(45), backgroundColor: 'white', borderRadius: r(100), justifyContent: 'center', alignItems: 'center', alignSelf: 'center', marginTop: r(58)
    },
    btn_txt:{
        fontFamily: 'Roboto-Bold',
        fontSize: r(18)
    },
    txt_input:{
        borderBottomWidth: 1, borderColor: 'white',
       
        width:r(297), height: r(40)
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
})
