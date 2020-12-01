import React, {useState} from 'react'
import {Image} from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import UserReview from '../screens/UserReview'
import HomeStack from '../navigator/HomeStack'
import Profile from '../screens/Profile'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/FontAwesome'
import {r} from '../styles/Responsive'
import {connect} from 'react-redux'

const Tab = createBottomTabNavigator();

 const MainNavigator = (props) => {
    return(
        <Tab.Navigator initialRouteName='HomeStack' tabBarOptions={{activeTintColor: '#e91e63', showLabel: false}}>
            <Tab.Screen name='UserReview' component={UserReview}
                options={{
                    tabBarIcon: ({focused, size}) => {
                    const icons = focused
                        ? 'comment'
                        : 'comment-o'
                    return <Icons name={icons} size={size} color={'black'} style={{}}/>
                    }
                }}/>
            <Tab.Screen name='HomeStack' component={HomeStack}
                options={{
                    tabBarIcon: ({focused, size}) => {
                    const icon = focused
                        ? 'home-variant'
                        : 'home-variant-outline'
                    return <Icon name={icon} size={size} color={'black'} style={{}}/>
                    }
                }}
            />
            <Tab.Screen name='Profile' component={Profile}
                options={{
                    tabBarIcon: ({focused, }) => {
                        const border = focused
                        ? 1
                        : 0
                        return <Image source={{uri: 'https://miro.medium.com/fit/c/336/336/0*AGTV9FhhvlXkeT3d.'}} style={{width: r(30), height: r(30) , borderRadius: r(30)/ 2, borderWidth: border, borderColor: 'black'}} />
                    }
                }}
            />
        </Tab.Navigator>
    )
}

const mapStateToProps = (state) => ({
    profile: state.profile[0]
  });
  
  const mapDispatchToProps = (dispatch) => ({
    
  });

export default connect(mapStateToProps, mapDispatchToProps)(MainNavigator)
