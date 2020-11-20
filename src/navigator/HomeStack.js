import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home'
import Home_Details from '../screens/Home_Details'
import AllReview from '../screens/AllReview'
import Colors from '../styles/Colors'
const Stack = createStackNavigator()

 const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#848282',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
            <Stack.Screen name='Home' component={Home}
                options={{headerShown: false}}/>
            <Stack.Screen name='Home_Details' component={Home_Details}/>
            <Stack.Screen name='AllReview' component={AllReview}/>
        </Stack.Navigator>
    )
}

export default HomeStack
