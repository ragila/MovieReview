import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {connect} from 'react-redux'
import MainNavigator from '../navigator/MainNavigator'
import Login from '../screens/Login'
import Register from '../screens/Register'

const Stack = createStackNavigator();
const AppStack = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Main'>
                {props.statusLogin ? (
                    <Stack.Screen name='Main' component={MainNavigator}
                        options={{headerShown: false}}
                    />
                ) : (
                    <>
                    <Stack.Screen name='Login' component={Login} 
                        options={{headerShown: false}}/>
                    <Stack.Screen name='Register' component={Register} 
                        options={{headerShown: false}}/>
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const mapStateToProps = (state) => ({
    statusLogin: state.auth.isLoggedIn,
  });
  
const mapDispatchToProps = (dispatch) => ({
    
});
export default connect(mapStateToProps, mapDispatchToProps)(AppStack);
